"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, Zap } from 'lucide-react';

export default function SmartRecommendations() {
  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6843B7]/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-[44px] font-semibold text-white mb-8 tracking-tight leading-[1.1]">
            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Recommendations</span>
          </h2>
          <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed mb-10">
            <p>
              Continuously optimize testing strategies, automation coverage, and execution efficiency using our AI-driven recommendation engine.
            </p>
            <p>
              By analyzing historical execution behavior, defect trends, and environment performance, the platform suggests automation optimizations and maintenance actions to maximize effectiveness while reducing operational overhead.
            </p>
          </div>
          
          <button className="px-10 py-4 bg-[#6843B7] text-white text-[15px] font medium rounded-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(104,67,183,0.3)]">
            Proactive Optimization
          </button>
        </motion.div>

        {/* Right Visual Array */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative grid grid-cols-1 gap-4"
        >
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 rounded-md shadow-lg flex items-start gap-4">
            <div className="w-10 h-10 rounded-md bg-[#6843B7]/20 flex items-center justify-center shrink-0">
              <Lightbulb className="text-[#6843B7]" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-white font medium mb-1">Coverage Gap Detected</h4>
              <p className="text-zinc-500 text-sm">AI suggests generating 3 new test cases for recently updated payment flow.</p>
            </div>
          </div>
          
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 rounded-md shadow-lg flex items-start gap-4 ml-8 relative z-10">
            <div className="w-10 h-10 rounded-md bg-[#00F2B0]/20 flex items-center justify-center shrink-0">
              <Zap className="text-[#00F2B0]" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-white font medium mb-1">Execution Prioritization</h4>
              <p className="text-zinc-500 text-sm">Reordering test suites to run high-risk impact modules first, saving 25% execution time.</p>
            </div>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 rounded-md shadow-lg flex items-start gap-4 opacity-70">
            <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center shrink-0">
              <Settings className="text-white/60" size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-white/80 font medium mb-1">Maintenance Recommended</h4>
              <p className="text-zinc-500 text-sm">Clean up 15 redundant locators in the authentication module to improve stability.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
