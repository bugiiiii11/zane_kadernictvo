import Image from 'next/image';

/**
 * O VLASY by Zane — the founder's wordmark: a serif "OVLASY" whose O holds
 * three hair strands, over a gold rule. Two colour cuts of the same artwork,
 * because the mark sits on cream in the nav and on charcoal in the footer.
 * Sizing follows the inherited font-size, so callers keep using text-* classes.
 *
 * `public/logo-mark.webp` is the O-and-strands alone — the master the favicon
 * and apple-touch icon are cut from; regenerate those from it, not from a
 * screenshot.
 */
type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isDark = variant === 'dark';
  return (
    <span className={`inline-flex items-baseline gap-2.5 ${className}`}>
      <Image
        src={isDark ? '/logo-ovlasy.webp' : '/logo-ovlasy-light.webp'}
        alt="O VLASY by Zane"
        width={895}
        height={276}
        sizes="(max-width: 768px) 160px, 220px"
        className="h-[1.85em] w-auto self-center"
        priority
      />
      <em
        className={`font-display font-light italic leading-none text-[0.72em] ${
          isDark ? 'text-mocha' : 'text-gold'
        }`}
      >
        by Zane
      </em>
    </span>
  );
}
