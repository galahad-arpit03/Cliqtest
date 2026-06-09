"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContentStore } from '@/admin/store/adminStore';
import EditableText from '@/admin/components/EditableText';

export default function Platform({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const content = useContentStore((state) => state.content);
  const isLight = theme === "light";

  return (
    <section className={`w-full px-4 md:px-8 py-24 relative overflow-hidden flex items-center justify-center transition-colors duration-500 ${isLight ? 'bg-[#FAFAFA]' : 'bg-[#030303]'}`}>
      {/* Dynamic Background Beams */}
      <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 transition-opacity duration-500 ${isLight ? 'opacity-20' : 'opacity-40'}`}>
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12"
        />
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-1/2 left-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#FF6F61] to-transparent transform rotate-45"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute bottom-1/2 right-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6AFFC4] to-transparent transform -rotate-45"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00F2B0] animate-pulse" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-widest">Platform Overview</span>
          </div>
           */}
          <h2 className={`text-4xl md:text-5xl font-semibold mb-8 tracking-tight leading-[1.2] transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}>
            <EditableText path="home.platform.headingPrefix" fallback="The" as="span" />{" "}
            <EditableText 
              path="home.platform.headingHighlight" 
              fallback="cliQTest" 
              as="span" 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]" 
            />{" "}
            <br />
            <EditableText path="home.platform.headingSuffix" fallback="Agentic Platform" as="span" />
          </h2>
          
          <div className="space-y-6">
            <p className={`text-lg md:text-xl leading-relaxed font-light transition-colors duration-500 ${isLight ? 'text-zinc-700' : 'text-zinc-400'}`}>
              <EditableText path="home.platform.body1" fallback="cliQTest is the first AI-native testing platform powered by specialized agents that think, adapt, and act." multiline />
            </p>
            <p className={`text-lg md:text-xl leading-relaxed font-light transition-colors duration-500 ${isLight ? 'text-zinc-700' : 'text-zinc-400'}`}>
              <EditableText path="home.platform.body2" fallback="These aren't scripts or plug-ins, they are intelligent systems built to eliminate the grind of test creation and maintenance, so engineering teams can finally move at the speed of innovation." multiline />
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-col">
              <span className={`font-bold text-3xl transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}><EditableText path="home.platform.stat1Value" fallback="10x" as="span" /></span>
              <span className={`text-sm uppercase tracking-wider mt-1 transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-zinc-500'}`}><EditableText path="home.platform.stat1Label" fallback="Faster Testing" as="span" /></span>
            </div>
            <div className={`w-px h-12 transition-colors duration-500 ${isLight ? 'bg-black/10' : 'bg-white/10'}`} />
            <div className="flex flex-col">
              <span className={`font-bold text-3xl transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}><EditableText path="home.platform.stat2Value" fallback="0" as="span" /></span>
              <span className={`text-sm uppercase tracking-wider mt-1 transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-zinc-500'}`}><EditableText path="home.platform.stat2Label" fallback="Maintenance" as="span" /></span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[4/3] max-h-[600px] flex items-center justify-center" 
        >
          {/* Decorative Glow */}
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#6843B7]/30 to-[#00F2B0]/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" /> */}
          
          <div className="w-full h-full relative group">
            <Image
              src={isLight ? "/images/bn12.png" : "/images/bn1.png"}
              alt="cliQTest Platform Monitor"
              fill
              className={`object-contain group-hover:scale-105 transition-transform duration-700 ease-out ${isLight ? "" : "mix-blend-screen"}`}
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
