"use client";

import React from 'react';

import { motion } from 'framer-motion';

import { steps } from './featuresData';

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-[#050505] pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">Workflow</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">cliQTest</span> Works
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative"
        >
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />

          {steps.map((step, i) => (
            <motion.div variants={itemVariants} key={i} className="relative z-10 flex flex-col items-center text-center group">
              {/* Number Box */}
              <div className="w-14 h-14 rounded-md bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-white font-bold text-lg mb-8 group-hover:border-[#6843B7]/50 group-hover:bg-[#6843B7]/10 transition-all duration-300">
                {step.number}
              </div>

              {/* Content Card (Dark Theme) */}
              <div className="bg-[#0A0A0A] rounded-md p-6 border border-white/10 hover:border-[#6843B7]/30 hover:bg-white/[0.02] transition-all duration-300 flex-1 flex flex-col w-full shadow-lg">
                <h3 className="text-white text-base font-semibold mb-3 leading-tight group-hover:text-[#6843B7] transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/60 text-[13px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
