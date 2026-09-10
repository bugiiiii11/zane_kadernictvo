'use client';

import Image from 'next/image';
import Reveal from './Reveal';

const images = [
  {
    src: '/vysledky/IMG_9324.webp',
    alt: 'Dlhé blond kučeravé vlasy plné objemu a lesku — výsledok starostlivosti v salóne O VLASY by Zane v Moste pri Bratislave',
    span: true,
  },
  {
    src: '/vysledky/IMG_7166.webp',
    alt: 'Dokonale hladké a lesklé blond vlasy po keratínovom ošetrení v salóne O VLASY by Zane',
  },
  {
    src: '/vysledky/IMG_9164.webp',
    alt: 'Luxusné platinové vlny — spoločenský účes pripravený v salóne O VLASY by Zane',
  },
  {
    src: '/vysledky/IMG_8938.webp',
    alt: 'Rekonštrukčná kúra pre tmavé vlasy — lesk a vitalita po ošetrení v salóne O VLASY by Zane',
  },
  {
    src: '/vysledky/IMG_7945.webp',
    alt: 'Kreatívne copánkové účesy (braids) s farebnými prameňmi v salóne O VLASY by Zane Most pri Bratislave',
  },
  {
    src: '/vysledky/zane1.webp',
    alt: 'Dlhé husté vlasy s prirodzeným leskom po regeneračnej kúre v salóne O VLASY by Zane v Moste pri Bratislave',
  },
  {
    src: '/vysledky/zane2.webp',
    alt: 'Objemné vlasy s prirodzeným pohybom — výsledok starostlivosti o vlasy v salóne O VLASY by Zane',
  },
  {
    src: '/vysledky/zane4.webp',
    alt: 'Zdravé dlhé vlasy po hĺbkovom čistení a regeneračnej kúre v salóne O VLASY by Zane Most pri Bratislave',
  },
  {
    src: '/vysledky/zane5.webp',
    alt: 'Regeneračná kúra a žiarivé zdravé vlasy — výsledok ošetrenia v salóne O VLASY by Zane',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Reveal>
            <span className="block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.15rem,3.8vw,3rem)] font-light text-deep-brown leading-tight text-balance">
              Výsledky, ktoré hovoria za nás
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
