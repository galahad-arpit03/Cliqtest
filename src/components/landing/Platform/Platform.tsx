"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { value: '10x', label: 'Faster Testing' },
  { value: '0', label: 'Maintenance' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Platform({ isLight }: { isLight?: boolean }) {
  return (
    <section className={`w-full px-4 md:px-8 py-24 relative overflow-hidden transition-colors duration-500 ${isLight ? 'bg-app-fg' : 'bg-app-bg'} flex items-center justify-center`}>
      {/* Dynamic Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 z-0">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform rotate-12"
        />
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-1/2 left-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform rotate-45"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute bottom-1/2 right-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-45"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2 variants={itemVariants} className={`text-4xl md:text-5xl font-semibold tracking-tight leading-[1.2] mb-8 transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">cliQTest</span> <br />
            Agentic Platform
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-6">
            <p className={`text-lg md:text-xl leading-relaxed font-light transition-colors duration-500 ${isLight ? 'text-app-fg-invert/70' : 'text-app-muted'}`}>
              cliQTest represents the next evolution in <span className={`font-semibold transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>autonomous quality engineering</span>, driven by specialized AI agents designed to seamlessly integrate with your enterprise workflows. 
            </p>
            <p className={`text-lg md:text-xl leading-relaxed font-light transition-colors duration-500 ${isLight ? 'text-app-fg-invert/70' : 'text-app-muted'}`}>
              Moving beyond traditional automation paradigms, our proprietary agents intelligently validate complex scenarios, <span className="text-[#6843B7]">reducing testing overhead</span> and empowering teams to release highly resilient software faster.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6">
            {stats.map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col">
                  <span className={`font-bold text-3xl transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>{stat.value}</span>
                  <span className={`text-sm uppercase tracking-wider mt-1 transition-colors duration-500 ${isLight ? 'text-app-fg-invert/70' : 'text-app-muted'}`}>{stat.label}</span>
                </div>
                {i < stats.length - 1 && <div className={`w-px h-12 transition-colors duration-500 ${isLight ? 'bg-app-fg-invert/20' : 'bg-zinc-500/20'}`} />}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full aspect-square sm:aspect-[4/3] max-h-[600px] flex items-center justify-center mt-4 md:mt-0 scale-110 sm:scale-100" 
        >
          <div className="w-full h-full relative group">
            <Image
              src={isLight ? "/images/bn1.png" : "/images/bn1.png"}
              alt="cliQTest Platform Monitor"
              fill
              className={`object-contain transition-transform duration-700 ease-out group-hover:scale-105 ${isLight ? 'mix-blend-multiply' : 'mix-blend-screen'}`}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
