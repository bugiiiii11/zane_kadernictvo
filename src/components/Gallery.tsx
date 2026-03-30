'use client';

import Image from 'next/image';
import Reveal from './Reveal';

const images = [
  {
    src: '/vysledky/IMG_9324.jpeg',
    alt: 'Predlžovanie a zahusťovanie dlhých blond kučeravých vlasov — výsledok v salóne Good Hair by Zane v Ivanke pri Dunaji',
    span: true,
  },
  {
    src: '/vysledky/IMG_8590.jpeg',
    alt: 'Predlžovanie vlasov keratínovou metódou — dokonale hladké blond vlasy v Good Hair by Zane',
  },
  {
    src: '/vysledky/IMG_9164.jpeg',
    alt: 'Zahusťovanie vlasov — luxusné platinové vlny po predĺžení v salóne Good Hair by Zane',
  },
  {
    src: '/vysledky/IMG_8938.jpeg',
    alt: 'Rekonštrukčná kúra pre tmavé vlasy — lesk a vitalita po ošetrení Good Hair by Zane',
  },
  {
    src: '/vysledky/IMG_7945.jpeg',
    alt: 'Kreatívne copánkové účesy s farebnými prameňmi v salóne Good Hair by Zane Ivanka pri Dunaji',
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
