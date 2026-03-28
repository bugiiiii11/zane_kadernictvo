'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const links = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#cennik', label: 'Cenník' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#faq', label: 'Otázky' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass py-3 shadow-[0_1px_0_rgba(139,115,85,0.1)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-xl md:text-2xl text-deep-brown tracking-wide"
          >
            Good Hair{' '}
            <em className="text-mocha font-light italic">by Zane</em>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.82rem] font-body font-normal tracking-[0.08em] uppercase text-[#4A4038] hover:text-espresso transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+421944854229"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-espresso text-cream text-[0.78rem] tracking-[0.1em] uppercase hover:bg-deep-brown transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Objednať sa
              </a>
            </li>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-deep-brown"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-warm-white flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-display text-3xl text-deep-brown hover:text-mocha transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+421944854229"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 px-8 py-3 bg-espresso text-cream text-sm tracking-[0.1em] uppercase"
            >
              <Phone className="w-4 h-4" />
              +421 944 854 229
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
