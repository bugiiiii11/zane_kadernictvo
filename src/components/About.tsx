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
      className="relative bg-cream py-24 lg:py-36 overflow-hidden grain"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div>
          <Reveal>
            <span className="block h-px w-12 bg-gradient-to-r from-gold to-gold-light mb-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.15rem,3.8vw,3rem)] font-light text-deep-brown leading-tight text-balance mb-6">
              Luxusná starostlivosť pre zdravé a krásne vlasy
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[#5C4A35] mb-4 leading-relaxed font-normal">
              Good Hair by Zane je vlasový salón v Moste pri Bratislave, ktorý sa
              špecializuje na profesionálne predlžovanie vlasov a prémiové
              regeneračné kúry. Ponúkame štyri overené metódy — keratínové
              predlžovanie, micro-ring, nano-ring a mikrokapsule — všetky s použitím výlučne
              100% ľudských vlasov najvyššej kvality.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-[#5C4A35] mb-8 leading-relaxed font-normal">
              Každej klientke venujeme individuálnu pozornosť a navrhneme
              riešenie presne podľa jej typu vlasov, životného štýlu a
              očakávaní. Či chcete zdravšie
              vlasy alebo jednoducho dlhšie, hustejšie — sme tu pre vás. Navštívte nás len 15 minút od centra
              Bratislavy.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mb-9">
              <span className="font-display text-[2.25rem] italic text-mocha leading-none">
                Zane
              </span>
              <p className="text-[0.75rem] tracking-[0.18em] uppercase text-espresso mt-2">
                Zakladateľka · Good Hair by Zane
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.4 + i * 0.1}>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold-light/40">
                    <Check className="h-3.5 w-3.5 text-espresso stroke-[2.5]" />
                  </span>
                  <div>
                    <div className="text-[0.95rem] font-body font-medium text-deep-brown">
                      {f.title}
                    </div>
                    <div className="text-[0.85rem] text-[#6B5A45] font-normal mt-1 leading-relaxed">
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
                src="/produkty/DSC_3592-HDR.webp"
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
