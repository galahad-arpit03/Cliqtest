"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

import { cards } from './featuresData';

export default function AboutPlatform() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#050505] py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#6843B7]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Section Heading */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
              cliQTest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Core Features</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Large Featured Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-[480px] mx-auto lg:mx-0 w-full"
          >
            {/* Big Image */}
            <div className="w-full aspect-square rounded-md overflow-hidden relative shadow-2xl bg-[#0A0A0A] border border-white/10">
              <Image
                src="/images/brain.png"
                alt="cliQTest Platform Overview"
                fill
                className="object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
            </div>
 
            {/* Floating Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative md:absolute md:bottom-[-20px] md:right-[-20px] mt-6 md:mt-0 w-full md:w-[300px] bg-[#0A0A0A] rounded-md p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-10"
            >
              <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                No-Code Automation Engine
              </h3>
              <p className="text-white/60 text-[13px] mb-5 leading-relaxed">
                Create, execute, and manage test cases without writing a single line of code.
              </p>
              <ul className="space-y-2.5 mb-5">
                {[
                  "Intuitive drag-and-drop interface for faster test creation.",
                  "Supports reusable test components for streamlined processes."
                ].map((li, i) => (
                  <li key={i} className="flex gap-2 text-[13px] text-white/80 font-medium leading-relaxed">
                    <span className="text-[#6843B7] mt-0.5">•</span>
                    {li}
                  </li>
                ))}
              </ul>
 <button className="flex items-center gap-2 text-[#6843B7] text-xs uppercase tracking-widest hover:gap-3 transition-all">
                Learn More <ArrowRight size={13} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Stack of 3 Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4 mt-16 lg:mt-0"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 5, backgroundColor: "rgba(104,67,183,0.05)", borderColor: "rgba(104,67,183,0.3)" }}
                className="bg-[#0A0A0A] rounded-md border border-white/10 shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center p-5 group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="shrink-0 w-full sm:w-[110px] h-[120px] sm:h-[90px] rounded-sm overflow-hidden bg-[#050505] relative">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="text-base font-semibold text-white mb-1.5 leading-snug group-hover:text-[#6843B7] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-white/60 text-[13px] leading-relaxed line-clamp-2 mb-3">
                    {card.description}
                  </p>
 <button className="flex items-center gap-1.5 text-[#6843B7] text-[11px] uppercase tracking-widest hover:gap-2.5 transition-all w-fit">
                    Learn More <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
