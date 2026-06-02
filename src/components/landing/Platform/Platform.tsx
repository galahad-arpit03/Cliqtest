"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Platform() {
  return (
    <section className="w-full px-8 py-16 text-center relative overflow-hidden">
      {/* Dynamic Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30 z-0">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-[44px] font-semibold text-white mb-6 tracking-tight leading-[1.1]">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">cliQTest</span> Agentic Platform
        </h2>
        
        {/* <p className="text-xl md:text-3xl text-[#6843B7] font-medium mb-10 leading-tight">
          Built to end brittle testing once and for all
        </p> */}

        <div className="w-full max-w-7xl mx-auto">
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
            cliQTest is the first <span className="text-white font-semibold">AI-native testing platform </span> powered by specialized agents that think, adapt, and act. 
            These aren&apos;t scripts or plug-ins, they are intelligent systems built to eliminate the grind of test creation and maintenance, 
            so engineering teams can finally move at the speed of innovation.
          </p>
        </div>
      </motion.div>

      <div 
        className="mt-12 relative w-full max-w-5xl mx-auto aspect-video overflow-hidden " 
      >
        <div className="w-full h-full relative">
          <Image
            src="/landing page/monitor2.png"
            alt="cliQTest Platform Monitor"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          {/* Blending Overlays */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div> */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div> */}
          {/* <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,1)]"></div> */}
        </div>
      </div>
    </section>
  );
}
