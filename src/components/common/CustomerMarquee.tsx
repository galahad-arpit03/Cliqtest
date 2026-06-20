"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const customers = [
  { name: "Axis Bank", logo: "/clients/axis_bank.png" },
  { name: "CRIS", logo: "/clients/cris_logo.png" },
  { name: "NSDL Payment Bank", logo: "/clients/nsdl.png" },
  { name: "ABCD", logo: "/clients/abcd_bank.png" },
  { name: "UCO bank", logo: "/clients/uco_bank.svg" },
  { name: "IDBI bank", logo: "/clients/idbi_bank.png" },
  { name: "Generali Centra", logo: "/clients/generali_centeral.png" },
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
        </div>
      </motion.div>

      <div className="relative w-full flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          <ul className="flex whitespace-nowrap items-center w-max list-none p-0 m-0">
            {duplicatedCustomers.map((item, i) => (
              <li 
                key={i}
                className="flex items-center space-x-2 justify-center mx-4 md:mx-8 gap-3"
              >
                <div className="relative w-6 h-6 md:w-7 md:h-7 bg-transparent shrink-0">
                  <Image 
                    src={item.logo} 
                    alt={item.name} 
                    fill
                    className="object-contain bg-transparent"
                    sizes="(max-width: 768px) 30px, 30px"
                  />
                </div>
                <div className="flex flex-col text-left justify-center">
                  <h4 className={`font-bold text-sm transition-colors duration-300 leading-tight ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                    {item.name}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
