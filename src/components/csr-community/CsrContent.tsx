"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CsrContent() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32">
              Community Initiatives
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-white/60 text-base leading-relaxed">
              cliQTest and its parent ecosystem are committed to contributing toward community development, technology awareness, digital literacy, and social impact initiatives that support education, empowerment, and innovation-driven growth.
            </p>
          </div>
        </motion.div>
      </section>
  
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32">
              Innovation & Learning
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-white/60 text-base leading-relaxed">
              We actively encourage knowledge sharing, continuous learning, engineering collaboration, and innovation-focused engagement that help build stronger technology communities and future-ready talent ecosystems.
            </p>
          </div>
        </motion.div>
      </section>
  
    </div>
  );
}
