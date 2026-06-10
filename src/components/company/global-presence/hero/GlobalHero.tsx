"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { heroData } from './heroData';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GlobalHero() {

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden mb-20"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
        <Image
          src={heroData.imageSrc}
          alt="Hero Background"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
      </motion.div>
      {/* Dark overlay */}
      <div className="absolute z-0 inset-0 bg-gradient-to-r from-app-bg/95 via-app-bg/80 to-app-bg/30 pointer-events-none" />
      <div className="absolute z-0 bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-app-bg to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-32 pb-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-[#6843B7] text-[10px] md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block md:hidden">Global Presence</span>
          
          <h1 className="text-app-fg text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Global Presence</span>
          </h1>

          <p className="text-app-fg/90 text-base md:text-lg font-semibold leading-relaxed max-w-2xl mb-6">
            Delivery & Support worldwide.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
