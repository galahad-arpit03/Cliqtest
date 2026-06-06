"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const customers = [
  { name: "Bank of Maharashtra", logo: "/clients/bank-of-maharashtra.svg" },
  { name: "NSDL Payment Bank", logo: "/clients/nsdl-bank.png" },
  { name: "UCO Bank", logo: "/clients/uco-bank.svg" },
  { name: "Generali", logo: "/clients/Generali_Central_Life_Insurance_Company_Limited.svg" },
  // { name: "IDBI Bank", logo: "/clients/idbi-bank.svg" },
  { name: "L&T", logo: "/clients/lt.svg" },
  { name: "Protean", logo: "/clients/protean.svg" },
  { name: "RBL Bank", logo: "/clients/rbl-bank.svg" },
  // { name: "FDC", logo: "/clients/fdc.jpeg" },
];

export default function CustomerMarquee() {
  // Duplicate enough times to ensure it fills even ultrawide screens
  const duplicatedCustomers = [...customers, ...customers, ...customers, ...customers];

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
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 120,
          }}
        >
          {duplicatedCustomers.map((item, i) => (
            <div 
              key={i}
              className="flex items-center justify-center mx-4 md:mx-8 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer relative h-12 w-36"
            >
              <Image 
                src={item.logo} 
                alt={item.name} 
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
