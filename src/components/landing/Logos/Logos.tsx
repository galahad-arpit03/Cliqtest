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

export default function Logos({ isLight }: { isLight?: boolean }) {
  // Duplicate 4 times to ensure it fills even ultrawide screens
  const duplicatedIntegrations = [...integrations, ...integrations, ...integrations, ...integrations];

  return (
    <section className={`w-full py-6 md:py-8 border-y overflow-hidden transition-colors duration-500 ${isLight ? 'bg-app-fg border-app-bg/5' : 'bg-app-bg border-app-border'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 mb-6 text-center"
      >
        <div className="inline-flex flex-col items-center">
          <h2 className={`text-sm md:text-base font-medium tracking-[0.2em] uppercase transition-colors duration-500 text-[#6843B7] pb-2`}>
            Seamless Collaboration via Integration
          </h2>
          <div 
            className="w-full h-[1px] mt-3" 
            style={{ background: 'linear-gradient(90deg, transparent 0%, #6843B7 40%, #6843B7 60%, transparent 100%)' }}
          />
        </div>
      </motion.div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fade gradients for edges */}
        <div className={`absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r z-10 pointer-events-none transition-colors duration-500 ${isLight ? 'from-white to-transparent' : 'from-app-bg to-transparent'}`} />
        <div className={`absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l z-10 pointer-events-none transition-colors duration-500 ${isLight ? 'from-white to-transparent' : 'from-app-bg to-transparent'}`} />

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
              className="flex items-center space-x-2 justify-center mx-3 md:mx-5 gap-2 md:gap-3"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className={`object-contain transition-all duration-300 ${isLight ? 'invert' : ''}`}
                />
              </div>
              <span className={`font medium text-base md:text-lg tracking-tight transition-colors duration-300 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
