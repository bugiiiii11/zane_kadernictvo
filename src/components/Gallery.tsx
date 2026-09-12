'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

/**
 * Two bodies of work live here — event hairstyles and hair-health results —
 * and at sixteen photos a single flat grid stopped reading as either. The
 * filter groups them by service; every photo stays in the DOM so its alt text
 * is always indexable, filtered ones are only hidden.
 */
type Category = 'ucesy' | 'braids' | 'starostlivost';

const filters = [
  { id: 'all', label: 'Všetko' },
  { id: 'ucesy', label: 'Účesy na udalosti' },
  { id: 'braids', label: 'Copánky' },
  { id: 'starostlivost', label: 'Starostlivosť o vlasy' },
] as const;

type Filter = (typeof filters)[number]['id'];

const images: { src: string; alt: string; cat: Category }[] = [
  {
    src: '/vysledky/ovlasy3.webp',
    alt: 'Elegantný vyčesaný drdol s objemom na tmavých vlasoch — spoločenský účes zo salónu O VLASY by Zane v Moste pri Bratislave',
    cat: 'ucesy',
  },
  {
    src: '/vysledky/IMG_9324.webp',
    alt: 'Dlhé blond vlnité vlasy plné objemu a lesku — výsledok starostlivosti v salóne O VLASY by Zane v Moste pri Bratislave',
    cat: 'starostlivost',
  },
  {
    src: '/vysledky/ovlasy7.webp',
    alt: 'Polovyčesaný svadobný účes s vpletenými ružičkami a dlhými kučerami — O VLASY by Zane',
    cat: 'ucesy',
  },
  {
    src: '/vysledky/zane4.webp',
    alt: 'Vpletené copánky prechádzajúce do hladkého copu — braids v salóne O VLASY by Zane',
    cat: 'braids',
  },
  {
    src: '/vysledky/ovlasy2.webp',
    alt: 'Hollywoodske vlny na blond vlasoch — spoločenský účes na svadbu či stužkovú',
    cat: 'ucesy',
  },
  {
    src: '/vysledky/zane1.webp',
    alt: 'Dlhé husté vlasy s prirodzeným leskom po regeneračnej kúre v salóne O VLASY by Zane v Moste pri Bratislave',
    cat: 'starostlivost',
  },
  {
    src: '/vysledky/ovlasy1.webp',
    alt: 'Spoločenský drdol vyskladaný z kučier na blond vlasoch — účes na výnimočnú udalosť',
    cat: 'ucesy',
  },
  {
    src: '/vysledky/IMG_7945.webp',
    alt: 'Kreatívny copánkový účes (braids) s farebnými prameňmi v salóne O VLASY by Zane Most pri Bratislave',
    cat: 'braids',
  },
  {
    src: '/vysledky/ovlasy5.webp',
    alt: 'Mäkké vlny na dlhých karamelových vlasoch — účes na spoločenskú udalosť',
    cat: 'ucesy',
  },
  {
    src: '/vysledky/IMG_8938.webp',
    alt: 'Rekonštrukčná kúra pre tmavé vlasy — lesk a vitalita po ošetrení v salóne O VLASY by Zane',
    cat: 'starostlivost',
  },
  {
    src: '/vysledky/ovlasy4.webp',
    alt: 'Vysoký kučeravý cop s objemom na dlhých blond vlasoch — účes na stužkovú',
    cat: 'ucesy',
  },
  {
    src: '/vysledky/zane2.webp',
    alt: 'Detské vpletené copánky (braids) na temene hlavy — účes zo salónu O VLASY by Zane',
    cat: 'braids',
  },
  {
    src: '/vysledky/ovlasy6.webp',
    alt: 'Vyčesaný účes s výraznou textúrou na tmavých vlasoch — bočný pohľad, O VLASY by Zane',
    cat: 'ucesy',
  },
  {
    src: '/vysledky/IMG_7166.webp',
    alt: 'Dokonale hladké a lesklé vlasy po keratínovom ošetrení v salóne O VLASY by Zane',
    cat: 'starostlivost',
  },
  {
    src: '/vysledky/IMG_9164.webp',
    alt: 'Dlhé platinové vlny — spoločenský účes pripravený v salóne O VLASY by Zane',
    cat: 'ucesy',
  },
  {
    src: '/vysledky/zane5.webp',
    alt: 'Dievčenské účesy s vpletenými copánkami — braids v salóne O VLASY by Zane Most pri Bratislave',
    cat: 'braids',
  },
];

export default function Gallery() {
  const [active, setActive] = useState<Filter>('all');

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <Reveal>
            <span className="block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.15rem,3.8vw,3rem)] font-light text-deep-brown leading-tight text-balance">
              Výsledky, ktoré hovoria za nás
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-[#5C4A35] leading-relaxed font-normal text-pretty">
              Účesy na svadby, stužkové a spoločenské udalosti, vpletené
              copánky — a vlasy, ktoré sa po kúrach vrátili do formy.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {filters.map((f) => {
              const on = active === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActive(f.id)}
                  aria-pressed={on}
                  className={`px-5 py-2.5 text-[0.72rem] sm:text-[0.76rem] tracking-[0.14em] uppercase font-body font-medium border transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white ${
                    on
                      ? 'border-gold bg-gold-light/45 text-deep-brown'
                      : 'border-sand text-espresso hover:border-gold/60 hover:bg-gold-light/20'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.08}
              className={active === 'all' || img.cat === active ? '' : 'hidden'}
            >
              <div className="relative overflow-hidden rounded-sm aspect-[3/4] group shadow-layered">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
