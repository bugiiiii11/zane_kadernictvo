'use client';

import Reveal from './Reveal';

const services = [
  {
    title: 'Rekonštrukčné a regeneračné kúry',
    desc: 'Rekonštrukčná procedúra pre hĺbkovú regeneráciu suchých, lámavých a poškodených vlasov. Vráti vašim vlasom lesk, silu a vitalitu — viditeľný výsledok už po prvom ošetrení. Ideálne pre farbené, chemicky ošetrené alebo suché vlasy.',
    details: [
      ['Hĺbková regenerácia', 'Intenzívna výživa pre suché vlasy'],
      ['Keratínové ošetrenie', 'Vyhladenie, lesk a ochrana vlákna'],
      ['Obnova štruktúry', 'Pre farbené a namáhané vlasy'],
      ['Efekt', 'Okamžitý a dlhotrvajúci výsledok'],
    ],
  },
  {
    title: 'Hĺbkové čistenie vlasov a pokožky',
    desc: 'Detoxikačné ošetrenie Malibu C, ktoré z vlasov a pokožky hlavy odstráni minerály z tvrdej vody, chlór a nánosy stylingových produktov. Vlasy sú po ňom ľahšie, lesklejšie a lepšie prijímajú následnú kúru či farbu. Úľava aj pre podráždenú a svrbivú pokožku.',
    details: [
      ['Tvrdá voda a minerály', 'Odstráni usadeniny, ktoré vlasy zaťažujú'],
      ['Chlór a styling', 'Zbaví vlasy nánosov a matnosti'],
      ['Pokožka hlavy', 'Zmierni podráždenie, svrbenie a lupiny'],
      ['Zloženie', 'Vegánske, bez sulfátov a parabénov'],
    ],
  },
  {
    title: 'Účesy pre výnimočné udalosti',
    desc: 'Spoločenské, svadobné a účesy na stužkovú, ktoré vydržia celý večer. Účes navrhneme podľa vašich šiat, typu vlasov a charakteru udalosti, aby ste sa cítili prirodzene a výnimočne zároveň.',
    details: [
      ['Svadobný účes', 'Pre nevestu aj svadobčanky'],
      ['Spoločenský účes', 'Plesy, oslavy, firemné večery'],
      ['Stužková', 'Účes, ktorý vydrží do rána'],
      ['Skúšobný účes', 'Odporúčame pred veľkým dňom'],
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
  return (
    <Reveal delay={index * 0.12}>
      <article className="group relative h-full bg-warm-white p-8 lg:p-10 shadow-luxury border border-sand/70 transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:border-gold/40">
        {/* Gold hairline — the connective thread, grows on hover */}
        <span className="block h-px w-10 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-16" />

        <h3 className="font-display text-2xl lg:text-[1.7rem] text-deep-brown mt-6 mb-4 font-normal leading-snug">
          {service.title}
        </h3>
        <p className="text-[0.95rem] lg:text-base text-espresso leading-relaxed mb-7">
          {service.desc}
        </p>

        <dl className="border-t border-sand pt-6 grid grid-cols-2 gap-x-5 gap-y-4">
          {service.details.map(([label, value]) => (
            <div key={label}>
              <dt className="text-[0.95rem] font-medium text-deep-brown">
                {label}
              </dt>
              <dd className="text-[0.85rem] text-[#6B5A45] leading-relaxed mt-1">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </article>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="sluzby" className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Reveal>
            <span className="block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-7" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.15rem,3.8vw,3rem)] font-light text-deep-brown leading-tight text-balance">
              O vlasy sa staráme do hĺbky
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
