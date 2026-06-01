"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CrossPlatform() {
  return (
    <section className="bg-black py-32 px-8 relative overflow-hidden">
      {/* Dynamic Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase">Cross Platform Testing</span>
          </div> */}
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-10 leading-[1.1] drop-shadow-xl">
            A Unified Ecosystem for <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Every Application Layer</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 text-center"
        >
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-5xl mx-auto">
            Unify your validation across web, mobile, desktop, and API through a single centralized platform. Standardize testing workflows, eliminate fragmented tools, and achieve scalable, future-ready quality engineering across every application layer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <button className="px-12 py-5 bg-white text-black text-lg font-black tracking-wide rounded-md hover:bg-[#6843B7] hover:text-white transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(104,67,183,0.5)] active:scale-95">
            Start Testing Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
