"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from './featuresData';

export default function GlobalContent() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      
      
      {featuresData.map((item, index) => (
        <section key={index} id={item.id || undefined} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12"
          >
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-app-fg mb-6 lg:sticky lg:top-32">
                {item.title}
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-4">
              {item.descriptions.map((desc, i) => (
                <p key={i} className="text-app-fg/60 text-base leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>
          </motion.div>
        </section>
      ))}

  
    </div>
  );
}
