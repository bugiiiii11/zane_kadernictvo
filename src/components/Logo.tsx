/**
 * O VLASY by Zane — wordmark (first draft; the final mark will replace it).
 * The "O" is a gold ring with a centred gold dot — the site's recurring
 * gold-dot motif — followed by "VLASY" in the display serif and a quiet
 * italic "by Zane".
 */
type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export function LogoMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="2.25" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isDark = variant === 'dark';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-[1.15em] w-[1.15em] shrink-0 text-gold" />
      <span
        className={`font-display leading-none tracking-[0.14em] uppercase ${
          isDark ? 'text-deep-brown' : 'text-cream'
        }`}
      >
        Vlasy
      </span>
      <em
        className={`font-display font-light italic normal-case tracking-normal leading-none ${
          isDark ? 'text-mocha' : 'text-gold'
        }`}
      >
        by Zane
      </em>
    </span>
  );
}
