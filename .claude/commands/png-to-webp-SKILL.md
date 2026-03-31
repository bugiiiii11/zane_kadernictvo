---
name: img-to-webp
description: >
  Converts PNG, JPG, JPEG, BMP, and TIFF images to WebP format for faster web page loading and better performance.
  Use this skill whenever the user mentions image optimization, converting images to WebP, reducing image file sizes,
  improving page load speed, optimizing assets, or asks about WebP conversion in any web project.
  Also triggers for: "my images are too large", "optimize images", "convert images", "webp conversion",
  "slow loading images", "image performance", or any mention of PNG/JPG/JPEG files in a frontend project.
  Always use this skill proactively when the user wants faster website performance and images are involved.
---

# Image → WebP Converter Skill

Scans a project for `.png`, `.jpg`, `.jpeg`, `.bmp`, and `.tiff` files, converts them to `.webp` (preserving originals),
updates all code references in `.tsx`, `.jsx`, `.ts`, `.js`, `.html`, `.css`, and `.scss` files, and prints a before/after size report.

## When to use this skill

- User wants to optimize images for web performance
- Project contains `.png`, `.jpg`, `.jpeg`, or other raster images that could be served as `.webp`
- User mentions slow page loads and images are a factor
- User asks to "convert images", "optimize assets", or "add WebP support"

## Workflow

Follow these steps in order. Do not skip steps.

### Step 1 — Check dependencies

Run the setup check before anything else:

```bash
python scripts/convert.py --check
```

If Pillow is missing, install it:

```bash
pip install Pillow --break-system-packages --quiet
```

### Step 2 — Dry run (preview only, no changes)

Always show the user what will be converted before making changes:

```bash
python scripts/convert.py --dry-run --dir <project_root>
```

- Default `--dir` is `.` (current directory)
- Scans for `.png`, `.jpg`, `.jpeg`, `.bmp`, `.tiff` files by default
- Excludes `node_modules`, `.git`, `dist`, `build`, `.next`, `public/favicons` automatically
- Show the user the dry-run output and ask for confirmation before proceeding

### Step 3 — Convert (after user confirms)

```bash
python scripts/convert.py --dir <project_root> --quality 85
```

Options:
| Flag | Default | Description |
|------|---------|-------------|
| `--dir` | `.` | Root directory to scan |
| `--quality` | `85` | WebP quality 1–100 (85 is ideal for web) |
| `--no-update-refs` | off | Skip updating code references |
| `--exclude` | see below | Extra dirs to skip (comma-separated) |

Default excluded dirs: `node_modules`, `.git`, `dist`, `build`, `.next`, `out`, `.cache`

### Step 4 — Review the report

The script outputs a table like:

```
✅ Converted: 12 files
📁 Original size:   4.2 MB
📦 WebP size:       1.1 MB
💾 Saved:           3.1 MB (73.8%)

Updated references in:
  src/components/Hero.tsx         (2 refs)
  src/pages/About.tsx             (1 ref)
  public/index.html               (3 refs)
```

Show this report to the user and highlight the savings.

### Step 5 — Vite + React specifics

After conversion, remind the user of these Vite-specific notes:

1. **`public/` folder**: Files in `public/` are served as-is. If PNGs were there, the new `.webp` files are already served correctly — no config needed.

2. **Imported assets** (e.g. `import logo from './logo.png'`): The script updates these to `.webp`. Vite handles WebP imports natively.

3. **`<picture>` fallback** (optional, for older browser support):
   ```tsx
   <picture>
     <source srcSet="/images/hero.webp" type="image/webp" />
     <img src="/images/hero.png" alt="Hero" />
   </picture>
   ```
   Suggest this only if the user needs IE11 / Safari <14 support. Modern browsers (2020+) all support WebP.

4. **Verify build**: After conversion, suggest running:
   ```bash
   npm run build
   ```
   to confirm no broken imports.

## Notes

- Original files are **never deleted** — they stay as fallback
- The script skips images that already have a `.webp` counterpart (idempotent)
- Favicon files (e.g. `favicon.png`, `apple-touch-icon.png`) are skipped by default — they have strict format requirements
- Animated PNGs (APNG) are detected and skipped with a warning
- Supported input formats: `.png`, `.jpg`, `.jpeg`, `.bmp`, `.tiff`
