'use client';

import Image from 'next/image';
import Reveal from './Reveal';

const images = [
  {
    src: '/vysledky/IMG_9324.webp',
    alt: 'Predlžovanie a zahusťovanie dlhých blond kučeravých vlasov — výsledok v salóne Good Hair by Zane v Moste pri Bratislave',
    span: true,
  },
  {
    src: '/vysledky/IMG_7166.webp',
    alt: 'Predlžovanie vlasov keratínovou metódou — dokonale hladké blond vlasy v Good Hair by Zane',
  },
  {
    src: '/vysledky/IMG_9164.webp',
    alt: 'Zahusťovanie vlasov — luxusné platinové vlny po predĺžení v salóne Good Hair by Zane',
  },
  {
    src: '/vysledky/IMG_8938.webp',
    alt: 'Rekonštrukčná kúra pre tmavé vlasy — lesk a vitalita po ošetrení Good Hair by Zane',
  },
  {
    src: '/vysledky/IMG_7945.webp',
    alt: 'Kreatívne copánkové účesy s farebnými prameňmi v salóne Good Hair by Zane Most pri Bratislave',
  },
  {
    src: '/vysledky/zane1.webp',
    alt: 'Výsledok predlžovania vlasov — dlhé husté vlasy po ošetrení v salóne Good Hair by Zane v Moste pri Bratislave',
  },
  {
    src: '/vysledky/zane2.webp',
    alt: 'Predlžovanie a zahusťovanie vlasov — prirodzený a objemný výsledok v salóne Good Hair by Zane',
  },
  {
    src: '/vysledky/zane4.webp',
    alt: 'Profesionálne predĺžené vlasy 100% ľudskými vlasmi — výsledok v salóne Good Hair by Zane Most pri Bratislave',
  },
  {
    src: '/vysledky/zane5.webp',
    alt: 'Regeneračná kúra a žiarivé zdravé vlasy — výsledok ošetrenia v salóne Good Hair by Zane',
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
