"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Dashboards() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5 overflow-hidden">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#6843B7]/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-[44px] font-black text-white mb-8 tracking-tight leading-[1.1]">
              Centralized, Real-Time <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Dashboards</span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                Transform complex testing data into actionable business and operational insights. Gain comprehensive visibility into execution progress, automation stability, defect trends, and release readiness across projects.
              </p>
              <p>
                Customizable dashboards enable stakeholders to monitor KPIs, track objectives, analyze outcomes, and identify bottlenecks instantly—consolidating multi-activity data into a unified, decision-ready interface.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: 'Execution Analytics', val: 'Real-time' },
                { label: 'Trend Analysis', val: 'Historical' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2 border-l-2 border-[#6843B7]/50 pl-4">
                  <span className="text-white text-xl font-bold">{stat.val}</span>
                  <span className="text-white/50 text-sm uppercase tracking-wider font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Visuals - Image Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-md border border-white/10 overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/66fc49416a607a9c02f4bd04_card-tall-complex-flows-hq-p-500.webp"
              alt="Analytics Dashboard"
              fill
              className="object-cover"
            />

            {/* Floating Element Overlap */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute bottom-6 left-6 p-6 rounded-md bg-[#00F2B0]/10 backdrop-blur-2xl border border-[#00F2B0]/20 shadow-[0_0_30px_rgba(0,242,176,0.15)] z-20"
            >
              <div className="text-[#00F2B0] font-black text-3xl mb-1">99.9%</div>
              <div className="text-white/70 text-xs uppercase tracking-widest font-bold">Release Readiness</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
