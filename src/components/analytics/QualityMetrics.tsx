"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function QualityMetrics() {
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

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00F2B0]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Visual Array */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 grid grid-cols-2 gap-4"
        >
          <div className="col-span-2 bg-gradient-to-br from-[#6843B7]/20 to-transparent p-[1px] rounded-md overflow-hidden">
            <div className="w-full h-full bg-[#050505] backdrop-blur-xl rounded-md p-8 flex items-center justify-between hover:bg-[#0a0a0a] transition-colors">
              <div>
                <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Execution Success</div>
                <div className="text-4xl font-black text-white">99.4%</div>
              </div>
              {/* <div className="w-16 h-16 rounded-full border-4 border-[#00F2B0] border-t-transparent animate-spin-slow" /> */}
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-md flex flex-col justify-center hover:bg-white/[0.04] transition-colors">
            <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Defect Density</div>
            <div className="text-2xl font-black text-[#6843B7]">Low Risk</div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-md flex flex-col justify-center hover:bg-white/[0.04] transition-colors">
            <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Test Coverage</div>
            <div className="text-2xl font-black text-[#6843B7]">Automated</div>
          </div>
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
            Critical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Quality Metrics</span>
          </h2>
          <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed mb-10">
            <p>
              Measure and monitor critical quality metrics that drive continuous improvement. Track execution success rates, defect density, automation stability, test coverage, and environment utilization within a centralized framework.
            </p>
            <p>
              Assess product quality, identify risk areas, and make informed release decisions based on measurable, real-time insights rather than assumptions.
            </p>
          </div>
          
          <button className="px-10 py-4 bg-[#6843B7] text-white text-[15px] font-bold rounded-md hover:bg-[#6843B7]/80 hover:scale-105 transition-all shadow-[0_0_30px_rgba(104,67,183,0.3)]">
            Establish Data-Driven QA
          </button>
        </motion.div>
      </div>
    </section>
  );
}
