"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, AlertTriangle } from 'lucide-react';

export default function DefectInsights() {
  const cards = [
    { title: "Failure Trends", value: "Root Cause Analysis", icon: TrendingUp, color: "#6843B7" },
    { title: "Quality Risks", value: "Predictive Analytics", icon: AlertTriangle, color: "#f59e0b" },
    { title: "Execution Data", value: "AI Summarization", icon: Activity, color: "#00F2B0" }
  ];

  return (
    <section className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
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
          className="absolute bottom-1/3 right-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12 shadow-[0_0_15px_#00F2B0]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-start pt-4">
        
        {/* Left Side Text and Stats */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-[44px] font-black text-white mb-6 tracking-tight leading-[1.1]">
            AI-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Defect Insights</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
            Identify, analyze, and prioritize quality issues more effectively. AI-powered summarization transforms massive execution datasets into concise insights, accelerating defect resolution and data-driven decision-making.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`bg-white/[0.02] backdrop-blur-xl border border-white/10 p-5 rounded-md hover:bg-white/[0.05] transition-all group ${
                  i === 0 ? 'col-span-2 flex items-center gap-5' : 'col-span-1 flex flex-col gap-3'
                }`}
              >
                <div className="w-10 h-10 rounded-md bg-white/5 shrink-0 flex items-center justify-center transition-transform group-hover:scale-110" style={{ color: card.color }}>
                  <card.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-zinc-500 font-semibold text-[11px] uppercase tracking-wider mb-1">{card.title}</h3>
                  <p className="text-white text-base font-bold">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Visual - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-square md:aspect-[4/3] rounded-md border border-white/10 overflow-hidden shadow-2xl"
        >
          <Image
            src="/assets/69176c0974b136817d51ddff_Driving-QA-Transformation-thumb-p-500.webp"
            alt="Defect Intelligence Dashboard"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
