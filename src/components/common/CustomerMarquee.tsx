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

export default function CustomerMarquee({ isLight }: { isLight?: boolean }) {
  // Duplicate enough times to ensure it fills even ultrawide screens
  const duplicatedCustomers = [...customers, ...customers, ...customers, ...customers];

  return (
    <section className={`w-full py-6 md:py-8 border-y overflow-hidden transition-colors duration-500 ${isLight ? 'bg-[#FAFAFA] border-app-bg/5' : 'bg-[#000000] border-app-border'}`} aria-label="Trusted customer logos">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 mb-6 text-center"
      >
        <div className="inline-flex flex-col items-center">
          <h2 className={`text-sm md:text-base font-medium tracking-[0.2em] uppercase transition-colors duration-500 text-[#6843B7] pb-2`}>
            Trusted By Industry Leaders
          </h2>
          <div 
            className="w-full h-[1px] mt-3" 
            style={{ background: 'linear-gradient(90deg, transparent 0%, #6843B7 40%, #6843B7 60%, transparent 100%)' }}
          />
        </div>
      </motion.div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fade gradients for edges */}
        {/* <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#060411] to-transparent z-10 pointer-events-none" /> */}
        {/* <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#060411] to-transparent z-10 pointer-events-none" /> */}

        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 120,
          }}
        >
          <ul className="flex whitespace-nowrap items-center w-max list-none p-0 m-0">
            {duplicatedCustomers.map((item, i) => (
              <li 
                key={i}
                className="flex items-center justify-center mx-4 md:mx-8 relative h-12 w-36"
              >
                <Image 
                  src={item.logo} 
                  alt={item.name} 
                  fill
                  className={`object-contain transition-all duration-300 ${isLight ? 'invert' : ''}`}
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
