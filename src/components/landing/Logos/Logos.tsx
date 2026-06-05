"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const integrations = [
  { name: "Jira", src: "/logos/jira.png" },
  { name: "Docker", src: "/logos/docker.png" },
  { name: "AWS", src: "/logos/aws.png" },
  { name: "Jenkins", src: "/logos/jenkins.png" },
  { name: "Git", src: "/logos/git.png" },
  { name: "VS Code", src: "/logos/vscode.png" }
];

export default function Logos() {
  // Duplicate 4 times to ensure it fills even ultrawide screens
  const duplicatedIntegrations = [...integrations, ...integrations, ...integrations, ...integrations];

  return (
    <section className="w-full py-12 md:py-16 bg-black border-y border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 mb-10 text-center"
      >
        <h2 className="text-sm md:text-base font medium text-white tracking-[0.2em] uppercase">
          Seamless Collaboration via Integration
        </h2>
      </motion.div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fade gradients for edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {duplicatedIntegrations.map((item, i) => (
            <div 
              key={i}
              className="flex items-center justify-center mx-6 md:mx-8 gap-2 md:gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font medium text-base md:text-lg tracking-tight">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
