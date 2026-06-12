"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { heroData } from './heroData';

export default function AnalyticsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] md:min-h-screen bg-app-bg flex flex-col justify-center border-b border-app-border overflow-hidden">
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src={heroData.imageSrc}
          alt="Analytics & Reporting Background"
          fill
          priority
          unoptimized
          className="object-cover object-center scale-100 opacity-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-app-bg/80 via-app-bg/40 to-app-bg pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-app-bg via-app-bg/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[#6843B7]/10 mix-blend-overlay pointer-events-none" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        {heroData.badge && <span className={`text-[10px] md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block md:hidden ${heroData.theme === "purple" ? "text-[#6843B7]" : "text-[#00F2B0]"}`}>{heroData.badge}</span>}
          <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-app-fg mb-6 drop-shadow-2xl leading-[1.05]"
        >
          {heroData.titleLine1} <br />
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${heroData.theme === "purple" ? "from-[#6843B7] via-[#9e7be9] to-[#ffffff]" : "from-[#00F2B0] via-[#00b382] to-[#ffffff]"}`}>
            {heroData.titleLine2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-lg text-app-fg/60 max-w-2xl leading-relaxed"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-row w-full sm:w-auto gap-3 sm:gap-6"
        >
          <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className={`flex-1 sm:flex-none px-4 sm:px-10 py-3.5 sm:py-4 ${heroData.theme === "purple" ? "bg-[#6843B7] text-white" : "bg-[#00F2B0] text-app-fg-invert font-semibold"} text-[12px] sm:text-[15px] rounded-sm hover:scale-105 active:scale-95 transition-all whitespace-nowrap`}>
            {heroData.buttonText}
          </button>
          
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <div className="w-[1px] h-16 relative overflow-hidden bg-app-fg/10">
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#6843B7] to-transparent"
          />
        </div>
        <span className="text-[10px] font-black text-app-fg/40 uppercase tracking-[0.4em]">Scroll</span>
      </motion.div>
    </section>
  );
}
