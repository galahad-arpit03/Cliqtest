"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Zap, 
  BarChart3, 
  Globe, 
  Users, 
  PiggyBank 
} from 'lucide-react';

import { benefits } from './featuresData';

export default function KeyBenefits() {
  return (
    <section id="core-values" className="bg-app-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-20 relative z-10">
        
        {/* Left Side: Sticky Heading */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-app-fg text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
              Core <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Values</span>
            </h2>
            <p className="text-app-fg/60 text-lg leading-relaxed mb-10 max-w-sm">
              The foundational principles that guide our team, shape our product, and drive our commitment to excellence.
            </p>
            <div className="w-16 h-1 bg-[#6843B7]/30 rounded-sm" />
          </motion.div>
        </div>

        {/* Right Side: Benefits List */}
        <div className="lg:w-2/3 flex flex-col">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`py-6 border-b border-app-border last:border-0 group cursor-pointer`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-app-fg mb-3 tracking-tight group-hover:text-[#6843B7] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-app-fg/60 text-base leading-relaxed max-w-2xl">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom CTA Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-10 rounded-md bg-app-surface border border-app-border flex flex-col md:flex-row items-center justify-between gap-8 group shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-bl from-[#6843B7]/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-app-fg mb-2">Ready to accelerate?</h3>
              <p className="text-app-fg/60">Join the elite teams building the future with cliQTest.</p>
            </div>
            <Link href="/book-a-demo">
              <button className="relative z-10 px-8 py-4 bg-[#6843B7] text-white text-[14px] rounded-sm hover:bg-[#6843B7]/90 transition-all  whitespace-nowrap">
                Book a Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
