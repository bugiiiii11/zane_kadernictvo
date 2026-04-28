'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    q: 'Koľko stojí predlžovanie vlasov v Ivanke pri Dunaji?',
    a: 'Cena predlžovania vlasov závisí od zvolenej metódy (keratín, micro-ring, nano-ring alebo mikrokapsule), počtu prameňov a požadovanej dĺžky. Keratínové predlžovanie začína od 350 €, micro-ring od 300 €, nano-ring od 320 € a mikrokapsule od 400 €. Ponúkame bezplatnú konzultáciu, kde vám navrhneme optimálne riešenie a presnú cenu.',
  },
  {
    q: 'Aké metódy predlžovania vlasov ponúkate?',
    a: 'V salóne Good Hair by Zane ponúkame štyri overené metódy: keratínové predlžovanie (najtrvácnejší spoj, výdrž 4–6 mesiacov), micro-ring (bez tepla a lepidla, najšetrnejšia), nano-ring (najmenšie spoje, maximálna diskrétnosť) a mikrokapsule (neviditeľné spoje, revolúcia v predlžovaní). Všetky metódy používajú 100% ľudské vlasy najvyššej kvality.',
  },
  {
    q: 'Ako dlho vydržia predĺžené vlasy?',
    a: 'Predĺžené vlasy pri správnej starostlivosti vydržia 3 až 6 mesiacov v závislosti od metódy a rastu vlastných vlasov. Keratínové spoje vydržia najdlhšie (4–6 mesiacov), micro-ring a nano-ring 3–5 mesiacov. Po odrastení je možné pramene opätovne pripojiť, čo je výrazne lacnejšie ako nová aplikácia.',
  },
  {
    q: 'Poškodí predlžovanie moje vlastné vlasy?',
    a: 'Nie, pri správnej aplikácii a dodržaní starostlivosti predlžovanie vlasy nepoškodzuje. Používame šetrné metódy a kvalitné materiály. Na bezplatnej konzultácii zhodnotíme stav vašich vlasov a odporučíme najvhodnejšiu metódu — napríklad pre jemné vlasy sú ideálne nano-ring alebo mikrokapsule.',
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
      <div className={`border-b-2 transition-colors ${open ? 'border-gold/50' : 'border-sand'}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
          aria-expanded={open}
        >
          <span className="font-display text-lg lg:text-xl text-deep-brown pr-8 group-hover:text-espresso transition-colors font-normal">
            {faq.q}
          </span>
          <div
            className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              open ? 'bg-gold text-deep-brown' : 'bg-warm-white border border-sand text-mocha group-hover:border-gold group-hover:text-espresso'
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
            <p className="pb-5 text-sm text-[#5C4A35] leading-relaxed font-normal">
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
    <section id="faq" className="py-20 lg:py-28 bg-cream relative grain">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="section-label mb-5 mx-auto">
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
