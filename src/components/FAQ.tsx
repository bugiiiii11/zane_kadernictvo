'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'Koľko stojí predlžovanie vlasov v Ivanke pri Dunaji?',
    a: 'Cena predlžovania vlasov závisí od zvolenej metódy (keratín, tape-in alebo micro-ring), počtu prameňov a požadovanej dĺžky. Tape-in predlžovanie začína od 280 €, keratínové od 350 € a micro-ring od 300 €. Ponúkame bezplatnú konzultáciu, kde vám navrhneme optimálne riešenie a presnú cenu.',
  },
  {
    q: 'Aké metódy predlžovania vlasov ponúkate?',
    a: 'V salóne Good Hair by Zane ponúkame tri overené metódy: keratínové predlžovanie (najtrvácnejší spoj, výdrž 4–6 mesiacov), tape-in metódu (šetrná a rýchla aplikácia do 60 minút, ideálna pre jemné vlasy) a micro-ring techniku (úplne bez tepla a lepidla — najšetrnejšia k vlastným vlasom). Všetky metódy používajú 100% ľudské vlasy najvyššej kvality.',
  },
  {
    q: 'Ako dlho vydržia predĺžené vlasy?',
    a: 'Predĺžené vlasy pri správnej starostlivosti vydržia 3 až 6 mesiacov v závislosti od metódy a rastu vlastných vlasov. Keratínové spoje vydržia najdlhšie (4–6 mesiacov), tape-in pramene je potrebné prepojiť každých 6–8 týždňov. Po odrastení je možné pramene opätovne pripojiť, čo je výrazne lacnejšie ako nová aplikácia.',
  },
  {
    q: 'Poškodí predlžovanie moje vlastné vlasy?',
    a: 'Nie, pri správnej aplikácii a dodržaní starostlivosti predlžovanie vlasy nepoškodzuje. Používame šetrné metódy a kvalitné materiály. Na bezplatnej konzultácii zhodnotíme stav vašich vlasov a odporučíme najvhodnejšiu metódu — napríklad pre jemné vlasy je ideálna tape-in metóda.',
  },
  {
    q: 'Kde sa nachádza salón Good Hair by Zane?',
    a: 'Náš salón sa nachádza na adrese Cintorínska 272/1, 900 28 Ivanka pri Dunaji. Sme len 15 minút autom z centra Bratislavy a ľahko dostupní aj z obcí Bernolákovo, Most pri Bratislave a Senec. Parkovanie je priamo pred salónom.',
  },
  {
    q: 'Musím sa objednať vopred?',
    a: 'Áno, pracujeme výlučne na objednávku, aby sme vám mohli venovať plnú pozornosť a pripraviť všetko potrebné. Zavolajte nám na +421 944 854 229 alebo napíšte na goodhairbyzane@gmail.com a dohodneme termín, ktorý vám vyhovuje.',
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.08}>
      <div className="border-b border-sand">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
          aria-expanded={open}
        >
          <span className="font-display text-lg text-deep-brown pr-8 group-hover:text-mocha transition-colors">
            {faq.q}
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <Plus className="w-5 h-5 text-mocha" />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm text-[#8A7F72] leading-relaxed font-light">
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-cream relative grain">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-xs tracking-[0.2em] uppercase text-mocha font-body block mb-4">
              Časté otázky
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-light text-deep-brown">
              Všetko, čo potrebujete{' '}
              <em className="italic text-mocha">vedieť</em>
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
