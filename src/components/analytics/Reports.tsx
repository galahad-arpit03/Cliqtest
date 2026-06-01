"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Bug, History, Share2 } from 'lucide-react';

export default function Reports() {
  const features = [
    { icon: FileText, title: "Execution Summaries", desc: "Detailed step-level logs and screenshots." },
    { icon: Bug, title: "Defect Mapping", desc: "Identify recurring issues and root causes." },
    { icon: History, title: "Historical Analytics", desc: "Compare builds and monitor release health." },
    { icon: Share2, title: "Automated Delivery", desc: "Scheduled insights without manual effort." }
  ];

  return (
    <section className="py-32 bg-[#030303] relative border-t border-white/5 overflow-hidden">
      {/* Background Beams */}
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-[44px] font-black text-white mb-6 tracking-tight leading-[1.1]"
          >
            Configurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Reporting</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-zinc-400 font-light leading-relaxed"
          >
            Generate comprehensive reports designed for enterprise-grade quality governance. Maintain complete visibility into testing outcomes, evaluate effectiveness, and optimize your release strategies.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 rounded-md hover:bg-white/[0.05] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#6843B7]/20 flex items-center justify-center text-[#6843B7] mb-6 group-hover:scale-110 transition-transform">
                <feat.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{feat.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
