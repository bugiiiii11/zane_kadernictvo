'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';
import { faqs, type Faq } from '@/content/faqs';


function FAQItem({ faq, index }: { faq: Faq; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.08}>
      <div className={`border-b transition-colors duration-300 ${open ? 'border-gold/60' : 'border-sand'}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-6 py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold/60"
          aria-expanded={open}
        >
          <span className="font-display text-lg lg:text-xl text-deep-brown group-hover:text-espresso transition-colors font-normal text-balance">
            {faq.q}
          </span>
          <div
            className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              open
                ? 'bg-gold text-deep-brown'
                : 'bg-warm-white border border-sand text-mocha group-hover:border-gold group-hover:text-espresso'
            }`}
            style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
          </div>
        </button>
        <div
          className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.25,0.4,0.25,1)]"
          style={{
            gridTemplateRows: open ? '1fr' : '0fr',
            opacity: open ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">
            <p className="pb-6 pr-2 text-[0.95rem] text-[#5C4A35] leading-relaxed font-normal text-pretty">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-cream relative grain">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Reveal>
            <span className="block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.15rem,3.8vw,3rem)] font-light text-deep-brown leading-tight text-balance">
              Všetko, čo potrebujete vedieť
            </h2>
          </Reveal>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
