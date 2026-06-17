'use client';

import Reveal from './Reveal';

type PriceItem = {
  name: string;
  price?: string;
  priceLines?: string[];
};

type Category = {
  title: string;
  items: PriceItem[];
  note?: string;
};

const categories: Category[] = [
  {
    title: 'Rekonštrukčné a regeneračné kúry',
    items: [
      { name: 'Prémiová rekonštrukčná kúra', price: 'od 90 €' },
      { name: 'Hĺbková regeneračná kúra', price: 'od 50 €' },
      { name: 'Keratínové ošetrenie', price: 'od 100 €' },
    ],
    note: 'Cena záleží od dĺžky a hustoty vlasov.',
  },
  {
    title: 'Braids',
    items: [
      { name: 'Vysoký cop', price: '60 €' },
      { name: 'Boxerské copíky', price: '30 €' },
      {
        name: 'Cornrows',
        priceLines: ['4 kusy – 40 €', '6 kusov – 60 €', '8 kusov – 80 €'],
      },
    ],
  },
  {
    title: 'Predlžovanie vlasov',
    items: [
      { name: 'Nadpojenie', price: '1 spoj – 0,60 €' },
      { name: 'Odpojenie', price: '50 – 80 €' },
      { name: 'Vlasy', price: 'od 250 €' },
    ],
    note: 'Vlasy sa kupujú zvlášť.',
  },
  {
    title: 'Spoločenský účes',
    items: [{ name: 'Spoločenský účes', price: '60 €' }],
  },
];

export default function Pricing() {
  return (
    <section id="cennik" className="py-20 lg:py-28 bg-cream relative grain">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="section-label mb-5 mx-auto">
              Cenník 2026/27
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-light text-deep-brown">
              Transparentné ceny pre{' '}
              <em className="italic text-mocha">každú klientku</em>
            </h2>
          </Reveal>
        </div>

        {categories.map((cat, ci) => (
          <Reveal key={cat.title} delay={ci * 0.1}>
            <div className="mb-10">
              <h3 className="font-display text-2xl text-deep-brown mb-5 pb-3 border-b-2 border-gold/40 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {cat.title}
              </h3>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-baseline py-4 border-b border-dotted border-sand group hover:bg-warm-white/40 transition-colors -mx-2 px-2 rounded-sm"
                >
                  <div className="pr-4 text-sm font-medium text-deep-brown group-hover:text-espresso transition-colors">
                    {item.name}
                  </div>
                  {item.priceLines ? (
                    <div className="text-right space-y-1">
                      {item.priceLines.map((line) => (
                        <div
                          key={line}
                          className="font-display text-lg font-semibold text-espresso whitespace-nowrap group-hover:text-gold transition-colors"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="font-display text-xl font-semibold text-espresso whitespace-nowrap group-hover:text-gold transition-colors">
                      {item.price}
                    </div>
                  )}
                </div>
              ))}
              {cat.note && (
                <p className="text-xs text-[#8A7F72] italic font-light mt-3">
                  {cat.note}
                </p>
              )}
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.3}>
          <p className="text-center text-sm text-[#8A7F72] italic font-light mt-6">
            * Konečná cena závisí od požadovanej dĺžky, počtu prameňov a
            zvolenej metódy. Pre presnú kalkuláciu si dohodnite bezplatnú
            konzultáciu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
