'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

const stats = [
  { num: '150+', label: 'Spokojných klientok' },
  { num: '10+', label: 'Rokov skúseností' },
  { num: '50+', label: 'Prémiových produktov' },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <header
      ref={ref}
      id="domov"
      className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden"
    >
      {/* 3D Animated gradient background */}
      <div className="absolute inset-0 hero-gradient-bg" />
      <div className="mesh-gradient" />

      {/* Ambient glow orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-gold/8 rounded-full blur-[100px] animate-glow" />
      <div className="absolute bottom-20 right-[20%] w-96 h-96 bg-blush/6 rounded-full blur-[120px] animate-glow" />

      <motion.div
        style={{ y: textY, opacity }}
        className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-32 lg:pt-0 pb-12 lg:pb-0 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-xs tracking-[0.2em] uppercase text-mocha font-body">
            Vlasový salón v Ivanke pri Dunaji
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-deep-brown leading-[1.1] mb-6"
        >
          Profesionálne{' '}
          <em className="italic text-mocha">predlžovanie vlasov</em> s luxusnou
          starostlivosťou
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-[#8A7F72] text-base lg:text-lg max-w-md mb-8 font-light leading-relaxed"
        >
          Špecializujeme sa na prémiové predlžovanie a zahusťovanie vlasov
          keratínovou, tape-in a micro-ring metódou. Viac ako 10 rokov
          skúseností, 150+ spokojných klientok a individuálny prístup ku každej
          jednej z vás.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="tel:+421944854229"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-espresso text-cream text-[0.82rem] tracking-[0.1em] uppercase hover:bg-deep-brown transition-all duration-300 hover:-translate-y-0.5 glow-gold-hover"
          >
            Objednať sa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#sluzby"
            className="inline-flex items-center gap-3 px-7 py-4 border border-sand text-espresso text-[0.82rem] tracking-[0.1em] uppercase hover:border-mocha transition-all duration-300"
          >
            Naše služby
          </a>
        </motion.div>
      </motion.div>

      {/* Hero image */}
      <div className="relative lg:h-screen h-[50vh]">
        <motion.div style={{ y: imageY }} className="absolute inset-0">
          {/* Placeholder - replace with actual salon image */}
          <div className="absolute inset-0 bg-gradient-to-br from-sand/40 via-gold-light/30 to-blush/20 flex items-center justify-center">
            <div className="text-center text-mocha/40">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-mocha/20 flex items-center justify-center">
                <Sparkles className="w-10 h-10" />
              </div>
              <p className="text-sm font-body tracking-wide uppercase">
                Foto salónu
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-warm-white/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-warm-white/30 lg:via-transparent" />
        </motion.div>

        {/* Stats cards */}
        <div className="absolute bottom-6 left-6 lg:bottom-12 lg:-left-8 flex gap-0.5 z-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9 + i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="glass px-4 py-3 md:px-5 md:py-4 text-center shadow-layered"
              style={{ perspective: '600px' }}
            >
              <div className="font-display text-2xl md:text-3xl font-medium text-espresso leading-none">
                {stat.num}
              </div>
              <div className="text-[0.65rem] md:text-[0.7rem] tracking-[0.06em] uppercase text-[#8A7F72] mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
}
