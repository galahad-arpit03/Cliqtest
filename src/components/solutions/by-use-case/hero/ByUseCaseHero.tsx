"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroData } from './heroData';

export default function ByUseCaseHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] md:min-h-screen bg-[#060411] flex flex-col justify-center border-b border-app-border overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image src={heroData.imageSrc} alt="Hero Background" fill priority unoptimized className="object-contain object-right md:object-right-top opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060411]/80 via-[#060411]/40 to-[#060411] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-app-bg via-app-bg/50 to-transparent pointer-events-none" />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  text-app-fg font-black tracking-tight leading-[1.1] mb-6">
            {heroData.titleLine1} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">
              {heroData.titleLine2}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-app-fg/60 leading-relaxed max-w-2xl mb-10">
            {heroData.description}
          </p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="inline-flex items-center gap-2 px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:bg-[#6843B7]/90 transition-all">
              {heroData.buttonText}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
