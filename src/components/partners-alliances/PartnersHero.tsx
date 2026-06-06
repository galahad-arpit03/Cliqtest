"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PartnersHero() {

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
      className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/partners-hero.png"
          alt="Hero Background"
          fill
          priority
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
          <span className="text-[#6843B7] text-[10px] md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block md:hidden">Partners & Alliances</span>
          
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Partners & Alliances</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg font-semibold leading-relaxed max-w-2xl mb-6">
            Building a stronger, more resilient future through Technology Partners and Strategic Alliances.
          </p>

          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl mb-10">
            At cliQTest, we believe that true innovation happens collaboratively. By seamlessly integrating our unified quality engineering platform with the world's leading cloud providers, DevOps tools, and enterprise ecosystems, we empower organizations to accelerate their digital transformation. Together with our global network of partners, we deliver unparalleled value, ensuring your testing infrastructure is scalable, highly secure, and perfectly aligned with your business goals.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
