'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12 lg:py-16 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Gold hairline — the connective signature thread */}
        <span className="block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />

        <a
          href="#"
          className="font-display text-2xl lg:text-3xl tracking-wide text-cream transition-colors hover:text-gold-light focus-visible:outline-none focus-visible:text-gold-light"
        >
          Good Hair <em className="italic font-light text-gold">by Zane</em>
        </a>

        <p className="mt-4 text-[0.95rem] text-cream/70 leading-relaxed">
          Predlžovanie a regeneračné kúry vlasov
          <span className="mx-2 text-gold/50">·</span>
          Most pri Bratislave
        </p>

        <p className="mt-5 text-[0.95rem] text-cream/70 leading-relaxed">
          Nové polia 2, 900 46 Most pri Bratislave
          <span className="mx-2 text-cream/30 hidden sm:inline">·</span>
          <br className="sm:hidden" />
          <a
            href="tel:+421944854229"
            className="text-cream/80 hover:text-gold transition-colors focus-visible:outline-none focus-visible:text-gold"
          >
            +421 944 854 229
          </a>
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[0.9rem] text-cream/60 order-2 sm:order-1">
          &copy; {new Date().getFullYear()} Good Hair by Zane. Všetky práva
          vyhradené.
        </span>
        <a
          href="https://www.mdntech.org/sk/"
          target="_blank"
          rel="noopener noreferrer"
          className="group order-1 sm:order-2 flex items-center gap-2 text-[0.85rem] text-cream/60 transition-colors duration-300 hover:text-cream/80 focus-visible:outline-none focus-visible:text-cream/80"
        >
          <span>Vytvorené</span>
          <Image
            src="/pictures/mdntech-footer-logo.png"
            alt="M.D.N Tech"
            width={20}
            height={20}
            className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
          />
          <span className="transition-colors duration-300 group-hover:text-gold">
            M.D.N Tech
          </span>
        </a>
      </div>
    </footer>
  );
}
