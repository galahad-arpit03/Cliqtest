"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';

const customers = [
  { name: "Axis Bank" },
  { name: "CRIS" },
  { name: "NSDL Payment Bank" },
  { name: "UCO Bank" },
  { name: "Generali Central Insurance" }
];

export default function CustomerMarquee() {
  // Duplicate enough times to ensure it fills even ultrawide screens
  const duplicatedCustomers = [...customers, ...customers, ...customers, ...customers, ...customers];

  return (
    <section className="w-full py-12 md:py-16 bg-[#000000] border-y border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 mb-10 text-center"
      >
        <h2 className="text-sm md:text-base font-medium text-white/50 tracking-[0.2em] uppercase">
          Trusted By Industry Leaders
        </h2>
      </motion.div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fade gradients for edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#060411] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#060411] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-20%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {duplicatedCustomers.map((item, i) => (
            <div 
              key={i}
              className="flex items-center justify-center mx-8 md:mx-12 gap-3 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <Landmark className="text-white/40" size={24} />
              <span className="text-white font-medium text-lg md:text-xl tracking-tight">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
