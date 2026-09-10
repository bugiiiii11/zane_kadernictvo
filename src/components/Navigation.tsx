'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';

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
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile drawer: lock body scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={prefersReduced ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
          scrolled
            ? 'bg-[rgba(253,251,248,0.85)] py-3 shadow-[0_1px_0_rgba(197,169,123,0.2)]'
            : 'bg-[rgba(253,251,248,0.5)] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#"
            className="text-xl md:text-2xl rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="O VLASY by Zane — domov"
          >
            <Logo />
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.82rem] font-body font-normal tracking-[0.08em] uppercase text-[#4A4038] hover:text-espresso focus-visible:text-espresso focus-visible:outline-none transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:+421944854229"
                className="btn-primary-luxe inline-flex items-center gap-2 px-6 py-2.5 text-cream text-[0.78rem] tracking-[0.12em] uppercase font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white"
              >
                <Phone className="w-3.5 h-3.5" />
                Objednať sa
              </a>
            </li>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-deep-brown rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigácia"
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
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReduced ? 0 : i * 0.08, duration: 0.3 }}
                className="font-display text-3xl text-deep-brown hover:text-mocha focus-visible:text-mocha focus-visible:outline-none transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+421944854229"
              onClick={() => setOpen(false)}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReduced ? 0 : 0.5, duration: 0.3 }}
              className="mt-4 inline-flex items-center gap-2 px-8 py-3 bg-espresso text-cream text-sm tracking-[0.1em] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white"
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
