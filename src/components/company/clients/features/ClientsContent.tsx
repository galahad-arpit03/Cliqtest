"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { categorizedStories } from './featuresData';

import Image from 'next/image';
const testimonialsData = categorizedStories.flatMap(cat => cat.stories);

export default function ClientsContent() {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

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
    <div className="max-w-7xl mx-auto px-8">
      
      {/* Success Stories Section has been moved to Solutions */}
      {/* Testimonials Marquee Section */}
      <section id="testimonials">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0%); }
          }
        `}} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold text-app-fg mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Testimonials</span></h2>
          
          <div className="relative w-full flex flex-col gap-6 overflow-hidden group/marquee py-4">
            {/* Fade gradients for edges */}
            <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-app-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-app-bg to-transparent z-10 pointer-events-none" />

            {/* Row 1 */}
            <div 
              className="flex items-center w-max gap-6 px-4 group-hover/marquee:[animation-play-state:paused]"
              style={{ animation: 'scroll-left 100s linear infinite' }}
            >
              {[...testimonialsData.slice(0, 7), ...testimonialsData.slice(0, 7), ...testimonialsData.slice(0, 7)].map((item, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="w-[300px] md:w-[400px] shrink-0 bg-app-surface border border-app-border rounded-md p-6 relative overflow-hidden group/card shadow-2xl hover:border-[#6843B7]/30 hover:bg-[#0c0c16] transition-all duration-300 flex flex-col justify-between hover:scale-105 hover:z-20 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6843B7] to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  <p className="text-app-fg/60 text-sm md:text-base leading-relaxed relative z-10 mb-6 italic whitespace-normal line-clamp-3 group-hover/card:line-clamp-none transition-all duration-300">
                    "{item.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10 mt-auto whitespace-normal">
                    <div className="w-12 h-12 rounded-sm bg-app-fg/5 border border-app-border flex items-center justify-center shrink-0 overflow-hidden relative">
                      {item.logo ? (
                        <Image src={item.logo} alt={item.company} fill className="object-contain p-2" />
                      ) : (
                        <span className="text-app-fg/40 text-xs font-bold uppercase">{item.company.substring(0, 2)}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-app-fg font-bold text-sm">{item.company}</h4>
                      <p className="text-[#6843B7] text-xs font-medium uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div 
              className="flex items-center w-max gap-6 px-4 group-hover/marquee:[animation-play-state:paused]"
              style={{ animation: 'scroll-right 120s linear infinite' }}
            >
              {[...testimonialsData.slice(7), ...testimonialsData.slice(7), ...testimonialsData.slice(7)].map((item, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="w-[300px] md:w-[400px] shrink-0 bg-app-surface border border-app-border rounded-md p-6 relative overflow-hidden group/card shadow-2xl hover:border-[#6843B7]/30 hover:bg-[#0c0c16] transition-all duration-300 flex flex-col justify-between hover:scale-105 hover:z-20 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6843B7] to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  <p className="text-app-fg/60 text-sm md:text-base leading-relaxed relative z-10 mb-6 italic whitespace-normal line-clamp-3 group-hover/card:line-clamp-none transition-all duration-300">
                    "{item.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10 mt-auto whitespace-normal">
                    <div className="w-12 h-12 rounded-sm bg-app-fg/5 border border-app-border flex items-center justify-center shrink-0 overflow-hidden relative">
                      {item.logo ? (
                        <Image src={item.logo} alt={item.company} fill className="object-contain p-2" />
                      ) : (
                        <span className="text-app-fg/40 text-xs font-bold uppercase">{item.company.substring(0, 2)}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-app-fg font-bold text-sm">{item.company}</h4>
                      <p className="text-[#6843B7] text-xs font-medium uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
