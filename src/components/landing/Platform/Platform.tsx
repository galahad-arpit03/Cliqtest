"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Platform() {
  return (
    <section className="w-full px-4 md:px-8 py-24 relative overflow-hidden bg-[#030303] flex items-center justify-center">
      {/* Dynamic Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 z-0">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12"
        />
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-1/2 left-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#FF6F61] to-transparent transform rotate-45"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute bottom-1/2 right-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6AFFC4] to-transparent transform -rotate-45"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00F2B0] animate-pulse" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-widest">Platform Overview</span>
          </div>
           */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight leading-[1.2]">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">cliQTest</span> <br />
            Agentic Platform
          </h2>
          
          <div className="space-y-6">
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
              cliQTest is the first <span className="text-white font-semibold">AI-native testing platform </span> powered by specialized agents that think, adapt, and act. 
            </p>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
              These aren&apos;t scripts or plug-ins, they are intelligent systems built to <span className="text-[#6843B7]">eliminate the grind</span> of test creation and maintenance, 
              so engineering teams can finally move at the speed of innovation.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-white font-bold text-3xl">10x</span>
              <span className="text-zinc-500 text-sm uppercase tracking-wider mt-1">Faster Testing</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-3xl">0</span>
              <span className="text-zinc-500 text-sm uppercase tracking-wider mt-1">Maintenance</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[4/3] max-h-[600px] flex items-center justify-center" 
        >
          {/* Decorative Glow */}
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#6843B7]/30 to-[#00F2B0]/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" /> */}
          
          <div className="w-full h-full relative group">
            <Image
              src="/landing page/bn.png"
              alt="cliQTest Platform Monitor"
              fill
              className="object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
