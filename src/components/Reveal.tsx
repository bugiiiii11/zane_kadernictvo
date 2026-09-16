'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const offsets = {
  up: { x: '0', y: '40px' },
  down: { x: '0', y: '-40px' },
  left: { x: '40px', y: '0' },
  right: { x: '-40px', y: '0' },
  none: { x: '0', y: '0' },
};

/**
 * Scroll-reveal that only ever *enhances*. Server HTML (and any client without
 * JS, headless crawlers, screenshots) gets fully visible content. After mount,
 * elements that are still below the fold are hidden and animate in when they
 * scroll into view; anything already on screen at mount stays put -- no
 * visible -> hidden -> visible flash on the first paint.
 *
 * Plain IntersectionObserver plus a CSS transition. This used to be a
 * framer-motion component; at 31 instances it was the single largest
 * main-thread cost on the page, and nothing here needs a motion library.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<'static' | 'hidden' | 'shown'>('static');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Already on screen at mount: leave it exactly as the server drew it.
    if (el.getBoundingClientRect().top <= window.innerHeight) return;

    setPhase('hidden');

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPhase('shown');
        io.disconnect();
      },
      { rootMargin: '-80px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const { x, y } = offsets[direction];

  return (
    <div
      ref={ref}
      className={`${phase === 'hidden' ? 'reveal-hidden' : ''}${
        phase === 'shown' ? 'reveal-shown' : ''
      } ${className}`.trim()}
      style={
        phase === 'static'
          ? undefined
          : ({
              '--reveal-x': x,
              '--reveal-y': y,
              '--reveal-delay': `${delay}s`,
              '--reveal-duration': `${duration}s`,
            } as React.CSSProperties)
      }
    >
      {children}
    </div>
  );
}
