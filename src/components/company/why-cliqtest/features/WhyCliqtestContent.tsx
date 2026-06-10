"use client";
import { useEffect } from 'react';

import React from 'react';
import { motion } from 'framer-motion';
import { reasons } from './featuresData';


export default function WhyCliqtestContent() {
// Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
        // Delay to ensure elements are rendered
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="max-w-7xl pt-8 mx-auto px-8">
      
      {/* Stacked Numbered Section */}
      <div className="space-y-6">
        {reasons.map((reason, index) => {
          const sectionId = reason.title.toLowerCase().replace(/\s+/g, '-');
          return (
            <motion.div
              key={index}
              id={sectionId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sticky bg-app-surface border border-app-border rounded-md p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 scroll-mt-32"
            style={{ 
              top: `calc(8rem + ${index * 2}rem)`, 
              zIndex: 10 + index 
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start relative z-10">
              {/* Huge Number */}
              <div className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff] opacity-40 transition-colors duration-500 leading-none">
                0{index + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1 mt-2">
                <h2 className="text-2xl font-bold text-app-fg mb-4 tracking-tight transition-colors duration-300">
                  {reason.title}
                </h2>
                <p className="text-app-fg/60 text-base leading-relaxed max-w-4xl">
                  {reason.desc}
                </p>
              </div>
            </div>
            
          </motion.div>
        )})}
      </div>

    </div>
  );
}
