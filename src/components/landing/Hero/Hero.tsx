"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
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

      {/* Background Image Layer */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.9, scale: 1.25 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-0 h-full w-full lg:w-[70%] z-0 pointer-events-none"
      >
        <div className="relative w-full h-full origin-center lg:origin-right">
          <Image
            src="/assets/landing hero.png"
            alt="Background Visualization"
            fill
            className="object-cover lg:object-contain object-center lg:object-right"
            priority
          />
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center">
        
        {/* Left Side Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 pt-10 lg:pt-0 text-center lg:text-left"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-[68px] font-bold tracking-tight text-white leading-[1.1] md:leading-[1.05] mb-8 max-w-2xl drop-shadow-2xl"
          >
            Stop running tests. <br className="hidden md:block" />
            Start driving quality.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-[22px] text-[#00F2B0] font-medium mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md"
          >
            Built for teams who want to ship faster and <br className="hidden md:block" />
            never look back.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start"
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
        <div className="flex-1 hidden lg:block" />
      </div>
    </section>
  );
}
