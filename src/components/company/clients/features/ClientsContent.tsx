"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { categorizedStories } from './featuresData';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = categorizedStories.flatMap(cat => cat.stories);

export default function ClientsContent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
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
      <section id="testimonials" className="w-full flex flex-col pb-24">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-app-fg mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Client Success Stories</span>
            </h2>
            <p className="text-app-fg/60 text-lg">Hear what our enterprise partners have to say.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 shrink-0"
          >
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-app-border/50 bg-app-surface flex items-center justify-center text-app-fg hover:bg-app-fg/5 hover:border-app-fg/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#6843B7]/50"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-app-border/50 bg-app-surface flex items-center justify-center text-app-fg hover:bg-app-fg/5 hover:border-app-fg/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#6843B7]/50"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative w-full">
          {/* Subtle fade edges for the carousel */}
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-app-bg to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-app-bg to-transparent z-10 pointer-events-none hidden md:block" />

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory hide-scrollbar scroll-smooth pb-8 pt-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Hide scrollbar styles for WebKit */}
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />

            {testimonialsData.map((item, idx) => (
              <div 
                key={`testimonial-${idx}`}
                className="w-[85vw] md:w-[400px] shrink-0 snap-start bg-app-surface border border-app-border rounded-md p-8 relative overflow-hidden group shadow-sm hover:shadow-lg hover:border-[#6843B7]/40 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[350px]"
              >
                {/* Subtle background quote mark for depth */}
                <div className="absolute -top-4 -right-4 text-[100px] leading-none font-serif text-[#6843B7] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity select-none pointer-events-none">
                  "
                </div>
                
                <p className="text-app-fg/80 text-[15px] leading-relaxed relative z-10 mb-8 font-light flex-1">
                  "{item.quote}"
                </p>
                
                <div className="flex items-center gap-4 relative z-10 pt-5 border-t border-app-border/50">
                  {item.logo ? (
                    <div className="h-10 w-24 relative shrink-0">
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
                    <p className="text-[#6843B7] text-[11px] font-medium uppercase tracking-wider mt-0.5">{item.role}</p>
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
