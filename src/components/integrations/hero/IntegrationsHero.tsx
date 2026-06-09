"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { heroData } from './heroData';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function IntegrationsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] md:min-h-screen bg-[#06050C] flex flex-col justify-center border-b border-white/5 overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src={heroData.imageSrc}
          alt="Hero Background"
          fill
          priority
          unoptimized
          className="object-contain object-right md:object-right-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06050C]/80 via-[#06050C]/40 to-[#06050C] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none" />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.1]">
            {heroData.titleLine1}
            <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">
              {heroData.titleLine2}
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Connect cliQTest with your favorite tools and platforms to create a unified, automated, and highly efficient software development lifecycle.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a href="#ci/cd-integrations" className="inline-flex items-center gap-2 px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:bg-[#6843B7]/90 transition-all">
              Explore Ecosystem
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
