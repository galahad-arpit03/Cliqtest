"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BlogsHero({ isLight }: { isLight?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={containerRef}
      className={`relative min-h-[85vh] md:min-h-screen flex flex-col justify-center border-b overflow-hidden transition-colors duration-500 ${isLight ? 'bg-app-surface border-app-bg/5' : 'bg-app-bg border-app-border'}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/images/blogs-hero.png"
          alt="Blogs Hero Background"
          fill
          priority
          unoptimized
          className="object-contain object-right md:object-right-top opacity-60"
        />
        <div className={`absolute inset-0 bg-gradient-to-b pointer-events-none transition-colors duration-500 ${isLight ? 'from-zinc-50/80 via-zinc-50/40 to-zinc-50' : 'from-app-bg/80 via-app-bg/40 to-app-bg'}`} />
        <div className={`absolute inset-0 bg-gradient-to-r pointer-events-none transition-colors duration-500 ${isLight ? 'from-zinc-50 via-zinc-50/50 to-transparent' : 'from-app-bg via-app-bg/50 to-transparent'}`} />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
            Latest Insights & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Knowledge Base</span>
          </h1>

          <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>
            Explore the latest perspectives on Agentic QA, AI-powered testing, quality engineering, automation and continuous delivery.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button 
              onClick={() => {
                const element = document.getElementById('featured-blog');
                if(element) element.scrollIntoView({ behavior: 'smooth' });
                else window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
              }} 
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:bg-[#6843B7]/90 transition-all"
            >
              Start Reading
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}