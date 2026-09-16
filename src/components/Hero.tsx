'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Qualitative credentials, not head-count metrics — what the salon actually
// does differently, which is the honest version of social proof here.
// Kept to two words apiece: the plate is three narrow columns on a phone and
// anything longer wraps into ragged, uneven stacks.
const credentials = [
  { title: 'Diagnostika', desc: 'Pred kúrou' },
  { title: 'Malibu C', desc: 'Detox vlasov' },
  { title: 'Účesy', desc: 'Na udalosti' },
];

// Entry motion is CSS now (see globals.css) — transform only, never opacity,
// because Chromium will not pick a transparent element as the LCP candidate.
const rise = (y: number, delay: number) =>
  ({ '--rise': `${y}px`, '--rise-delay': `${delay}s` }) as React.CSSProperties;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Pause the always-on ambient animations once the hero is off-screen, so
  // their continuous repaint cost stops competing with scrolling elsewhere.
  const [ambientOn, setAmbientOn] = useState(true);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setAmbientOn(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  const ambientStyle = { animationPlayState: ambientOn ? 'running' : 'paused' };

  return (
    <header
      ref={ref}
      id="domov"
      className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden"
    >
      {/* 3D Animated gradient background */}
      <div className="absolute inset-0 hero-gradient-bg" style={ambientStyle} />
      <div className="mesh-gradient" style={ambientStyle} />

      {/* Ambient glow orbs — hidden on mobile for performance */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-gold/8 rounded-full blur-[100px] animate-glow hidden lg:block" style={ambientStyle} />
      <div className="absolute bottom-20 right-[20%] w-96 h-96 bg-blush/6 rounded-full blur-[120px] animate-glow hidden lg:block" style={ambientStyle} />

      <div className="hero-text-parallax flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-32 lg:pt-0 pb-12 lg:pb-0 relative z-10">
        <div
          style={rise(20, 0.2)}
          className="rise inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full bg-gold-light/40 border border-gold/30 w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-[0.75rem] tracking-[0.22em] uppercase text-espresso font-body font-medium">
            Starostlivosť o vlasy · Most pri Bratislave
          </span>
        </div>

        <h1
          style={rise(30, 0.3)}
          className="rise font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-deep-brown leading-[1.1] text-balance mb-6"
        >
          O vlasy sa staráme,{' '}
          <em className="italic text-mocha">nie iba o účes.</em>
        </h1>

        <p
          style={rise(30, 0.5)}
          className="rise text-[#5C4A35] text-lg lg:text-xl max-w-md mb-8 font-normal leading-relaxed text-pretty"
        >
          Regeneračné a rekonštrukčné kúry, hĺbkové čistenie vlasovej pokožky
          a účesy pre výnimočné dni. Každé ošetrenie navrhneme až po diagnostike
          vlasov — presne podľa toho, čo vaše vlasy potrebujú.
        </p>

        <div style={rise(30, 0.7)} className="rise flex flex-wrap gap-4">
          <a
            href="tel:+421950249838"
            className="group btn-primary-luxe inline-flex items-center gap-3 px-8 py-4 text-cream text-[0.82rem] tracking-[0.12em] uppercase font-medium"
          >
            Objednať sa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#sluzby"
            className="inline-flex items-center gap-3 px-7 py-4 border-2 border-espresso/80 text-espresso text-[0.82rem] tracking-[0.12em] uppercase font-medium hover:bg-espresso hover:text-cream transition-all duration-300"
          >
            Naše služby
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative lg:h-screen h-[50vh]">
        <div className="hero-image-parallax absolute inset-0">
          <Image
            src="/vysledky/ovlasy2.webp"
            alt="Hollywoodske vlny na zdravých blond vlasoch plných lesku — spoločenský účes zo salónu O VLASY by Zane v Moste pri Bratislave"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-white/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-warm-white/30 lg:via-transparent" />
        </div>

        {/* Credential plate — what we do, not how many we have done */}
        <div
          style={rise(40, 0.9)}
          className="rise absolute bottom-6 left-6 right-6 lg:bottom-12 lg:-left-8 lg:right-auto z-20"
        >
          <div className="flex items-center justify-center lg:justify-start bg-warm-white/95 backdrop-blur-sm shadow-luxury border-t-2 border-t-gold px-5 py-4 lg:px-8 lg:py-6">
            {credentials.map((c, i) => (
              <div key={c.title} className="flex items-center">
                {i > 0 && (
                  <span className="mx-3 lg:mx-6 h-10 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
                )}
                <div className="text-center lg:text-left">
                  <div className="font-display text-base lg:text-2xl font-medium text-deep-brown leading-tight">
                    {c.title}
                  </div>
                  <div className="text-[0.6rem] lg:text-[0.72rem] tracking-[0.08em] lg:tracking-[0.1em] uppercase text-espresso mt-1.5 leading-tight whitespace-nowrap">
                    {c.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
