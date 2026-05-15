"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Logos() {
  const integrations = ["Jira", "Docker", "AWS", "Jenkins", "Git", "VS Code"];
  
  return (
    <section className="w-full px-6 md:px-12 py-24 text-center bg-black border-y border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-xl md:text-2xl font-bold text-zinc-500 mb-16 tracking-[0.2em] uppercase">
          Trusted by Global Engineering Teams
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all">
          {integrations.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="text-white font-black text-xl md:text-2xl tracking-tighter transition-all cursor-default"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
