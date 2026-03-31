#!/usr/bin/env python3
"""Image → WebP converter. Supports PNG, JPG, JPEG, BMP, TIFF."""

import argparse
import os
import re
import sys
from pathlib import Path

SUPPORTED_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.tif'}
EXCLUDED_DIRS = {'node_modules', '.git', 'dist', 'build', '.next', 'out', '.cache'}
FAVICON_PATTERNS = {'favicon', 'apple-touch-icon', 'android-chrome', 'mstile'}
CODE_EXTENSIONS = {'.tsx', '.jsx', '.ts', '.js', '.html', '.css', '.scss'}


def check_deps():
    try:
        from PIL import Image
        print(f"✅ Pillow {Image.__version__} is installed")
        return True
    except ImportError:
        print("❌ Pillow is not installed. Run: pip install Pillow")
        return False


def is_favicon(path: Path) -> bool:
    name = path.stem.lower()
    return any(pat in name for pat in FAVICON_PATTERNS)


def find_images(root: Path, extra_excludes: list[str] = None) -> list[Path]:
    excludes = EXCLUDED_DIRS | set(extra_excludes or [])
    images = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in excludes]
        for f in filenames:
            p = Path(dirpath) / f
            if p.suffix.lower() in SUPPORTED_EXTENSIONS and not is_favicon(p):
                webp_path = p.with_suffix('.webp')
                if not webp_path.exists():
                    images.append(p)
    return sorted(images)


def convert_image(src: Path, quality: int) -> tuple[int, int]:
    from PIL import Image
    original_size = src.stat().st_size
    img = Image.open(src)

    # Skip animated PNGs
    if src.suffix.lower() == '.png':
        try:
            img.seek(1)
            print(f"  ⚠️  Skipping animated PNG: {src}")
            return 0, 0
        except EOFError:
            img.seek(0)

    # Convert RGBA to RGB for formats that don't support alpha (JPG)
    if img.mode in ('RGBA', 'LA', 'P'):
        img = img.convert('RGBA')
    elif img.mode != 'RGB':
        img = img.convert('RGB')

    dst = src.with_suffix('.webp')
    img.save(dst, 'WEBP', quality=quality)
    webp_size = dst.stat().st_size
    return original_size, webp_size


def update_references(root: Path, converted: list[Path]):
    """Update code references from original extensions to .webp."""
    code_files = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in EXCLUDED_DIRS]
        for f in filenames:
            p = Path(dirpath) / f
            if p.suffix.lower() in CODE_EXTENSIONS:
                code_files.append(p)

    ref_counts = {}
    for code_file in code_files:
        try:
            content = code_file.read_text(encoding='utf-8')
        except (UnicodeDecodeError, PermissionError):
            continue

        original_content = content
        count = 0
        for img_path in converted:
            # Build the reference pattern (relative path as used in code)
            # Match the filename with its original extension
            name_with_ext = img_path.name
            name_webp = img_path.with_suffix('.webp').name
            if name_with_ext in content:
                content = content.replace(name_with_ext, name_webp)
                count += content.count(name_webp)  # rough count

        if content != original_content:
            code_file.write_text(content, encoding='utf-8')
            # Recount actual replacements
            actual = sum(1 for img in converted if img.with_suffix('.webp').name in content)
            ref_counts[str(code_file)] = actual

    return ref_counts


def main():
    parser = argparse.ArgumentParser(description='Convert images to WebP')
    parser.add_argument('--check', action='store_true', help='Check if Pillow is installed')
    parser.add_argument('--dry-run', action='store_true', help='Preview only, no changes')
    parser.add_argument('--dir', default='.', help='Root directory to scan')
    parser.add_argument('--quality', type=int, default=85, help='WebP quality 1-100')
    parser.add_argument('--no-update-refs', action='store_true', help='Skip updating code references')
    parser.add_argument('--exclude', default='', help='Extra dirs to skip (comma-separated)')
    args = parser.parse_args()

    if args.check:
        sys.exit(0 if check_deps() else 1)

    root = Path(args.dir).resolve()
    extra_excludes = [e.strip() for e in args.exclude.split(',') if e.strip()]
    images = find_images(root, extra_excludes)

    if not images:
        print("No convertible images found.")
        return

    if args.dry_run:
        total_size = 0
        print(f"\n🔍 Dry run — {len(images)} images found:\n")
        for img in images:
            size = img.stat().st_size
            total_size += size
            rel = img.relative_to(root)
            print(f"  {rel}  ({size / 1024:.1f} KB)")
        print(f"\n📁 Total original size: {total_size / (1024*1024):.2f} MB")
        print("Run without --dry-run to convert.")
        return

    # Check Pillow before converting
    if not check_deps():
        sys.exit(1)

    print(f"\n🔄 Converting {len(images)} images to WebP (quality={args.quality})...\n")
    total_original = 0
    total_webp = 0
    converted = []

    for img in images:
        rel = img.relative_to(root)
        orig_size, webp_size = convert_image(img, args.quality)
        if orig_size > 0:
            total_original += orig_size
            total_webp += webp_size
            saved_pct = (1 - webp_size / orig_size) * 100 if orig_size > 0 else 0
            print(f"  ✅ {rel}  {orig_size/1024:.0f} KB → {webp_size/1024:.0f} KB  ({saved_pct:.1f}% saved)")
            converted.append(img)

    print(f"\n{'='*50}")
    print(f"✅ Converted: {len(converted)} files")
    print(f"📁 Original size:  {total_original / (1024*1024):.2f} MB")
    print(f"📦 WebP size:      {total_webp / (1024*1024):.2f} MB")
    saved = total_original - total_webp
    saved_pct = (saved / total_original * 100) if total_original > 0 else 0
    print(f"💾 Saved:          {saved / (1024*1024):.2f} MB ({saved_pct:.1f}%)")

    if not args.no_update_refs and converted:
        print(f"\n🔗 Updating code references...")
        ref_counts = update_references(root, converted)
        if ref_counts:
            print("\nUpdated references in:")
            for f, count in ref_counts.items():
                print(f"  {Path(f).relative_to(root)}  ({count} refs)")
        else:
            print("  No code references found to update.")


if __name__ == '__main__':
    main()
