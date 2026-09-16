'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

/**
 * Scroll-reveal that only ever *enhances*. Server HTML (and any client without
 * JS, headless crawlers, screenshots) gets fully visible content. After mount,
 * elements that are still below the fold are hidden and animate in when they
 * scroll into view; anything already on screen at mount stays put -- no
 * visible -> hidden -> visible flash on the first paint.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [animate, setAnimate] = useState(false);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const rect = el.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight;
    if (belowFold) setAnimate(true);
  }, [reduceMotion]);

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };
  const hidden = { opacity: 0, y: directions[direction].y, x: directions[direction].x };
  const shown = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={animate ? (isInView ? shown : hidden) : shown}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
