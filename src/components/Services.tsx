'use client';

import { useRef, useState } from 'react';
import Reveal from './Reveal';

const services = [
  {
    num: '01',
    title: 'Rekonštrukčné a regeneračné kúry',
    desc: 'Rekonštrukčná procedúra pre hĺbkovú regeneráciu suchých, lámavých a poškodených vlasov. Vráťia vašim vlasom lesk, silu a vitalitu — viditeľný výsledok už po prvom ošetrení. Ideálne pre farbené, chemicky ošetrené alebo suché vlasy.',
    details: [
      ['Hĺbková regenerácia', 'Intenzívna výživa pre suché vlasy'],
      ['Keratínové ošetrenie', 'Vyhladenie, lesk a ochrana vlákna'],
      ['Obnova štruktúry', 'Pre farbené a namáhané vlasy'],
      ['Efekt', 'Okamžitý a dlhotrvajúci výsledok'],
    ],
  },
  {
    num: '02',
    title: 'Predlžovanie vlasov',
    desc: 'Profesionálne predlžovanie a zahusťovanie vlasov prispôsobené vášmu typu vlasov a životnému štýlu. Používame výlučne 100% ľudské vlasy najvyššej kvality pre dokonale prirodzený vzhľad, ktorý vás nadchne.',
    details: [
      ['Keratínová metóda', 'Najtrvácnejší spoj, 4–6 mesiacov'],
      ['Micro-ring', 'Bez tepla a lepidla, najšetrnejšia'],
      ['Nano-ring', 'Najmenšie spoje, maximálna diskrétnosť'],
      ['Mikrokapsule', 'Neviditeľné spoje, revolúcia v predlžovaní'],
      ['Kvalita vlasov', '100% európske ľudské vlasy'],
    ],
  },
  {
    num: '03',
    title: 'Individuálna konzultácia',
    desc: 'Bezplatná osobná konzultácia, počas ktorej zhodnotíme stav vašich vlasov, navrhneme optimálne riešenie a pripravíme presnú cenovú kalkuláciu. Žiadne skryté poplatky — transparentný prístup od prvého stretnutia.',
    details: [
      ['Analýza vlasov', 'Stav, typ a hrúbka vlasov'],
      ['Návrh riešenia', 'Metóda, počet prameňov, dĺžka'],
      ['Cenová kalkulácia', 'Presná cena bez prekvapení'],
      ['Trvanie', 'Cca 30 minút, bezplatne'],
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTransform(
      `perspective(800px) rotateX(${(y - 0.5) * -8}deg) rotateY(${(x - 0.5) * 8}deg) translateZ(10px)`
    );
    setGlare({ x: x * 100, y: y * 100 });
  };

  const handleLeave = () => {
    setTransform('');
    setGlare({ x: 50, y: 50 });
  };

  return (
    <Reveal delay={index * 0.15}>
      <div
        ref={cardRef}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        className="relative bg-cream rounded-sm p-8 lg:p-10 transition-all duration-500 cursor-default overflow-hidden group"
        style={{
          transform: transform || undefined,
          transition: transform
            ? 'none'
            : 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(197,169,123,0.08) 0%, transparent 60%)`,
          }}
        />
        <div className="relative z-10">
          <span className="font-display text-5xl font-light text-sand/60 leading-none block mb-4">
            {service.num}
          </span>
          <h3 className="font-display text-2xl text-deep-brown mb-4">
            {service.title}
          </h3>
          <p className="text-sm text-[#8A7F72] leading-relaxed font-light mb-6">
            {service.desc}
          </p>
          <div className="border-t border-sand pt-4 space-y-2">
            {service.details.map(([label, value]) => (
              <div key={label} className="flex justify-between text-[0.82rem]">
                <span className="text-[#8A7F72]">{label}</span>
                <span className="text-deep-brown font-normal">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="sluzby" className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-xs tracking-[0.2em] uppercase text-mocha font-body block mb-4">
              Naše služby
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-light text-deep-brown">
              Špecializujeme sa na to, čo robíme{' '}
              <em className="italic text-mocha">najlepšie</em>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
