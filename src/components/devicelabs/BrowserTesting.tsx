"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrowserTesting() {
  return (
    <section className="bg-[#030303] py-32 px-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
        
        {/* Right Side (Bento Grid Visuals) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="grid grid-cols-2 gap-4 h-[400px] sm:h-[500px]">
            {/* Top Left - Square */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative rounded-md overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl col-span-1 group"
            >
              <Image src="/assets/66fc49416a607a9c02f4bd04_card-tall-complex-flows-hq-p-500.webp" alt="Flows" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
            </motion.div>
            
            {/* Top Right - Tall */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative rounded-md overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl row-span-2 col-span-1 group"
            >
              <Image src="/assets/6852f436ba19260e1e1f1bfe_card-agent-action.webp" alt="Agent Action" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
            </motion.div>
            
            {/* Bottom Left - Square */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative rounded-md overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl col-span-1 group"
            >
              <Image src="/assets/68e97727a405c7cd4f58ca37_card-test-horizontal-stack.webp" alt="Test Stack" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
            </motion.div>
          </div>

          {/* Backdrop Glow */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00F2B0]/5 blur-[100px] pointer-events-none rounded-full" /> */}
        </motion.div>

        {/* Left Side (Content) */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              Enterprise-Grade <br />
              Browser <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Compatibility</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              Validate application compatibility, responsiveness, and UI behavior across Chrome, Firefox, Safari, Edge, and other modern browsers. Cross-browser execution capabilities help organizations identify rendering inconsistencies and user experience issues before production deployment.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              Execute tests in parallel across multiple combinations to significantly reduce testing timelines. Integrated reporting provides detailed insights into browser-specific failures for faster debugging and improved release confidence.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
