"use client";

import React, { useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section className="relative w-full bg-black min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Top Gradient Overlay for Navbar Legibility */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />

      {/* Background Video Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 h-full w-full md:w-[50%] lg:w-[70%] z-0 pointer-events-none overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover md:object-contain object-center md:object-right opacity-40 md:opacity-90 scale-150 md:scale-120 transition-all duration-700"
        >
          <source src="/landing page/brain.mp4" type="video/mp4" />
        </video>
        {/* Gradients to blend video better */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black" />
      </motion.div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center">
        
        {/* Left Side Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 pt-20 md:pt-0 text-center md:text-left"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight text-white leading-[1.1] mb-8 max-w-2xl drop-shadow-2xl"
          >
            Stop running tests. <br className="hidden sm:block" />
            Start driving quality.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-[22px] text-[#00F2B0] font-medium mb-12 leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-md"
          >
            Built for teams who want to ship faster and <br className="hidden sm:block" />
            never look back.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#00AEEF] text-white font-bold text-[12px] tracking-widest uppercase hover:bg-[#00AEEF]/10 transition-all backdrop-blur-sm"
            >
              Platform Overview
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,174,239,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#00AEEF] text-white font-bold text-[12px] tracking-widest uppercase hover:bg-[#0092E6] transition-all shadow-[0_0_20px_rgba(0,174,239,0.3)]"
            >
              Demo
            </motion.button>
          </motion.div>
        </motion.div>

      {/* Right side spacer to push content left */}
        <div className="flex-1 hidden md:block" />
      </div>
    </section>
  );
}
