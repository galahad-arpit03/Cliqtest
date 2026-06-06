"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutHero() {

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
      className="relative min-h-[85vh] md:min-h-screen flex-col justify-center overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/about-hero.png"
          alt="Hero Background"
          fill
          priority
          unoptimized
          className="object-contain object-right md:object-right-top opacity-60"
        />
      </motion.div>
      {/* Dark overlay */}
      <div className="absolute z-0 inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/80 to-[#050505]/30 pointer-events-none" />
      <div className="absolute z-0 bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-32 pb-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          
          <span className="text-[#6843B7] text-[10px] md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block md:hidden">What is cliQTest?</span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            What is <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">cliQTest?</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg font-semibold leading-relaxed max-w-2xl mb-6">
            cliQTest was built with a vision to simplify and modernize enterprise quality engineering in an increasingly complex digital ecosystem.
          </p>

          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl mb-10">
            As organizations accelerate digital transformation, traditional approaches struggle to keep pace. cliQTest emerged as a unified, AI-driven platform designed to centralize test management, intelligent automation, and device labs—empowering enterprises to accelerate delivery, improve reliability, and reduce operational complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
 <button className="px-8 py-4 bg-[#6843B7] text-white rounded-sm hover:bg-[#6843B7]/90 transition-all  text-[14px]">
              Explore Platform
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
