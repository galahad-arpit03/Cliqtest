"use client";
import { useEffect, useRef } from 'react';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { reasons } from './featuresData';

const StackedCard = ({ reason, index, total }: { reason: any; index: number; total: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // The card sticks at `calc(8rem + index * 2rem)`.
  // 8rem = 128px, 2rem = 32px.
  const stickyTopPx = 128 + index * 32;

  // We track the scroll from when the card hits its sticky position, 
  // until we scroll another 400px down (approx height of the next card).
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: [`start ${stickyTopPx}px`, `start ${stickyTopPx - 400}px`],
  });

  // Fade out to 0 and scale down slightly as it goes up, unless it's the last card
  const opacity = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0.95]);

  const sectionId = reason.title.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.div
      ref={cardRef}
      id={sectionId}
      className="sticky bg-app-surface border border-app-border rounded-md p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 scroll-mt-20"
      style={{ 
        top: `calc(8rem + ${index * 2}rem)`, 
        zIndex: 10 + index,
        opacity,
        scale
      }}
    >
      <motion.div 
        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
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
      </motion.div>
    </motion.div>
  );
};

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
        {reasons.map((reason, index) => (
          <StackedCard 
            key={index} 
            reason={reason} 
            index={index} 
            total={reasons.length} 
          />
        ))}
      </div>
    </div>
  );
}
