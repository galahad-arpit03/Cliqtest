"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TestManagementHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="/assets/landing hero.png"
          alt="Test Management Background"
          fill
          priority
          className="object-cover object-center scale-110"
        />
        {/* Rich Gradient Overlays for depth and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[#6843B7]/10 mix-blend-overlay pointer-events-none" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl leading-[1.05]"
        >
          Centralize Quality. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] via-[#9e7be9] to-[#ffffff]">
            Orchestrate Everything
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed"
        >
          cliQTest provides a structured approach to managing test cases, suites, and plans across the complete software testing lifecycle. Eliminate fragmented workflows and unify your quality engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-row w-full sm:w-auto gap-3 sm:gap-6"
        >
          <button className="flex-1 sm:flex-none px-4 sm:px-10 py-3.5 sm:py-4 bg-[#6843B7] text-white text-[12px] sm:text-[15px] font-bold rounded-md shadow-[0_0_40px_rgba(104,67,183,0.5)] hover:scale-105 active:scale-95 transition-all whitespace-nowrap">
            Manage Testing
          </button>
          <button className="flex-1 sm:flex-none px-4 sm:px-10 py-3.5 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[12px] sm:text-[15px] font-bold rounded-md hover:bg-white/10 hover:border-white/30 transition-all active:scale-95 whitespace-nowrap">
            View Features
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
        <div className="w-[1px] h-16 relative overflow-hidden bg-white/10">
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#6843B7] to-transparent"
          />
        </div>
        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Scroll</span>
      </motion.div>
    </section>
  );
}
