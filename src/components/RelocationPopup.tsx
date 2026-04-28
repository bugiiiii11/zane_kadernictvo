'use client';

import { useEffect, useState } from 'react';
import { X, MapPin } from 'lucide-react';

export default function RelocationPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed z-[60] right-4 bottom-4 lg:right-6 lg:bottom-6 max-w-[calc(100vw-2rem)] sm:max-w-sm transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        open
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-[120%] pointer-events-none'
      }`}
      role="dialog"
      aria-live="polite"
      aria-label="Oznámenie o presťahovaní salónu"
    >
      <div
        className="relative bg-warm-white rounded-sm overflow-hidden border-2 border-gold/70"
        style={{
          boxShadow:
            '0 0 0 1px rgba(197,169,123,0.15), 0 24px 60px -12px rgba(58,46,34,0.45), 0 12px 30px -8px rgba(197,169,123,0.35), 0 4px 12px rgba(58,46,34,0.18)',
        }}
      >
        {/* Top deep-brown header strip with gold accent */}
        <div className="bg-deep-brown px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold font-body font-medium">
              Dôležité oznámenie
            </span>
          </div>
          <button
            onClick={handleClose}
            aria-label="Zavrieť oznámenie"
            className="w-7 h-7 rounded-full flex items-center justify-center text-cream/70 hover:text-gold hover:bg-cream/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Gold separator line */}
        <div className="h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold" />

        {/* Content area */}
        <div className="p-6 lg:p-7 bg-warm-white">
          <h3 className="font-display text-[1.6rem] leading-[1.15] font-light text-deep-brown mb-3">
            Sťahujeme sa na{' '}
            <em className="italic text-mocha">nové miesto</em>
          </h3>

          <p className="text-sm text-[#6B5F52] leading-relaxed font-light mb-5">
            Naša pobočka sa momentálne presúva. Onedlho nás nájdete v novom
            priestore v meste{' '}
            <span className="text-deep-brown font-medium">
              Most pri Bratislave
            </span>
            . Ďakujeme za pochopenie a tešíme sa na vás v novom salóne.
          </p>

          <div className="flex items-center gap-2.5 pt-4 border-t border-sand">
            <div className="w-8 h-8 rounded-full bg-gold-light/60 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-espresso" />
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.12em] uppercase text-mocha font-body">
                Nová lokalita
              </div>
              <div className="text-sm text-deep-brown font-medium">
                Most pri Bratislave
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
