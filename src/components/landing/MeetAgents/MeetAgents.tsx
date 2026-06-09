"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContentStore } from '@/admin/store/adminStore';
import EditableText from '@/admin/components/EditableText';

export default function MeetAgents({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const content = useContentStore((state) => state.content);
  const reasons = content.home.meetAgents?.reasons || [];
  const isLight = theme === "light";

  return (
    <section className={`w-full px-4 md:px-8 py-16 text-center relative overflow-hidden transition-colors duration-500 ${isLight ? 'bg-white' : 'bg-black'}`}>
      {/* Dynamic Background Beams */}
      <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 transition-opacity duration-500 ${isLight ? 'opacity-10' : 'opacity-30'}`}>
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12"
        />
      </div>

      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative z-10 text-4xl md:text-[44px] font-semibold mb-16 tracking-tight leading-[1.1] transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}
      >
        <EditableText path="home.meetAgents.headingPrefix" fallback="The" as="span" />{" "}
        <EditableText 
          path="home.meetAgents.headingHighlight" 
          fallback="Agentic QA" 
          as="span" 
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]" 
        />{" "}
        Advantage
      </motion.h2>
      
      <div className="relative w-full max-w-7xl mx-auto min-h-[600px] flex flex-col items-center justify-center gap-2">
        {/* Central Brand Area */}
        <div className="relative flex items-center justify-center mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] z-0">
          <div className="relative w-full h-full">
            <div className="w-full h-full relative">
              {isLight ? (
                <Image
                  src="/videos/b.png"
                  alt="Agentic QA Core"
                  fill
                  className="object-contain transition-opacity duration-500 opacity-90"
                  unoptimized
                />
              ) : (
                <video
                  src="/videos/b.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain transition-opacity duration-500 opacity-100"
                />
              )}
            </div>
          </div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ delay: 0.5 }}
            className={`absolute -bottom-8 lg:-bottom-10 text-[10px] font medium tracking-[0.3em] uppercase transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}
          >
            <EditableText path="home.meetAgents.coreLabel" fallback="Intelligent Core" as="span" />
          </motion.span>
        </div>
        
        {/* Floating Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:block w-full gap-2 z-10 -mt-8">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`lg:absolute ${reason.pos} flex flex-col items-center group`}
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.5,
                  ease: "easeInOut" 
                }}
                className="bg-gradient-to-r from-[#6843B7] to-[#8f81eb] rounded-md px-8 py-3 mb-4 flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(104,67,183,0.4)] transition-all duration-300 whitespace-nowrap cursor-default"
              >
                {/* <div className="w-5 h-5 rounded-sm bg-[#6843B7]/10 flex items-center justify-center text-[#6843B7]">
                  <span className="text-[10px]">✦</span>
                </div> */}
                <span className="text-white font medium text-[14px] md:text-[16px] tracking-tight"><EditableText path={`home.meetAgents.reasons.${i}.name`} fallback={reason.name} as="span" /></span>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className={`text-xs md:text-sm font medium max-w-[220px] leading-snug drop-shadow-sm text-center transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-[#b6b3bb]'}`}
              >
                <EditableText path={`home.meetAgents.reasons.${i}.desc`} fallback={reason.desc} as="span" />
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
