'use client';

import Reveal from './Reveal';

const images = [
  {
    alt: 'Predlžovanie vlasov Ivanka pri Dunaji — výsledok keratínovej metódy v Good Hair by Zane',
    span: true,
  },
  {
    alt: 'Tape-in predlžovanie vlasov — prirodzený výsledok, salón Good Hair by Zane',
  },
  {
    alt: 'Regeneračná kúra pre poškodené vlasy — starostlivosť v Ivanke pri Dunaji',
  },
  {
    alt: 'Zahusťovanie vlasov pre objem a dĺžku v Good Hair by Zane',
  },
  {
    alt: 'Luxusný interiér vlasového salónu Good Hair by Zane v Ivanke pri Dunaji',
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
                {/* Placeholder - replace with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-sand/60 via-gold-light/30 to-blush/20 flex items-center justify-center">
                  <span className="text-mocha/30 text-xs tracking-wide uppercase text-center px-4">
                    {img.alt.split('—')[0].trim()}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
