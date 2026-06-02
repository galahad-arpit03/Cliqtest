"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function GlobalContent() {
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
              Delivery & Support
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-white/60 text-base leading-relaxed">
              cliQTest supports enterprises through scalable delivery, centralized support, and distributed quality engineering capabilities designed to serve modern digital ecosystems across industries and geographies.
            </p>
          </div>
        </motion.div>
      </section>
  
    </div>
  );
}
