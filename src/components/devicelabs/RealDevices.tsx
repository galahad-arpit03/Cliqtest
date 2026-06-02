"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RealDevices() {
  return (
    <section className="bg-black py-32 px-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#6843B7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Images & Graphics */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative w-full aspect-square md:aspect-[4/3]">
            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-md overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl group">
              <Image 
                src="/assets/68e97727a405c7cd4f58ca37_card-test-horizontal-stack.webp"
                alt="Real Devices Validation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Glass UI Element (non-floating, 1/3rd outside bottom-right) */}
            <motion.div 
              className="absolute -bottom-12 -right-12 p-6 rounded-md bg-black/60 backdrop-blur-xl border border-white/10 max-w-[280px] shadow-2xl z-20"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#6843B7]/20 flex items-center justify-center text-[#6843B7]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                </div>
                <div className="text-white font medium text-lg">Real Insights</div>
              </div>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                Identify device-specific issues early in the testing lifecycle.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Reliable Insights into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Real-World Usage</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              Unlike emulators or simulators, real device testing provides reliable insights into application behavior and performance under actual usage scenarios. Gain scalable access to thousands of device combinations with centralized execution management, enabling teams to identify device-specific issues early and reduce production defects.
            </p>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-12">
              <div>
                <div className="text-4xl font-black text-white mb-2">10k+</div>
                <div className="text-sm font medium text-[#6843B7] uppercase tracking-wider">Device Combinations</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-sm font medium text-[#6843B7] uppercase tracking-wider">Real Environments</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
