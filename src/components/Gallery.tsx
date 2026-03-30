'use client';

import Image from 'next/image';
import Reveal from './Reveal';

const images = [
  {
    src: '/vysledky/image3.jpeg',
    alt: 'Predlžovanie vlasov Ivanka pri Dunaji — zahustenie a predĺženie blond vlasov v Good Hair by Zane',
    span: true,
  },
  {
    src: '/vysledky/image4.jpeg',
    alt: 'Regeneračná kúra pre poškodené kučeravé vlasy — premena na hladké a zdravé vlasy v Ivanke pri Dunaji',
  },
  {
    src: '/vysledky/image5.jpeg',
    alt: 'Regenerácia a vyhladenie namáhaných vlasov — pred a po ošetrení v salóne Good Hair by Zane',
  },
  {
    src: '/vysledky/image6.jpeg',
    alt: 'Keratínová regenerácia tmavých vlasov — lesk a vitalita po ošetrení Good Hair by Zane',
  },
  {
    src: '/vysledky/image7.jpeg',
    alt: 'Predlžovanie a zahusťovanie dlhých blond vlasov — výsledok v salóne Good Hair by Zane',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-xs tracking-[0.2em] uppercase text-mocha font-body block mb-4">
              Naša práca
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-light text-deep-brown">
              Výsledky, ktoré{' '}
              <em className="italic text-mocha">hovoria za nás</em>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className={img.span ? 'col-span-2 row-span-2' : ''}
            >
              <div className="relative overflow-hidden rounded-sm aspect-[3/4] group shadow-layered">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes={img.span ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 50vw, 25vw'}
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
