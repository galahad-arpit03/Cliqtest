"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function TestGeneration() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Dynamic Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10 z-0">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12 shadow-[0_0_15px_#6843B7]"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12 shadow-[0_0_15px_#00F2B0]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start pt-4">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-[44px] font-black text-white mb-6 tracking-tight leading-[1.1]">
              Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Test Generation</span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                Automate and accelerate the creation of test cases from business requirements, BRDs, Jira stories, user journeys, and design screens such as Figma prototypes.
              </p>
              <p>
                The AI engine intelligently interprets functional flows, validation logic, and business scenarios to generate comprehensive and context-aware test cases—significantly reducing manual design effort while standardizing coverage across projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-md border border-white/10 overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/6852f436ba19260e1e1f1bfe_card-agent-action.webp"
              alt="Test Generation UI"
              fill
              className="object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="text-white font-bold text-xl mb-1">Transform Requirements</div>
              <div className="text-white/70 text-sm">Turn BRDs and Figma designs directly into executable validation scenarios instantly.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
