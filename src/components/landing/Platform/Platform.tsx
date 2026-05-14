"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Platform() {
  return (
    <section className="w-full px-6 md:px-12 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          The Cliqtest Agentic Platform
        </h2>
        
        <p className="text-xl md:text-3xl text-[#10B981] font-medium mb-10 leading-tight">
          Built to end brittle testing once and for all
        </p>

        <div className="w-full max-w-6xl mx-auto">
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
            Cliqtest is the first <span className="text-white font-bold">AI-native testing platform </span> powered by specialized agents that think, adapt, and act. 
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
            alt="Cliqtest Platform Monitor"
            fill
            className="object-cover"
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
