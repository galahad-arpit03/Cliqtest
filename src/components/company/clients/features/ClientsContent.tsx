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
    <div className="max-w-7xl pt-12 mx-auto px-8">
      
      {/* Success Stories Section has been moved to Solutions */}
      {/* Testimonials Marquee Section */}
      <section id="testimonials" className="w-full flex flex-col items-center pb-24">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-vertical {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll-vertical {
            animation: scroll-vertical 100s linear infinite;
          }
          .group\\/marquee:hover .animate-scroll-vertical {
            animation-play-state: paused !important;
          }
        `}} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left w-full mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-app-fg mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Client Success Stories</span>
          </h2>
          <p className="text-app-fg/60 text-lg">Hear what our enterprise partners have to say.</p>
        </motion.div>

        <div className="relative w-full max-w-7xl h-[800px] md:h-[1200px] overflow-hidden group/marquee rounded-md">
          {/* Top and Bottom Fade Gradients */}
          <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-app-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-app-bg to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full pb-8 animate-scroll-vertical">
            {[...testimonialsData, ...testimonialsData].map((item, idx) => (
              <div 
                key={`testimonial-${idx}`}
                className={`w-full bg-app-surface border border-app-border rounded-md p-6 relative overflow-hidden group shadow-sm hover:shadow-lg hover:border-[#6843B7]/40 transition-all duration-500 cursor-pointer ${idx % 2 !== 0 ? 'md:translate-y-1/2' : ''}`}
              >
                {/* Subtle background quote mark for depth */}
                <div className="absolute -top-4 -right-4 text-[80px] leading-none font-serif text-[#6843B7] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity select-none pointer-events-none">
                  "
                </div>
                
                <p className="text-app-fg/80 text-[15px] md:text-base leading-relaxed relative z-10 mb-5 font-light">
                  "{item.quote}"
                </p>
                
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-app-border/50">
                {item.logo ? (
                  <div className="h-8 w-20 relative shrink-0">
                    <Image 
                      src={item.logo} 
                      alt={item.company} 
                      fill 
                      className="object-contain object-left mix-blend-multiply [.theme-dark_&]:mix-blend-normal [.theme-dark_&]:brightness-0 [.theme-dark_&]:invert" 
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-md bg-app-bg border border-app-border flex items-center justify-center shrink-0 overflow-hidden relative shadow-sm">
                    <span className="text-[#6843B7] text-sm font-bold uppercase">{item.company.substring(0, 2)}</span>
                  </div>
                )}
                <div>
                  <h4 className="text-app-fg font-bold text-sm">{item.company}</h4>
                  <p className="text-[#6843B7] text-[11px] font-medium uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
