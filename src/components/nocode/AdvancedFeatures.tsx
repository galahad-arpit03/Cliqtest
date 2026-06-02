"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Wand2, ArrowRight } from 'lucide-react';

export default function AdvancedFeatures() {
  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Reusable Components Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group rounded-md bg-[#0a0a0a] border border-white/5 p-12 hover:bg-[#111] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <Layers size={160} className="text-white" />
            </div>
            

            
            <h3 className="text-3xl font medium text-white mb-5 relative z-10 tracking-tight">Reusable Components</h3>
            <p className="text-white/60 text-[16px] leading-relaxed mb-8 relative z-10">
              Enhance automation efficiency by standardizing common actions, workflows, test data, and validation steps across projects. Leverage centralized repositories to create modular assets that reduce duplication.
            </p>
            <ul className="space-y-4 mb-4 relative z-10">
              {['Centralized Data Management', 'Shared Object Repositories', 'Auto-propagating updates'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70 text-[15px] font-medium">
                  <ArrowRight size={16} className="text-[#6843B7]" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Auto Healing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group rounded-md bg-gradient-to-br from-[#6843B7]/10 to-[#00F2B0]/5 border border-[#6843B7]/20 p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <Wand2 size={160} className="text-[#00F2B0]" />
            </div>
            

            
            <h3 className="text-3xl font medium text-white mb-5 relative z-10 tracking-tight">AI Auto-Healing</h3>
            <p className="text-white/80 text-[16px] leading-relaxed mb-8 relative z-10">
              Ensure stable and resilient execution even when applications undergo UI changes. Our AI intelligently detects broken locators, identifies alternative object attributes, and automatically repairs scripts during runtime.
            </p>
            <ul className="space-y-4 mb-4 relative z-10">
              {['Zero manual intervention needed', 'Minimizes false failure alerts', 'Continuously adapts to UI changes'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 text-[15px] font-medium">
                  <ArrowRight size={16} className="text-[#00F2B0]" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
