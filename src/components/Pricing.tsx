'use client';

import Reveal from './Reveal';

const categories = [
  {
    title: 'Predlžovanie vlasov',
    items: [
      {
        name: 'Keratínové predlžovanie',
        desc: '100% ľudské vlasy, najtrvácnejší spoj, výdrž 4–6 mesiacov. 50–200 prameňov podľa hustoty.',
        price: 'od 350 €',
      },
      {
        name: 'Micro-ring predlžovanie',
        desc: 'Bez tepla a lepidla — najšetrnejšia metóda. Spoj pomocou mikro krúžkov, ľahko odnímateľné.',
        price: 'od 300 €',
      },
      {
        name: 'Nano-ring predlžovanie',
        desc: 'Najmenšie spoje pre maximálnu diskrétnosť. Bez tepla a lepidla, ideálne pre jemné vlasy.',
        price: 'od 320 €',
      },
      {
        name: 'Mikrokapsulové predlžovanie',
        desc: 'Neviditeľné spoje — revolúcia v predlžovaní. Mikrokapsule sa aplikujú na jednotlivé vlasy pre dokonale prirodzený výsledok.',
        price: 'od 400 €',
      },
      {
        name: 'Prepojenie existujúcich prameňov',
        desc: 'Opätovné pripojenie po odrastení. Nový spoj, rovnaké vlasy — úspora bez kompromisu na kvalite.',
        price: 'od 150 €',
      },
    ],
  },
  {
    title: 'Regeneračné kúry',
    items: [    
      {
        name: 'Prémiová rekonštrukčná kúra',
        desc: 'Najúčinnejšia obnova pre intenzívne namáhané a chemicky ošetrené vlasy. Viditeľný efekt po 1 aplikácii.',
        price: 'od 85 €',
      },
      {
        name: 'Keratínové ošetrenie',
        desc: 'Vyhladenie, lesk a ochrana vlasového vlákna. Eliminuje krepovitosť, výsledok 6–8 týždňov.',
        price: 'od 100 €',
      },
     {
        name: 'Hĺbková regenerácia vlasov',
        desc: 'Intenzívna výživa pre suché a poškodené vlasy. Obnovuje hydratáciu, elasticitu a lesk.',
        price: 'od 45 €',
      },
    ],
  },
  {
    title: 'Konzultácie a doplnkové služby',
    items: [
      {
        name: 'Individuálna vlasová konzultácia',
        desc: 'Zhodnotenie stavu vlasov, návrh riešenia a presná cenová kalkulácia. Bez záväzkov.',
        price: 'Bezplatne',
      },
      {
        name: 'Starostlivosť o predĺžené vlasy',
        desc: 'Kontrola spojov, údržba, poradenstvo o správnej domácej starostlivosti.',
        price: 'od 25 €',
      },
    ],
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
                  <div className="pr-4">
                    <div className="text-sm font-medium text-deep-brown group-hover:text-espresso transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#6B5F52] mt-1 font-normal leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                  <div className="font-display text-xl font-semibold text-espresso whitespace-nowrap group-hover:text-gold transition-colors">
                    {item.price}
                  </div>
                </div>
              ))}
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
