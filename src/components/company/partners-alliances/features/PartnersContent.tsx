"use client";
import { useEffect } from 'react';

import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from './featuresData';

export default function PartnersContent() {
  // Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
        // Delay to ensure elements are rendered
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

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
              <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32">
                {item.title}
              </h2>
            </div>
            <div className="lg:w-2/3 space-y-4">
              {item.descriptions.map((desc, i) => (
                <p key={i} className="text-white/60 text-base leading-relaxed">
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
