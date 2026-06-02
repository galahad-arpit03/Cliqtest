"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function MissionVision() {
  return (
    <section className="bg-[#050505] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <motion.div 
            id="mission"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-[#6843B7]/5 to-transparent pointer-events-none" />
            
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Mission</span>
            </h2>
            
            <p className="text-white/60 text-[14px] leading-relaxed relative z-10">
              Our mission is to empower organizations with intelligent, scalable, and AI-driven quality engineering solutions that accelerate digital transformation, improve software reliability, and simplify enterprise testing operations. We aim to eliminate fragmented testing ecosystems by delivering a unified platform that combines automation, test management, analytics, device testing, and AI-powered innovation into a seamless quality engineering experience.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            id="vision"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group shadow-2xl"
          >
            {/* <div className="absolute top-0 left-0 w-[50%] h-[100%] bg-gradient-to-br from-[#00F2B0]/5 to-transparent pointer-events-none" /> */}
            
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#00D19A]">Vision</span>
            </h2>
            
            <p className="text-white/60 text-[14px] leading-relaxed relative z-10">
              Our vision is to become a globally trusted AI-native quality engineering platform that redefines how modern enterprises build, test, validate, and deliver digital applications. We envision a future where intelligent automation, autonomous testing, and AI-driven insights enable organizations to achieve faster innovation, higher quality, and continuous delivery at enterprise scale.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
