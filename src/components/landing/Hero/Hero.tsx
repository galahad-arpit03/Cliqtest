"use client";

import React, { useRef, useEffect } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], ['0%', '30%']);
    const yText = useTransform(scrollY, [0, 1000], ['0%', '10%']);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative w-full bg-black min-h-[800px] flex items-center pt-0 overflow-hidden">
      {/* Top Gradient Overlay for Navbar Legibility */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        style={{ y: yBg }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          aria-label="cliQTest AI-powered automated testing platform visualization"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/landing-brain.mp4" type="video/mp4" />
        </video>
        {/* Dark overlays matching other pages */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/80 to-[#050505]/30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      </motion.div>

      {/* Main Container */}
      <motion.div style={{ y: yText }} className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 pt-4 md:pt-0 text-center md:text-left"
        >
        <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-white leading-[1.1] mb-4 max-w-2xl drop-shadow-2xl"
        >
            The AI-Powered <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">Automated Testing </span> Platform
        </motion.h1>

        <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white/60 font-medium mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-md"
        >
            Accelerate release cycles with flawless quality. Automate web, mobile, and API testing—all from one intelligent AI-driven platform.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-row w-full sm:w-auto gap-4 sm:gap-8 items-center justify-center md:justify-start mt-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
 className="flex-1 sm:flex-none w-full sm:w-auto px-4 sm:px-8 py-3 rounded-sm bg-[#6843B7] text-white text-[12px] sm:text-[13px] hover:bg-[#6843B7] transition-all whitespace-nowrap"
          >
            Book Demo
          </motion.button>

          <motion.a 
            href="/contact"
            className="group flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 text-white font-medium text-[14px] sm:text-[16px] cursor-pointer whitespace-nowrap"
          >
            <span className="border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Contact Us</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </motion.div>
        </motion.div>

      {/* Right side spacer to push content left */}
        <div className="flex-1 hidden md:block" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#6843B7]" />
        <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Scroll</span>
      </motion.div>

    </section>
  );
}
