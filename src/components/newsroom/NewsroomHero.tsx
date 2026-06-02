"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function NewsroomHero() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden mb-20"
      style={{
        backgroundImage: "url('/about/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/80 to-[#050505]/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-32 pb-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">Newsroom</span>
          
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Newsroom</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg font-semibold leading-relaxed max-w-2xl mb-6">
            Product Announcements, Events & Webinars, and Media Coverage.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
