"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SelfHealing() {
  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5 overflow-hidden">
      {/* Dynamic Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-70 z-0">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12 shadow-[0_0_15px_#6843B7]"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-1/2 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12 shadow-[0_0_15px_#00F2B0]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side Visual - Healing Image */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative w-full aspect-square md:aspect-[4/3] rounded-md border border-white/10 overflow-hidden shadow-2xl"
        >
          <Image
            src="/assets/68e97727a405c7cd4f58ca37_card-test-horizontal-stack.webp"
            alt="Self Healing Execution"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6"
        >
          <h2 className="text-4xl md:text-[44px] font-black text-white mb-8 tracking-tight leading-[1.1]">
            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#00d09c]">Self-Healing</span>
          </h2>
          <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed mb-10">
            <p>
              Continuously monitor automation execution and intelligently adapt to changes in application UI elements, locators, layouts, and object properties.
            </p>
            <p>
              When automation scripts encounter broken references, the platform automatically identifies alternate locators and repairs execution flows in real time. This adaptive capability minimizes automation failures and eliminates frequent manual script updates.
            </p>
          </div>
          
          <button className="px-10 py-4 bg-white/5 border border-white/10 text-white text-[15px] font-bold rounded-md hover:bg-white/10 transition-all">
            Reduce Maintenance
          </button>
        </motion.div>
      </div>
    </section>
  );
}
