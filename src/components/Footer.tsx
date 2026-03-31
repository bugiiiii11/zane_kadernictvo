'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-charcoal py-6 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-[0.75rem] text-cream/35">
        <span>
          &copy; {new Date().getFullYear()} Good Hair by Zane — Vlasový salón,
          Ivanka pri Dunaji
        </span>
        <span>
          Cintorínska 272/1, 900 28 Ivanka pri Dunaji |{' '}
          <a
            href="tel:+421944854229"
            className="text-cream/55 hover:text-gold transition-colors"
          >
            +421 944 854 229
          </a>
        </span>
      </div>
      <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-cream/10 flex justify-center">
        <a
          href="https://www.mdntech.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-[0.7rem] text-cream/30 transition-all duration-300 hover:text-cream/60"
        >
          <span>Vytvorené</span>
          <Image
            src="/pictures/mdntech-footer-logo.png"
            alt="M.D.N Tech"
            width={20}
            height={20}
            className="opacity-40 transition-all duration-300 group-hover:opacity-80 group-hover:scale-110"
          />
          <span className="transition-colors duration-300 group-hover:text-gold">
            M.D.N Tech
          </span>
        </a>
      </div>
    </footer>
  );
}
