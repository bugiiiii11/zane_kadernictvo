'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  { title: '100% ľudské vlasy', desc: 'Najvyššia kvalita prameňov z Európy' },
  { title: 'Bezplatná konzultácia', desc: 'Poradíme vám s výberom metódy' },
  { title: 'Šetrné metódy', desc: 'Vaše vlasy nepoškodíme' },
  { title: 'Garancia spokojnosti', desc: '150+ spokojných klientok' },
];

export default function About() {
  return (
    <section
      id="o-nas"
      className="relative bg-cream py-20 lg:py-28 overflow-hidden grain"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div>
          <Reveal>
            <span className="text-xs tracking-[0.2em] uppercase text-mocha font-body block mb-4">
              O nás
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-light text-deep-brown mb-6">
              Luxusná starostlivosť pre{' '}
              <em className="italic text-mocha">zdravé a krásne vlasy</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[#8A7F72] mb-4 leading-relaxed font-light">
              Good Hair by Zane je vlasový salón v Ivanke pri Dunaji, ktorý sa
              špecializuje na profesionálne predlžovanie vlasov a prémiové
              regeneračné kúry. Ponúkame štyri overené metódy — keratínové
              predlžovanie, micro-ring, nano-ring a mikrokapsule — všetky s použitím výlučne
              100% ľudských vlasov najvyššej kvality.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-[#8A7F72] mb-8 leading-relaxed font-light">
              Každej klientke venujeme individuálnu pozornosť a navrhneme
              riešenie presne podľa jej typu vlasov, životného štýlu a
              očakávaní. Či chcete zdravšie
              vlasy alebo jednoducho dlhšie, hustejšie — sme tu pre vás. Navštívte nás len 15 minút od centra
              Bratislavy.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.3 + i * 0.1}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-espresso" />
                  </div>
                  <div>
                    <div className="text-sm font-body font-normal text-deep-brown">
                      {f.title}
                    </div>
                    <div className="text-xs text-[#8A7F72] font-light mt-0.5">
                      {f.desc}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} direction="right">
          <div className="grid grid-cols-2 gap-3 h-[420px] lg:h-[500px]">
            <div className="row-span-2 relative rounded overflow-hidden shadow-layered">
              <Image
                src="/vysledky/IMG_8590.webp"
                alt="Kadernícke stanice v salóne Good Hair by Zane — dve pracovné miesta so zrkadlami a kvetinovými dekoráciami"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded overflow-hidden shadow-layered">
              <Image
                src="/produkty/DSC_3649-HDR.webp"
                alt="Detail pracovného miesta Good Hair by Zane — osvetlené zrkadlo a profesionálne kadernícke nástroje"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded overflow-hidden shadow-layered">
              <Image
                src="/produkty/DSC_3592-HDR.jpg"
                alt="Prémiové vlasové produkty Sens.ùs a milk_shake používané v salóne Good Hair by Zane"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
