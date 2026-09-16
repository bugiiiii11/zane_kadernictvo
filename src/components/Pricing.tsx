import { Clock } from 'lucide-react';
import Reveal from './Reveal';

/**
 * `duration` is deliberately required: "ako dlho to trvá" is the most common
 * question before booking, and the site carried no answer at all until the
 * founder supplied these times. A new service must not ship without one.
 */
type PriceItem = {
  name: string;
  price?: string;
  priceLines?: string[];
  duration: string;
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
      {
        name: 'Prémiová rekonštrukčná kúra',
        price: 'od 90 €',
        duration: '120 min',
      },
      {
        name: 'Hĺbková regeneračná kúra',
        price: 'od 50 €',
        duration: '90 min',
      },
      { name: 'Keratínové ošetrenie', price: 'od 100 €', duration: '120 min' },
    ],
    note: 'Cena záleží od dĺžky a hustoty vlasov.',
  },
  {
    title: 'Hĺbkové čistenie vlasov a pokožky',
    items: [
      {
        name: 'Hĺbkové čistenie vlasovej pokožky a vlasov',
        price: 'od 50 €',
        duration: '60 min',
      },
    ],
    note: 'Detoxikačné ošetrenie Malibu C. Cena záleží od dĺžky a hustoty vlasov.',
  },
  {
    title: 'Účesy pre výnimočné udalosti',
    items: [
      { name: 'Spoločenský účes', price: 'od 60 €', duration: '60–90 min' },
      { name: 'Svadobný účes', price: 'od 60 €', duration: '60–90 min' },
      { name: 'Účes na stužkovú', price: 'od 60 €', duration: '60–90 min' },
    ],
    note: 'Účes na každú výnimočnú príležitosť. Skúšobný účes pred svadbou trvá približne 60 minút. Cena záleží od náročnosti účesu a dĺžky vlasov.',
  },
  {
    title: 'Braids',
    items: [
      { name: 'Vysoký cop', price: '60 €', duration: '60 min' },
      { name: 'Boxerské copíky', price: '30 €', duration: '60 min' },
      {
        name: 'Cornrows',
        priceLines: ['4 kusy – 40 €', '6 kusov – 60 €', '8 kusov – 80 €'],
        duration: '90 min',
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
            <span className="block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.15rem,3.8vw,3rem)] font-light text-deep-brown leading-tight text-balance">
              O vlasy férovo, o cenách otvorene
            </h2>
          </Reveal>
        </div>

        {categories.map((cat, ci) => (
          <Reveal key={cat.title} delay={ci * 0.08}>
            <div className="mb-12 lg:mb-14">
              <div className="flex items-center gap-3 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <h3 className="font-display text-2xl lg:text-[1.75rem] text-deep-brown font-normal">
                  {cat.title}
                </h3>
              </div>
              <span className="block h-px w-full bg-gradient-to-r from-gold/50 via-gold/20 to-transparent mb-1" />
              <dl>
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-baseline gap-8 py-5 border-b border-sand/70 last:border-b-0 group transition-colors"
                  >
                    <dt className="text-[1.0625rem] font-medium text-deep-brown group-hover:text-espresso transition-colors">
                      {item.name}
                      <span className="mt-1.5 flex items-center gap-1.5 text-[0.8rem] font-normal text-[#6B5A45]">
                        <Clock
                          className="h-3.5 w-3.5 shrink-0 text-gold"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span className="sr-only">Trvanie: </span>
                        {item.duration}
                      </span>
                    </dt>
                    <dd className="text-right shrink-0">
                      {item.priceLines ? (
                        <div className="space-y-1">
                          {item.priceLines.map((line) => (
                            <div
                              key={line}
                              className="font-display text-xl lg:text-2xl font-medium text-espresso whitespace-nowrap group-hover:text-gold transition-colors"
                            >
                              {line}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="font-display text-2xl lg:text-[1.75rem] font-medium text-espresso whitespace-nowrap group-hover:text-gold transition-colors">
                          {item.price}
                        </div>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              {cat.note && (
                <p className="text-[0.85rem] text-espresso italic mt-4">
                  {cat.note}
                </p>
              )}
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.2}>
          <p className="text-center text-[0.95rem] text-[#5C4A35] mt-10 max-w-xl mx-auto leading-relaxed">
            * Konečná cena aj uvedené trvanie závisia od dĺžky a hustoty vlasov
            a od zvoleného ošetrenia — časy sú orientačné. Pre presnú kalkuláciu
            si dohodnite bezplatnú konzultáciu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
