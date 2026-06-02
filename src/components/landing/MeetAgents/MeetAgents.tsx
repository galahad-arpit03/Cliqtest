"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const reasons = [
  { name: "Multi-Platform Testing", desc: "Mobile | API | Web | Desktop", pos: "lg:top-[0%] lg:left-[10%]" },
  { name: "Flexible Deployment", desc: "On-Prem | Local Hosted | Hybrid", pos: "lg:top-[0%] lg:right-[10%]" },
  { name: "Real Device Access", desc: "Real Device over SaaS | Device Rack (Hardware)", pos: "lg:top-[40%] lg:left-[2%]" },
  { name: "Secure & Automated", desc: "Secured Access | OTP/Code Automation", pos: "lg:top-[40%] lg:right-[2%]" },
  { name: "AI-Driven Insights", desc: "Intelligent Reporting | Anomaly Detection", pos: "lg:bottom-[5%] lg:left-[10%]" },
  { name: "Scale with Ease", desc: "Parallel Execution | Cloud Elasticity", pos: "lg:bottom-[5%] lg:right-[10%]" }
];

export default function MeetAgents() {
  return (
    <section className="w-full px-8 py-16 text-center relative overflow-hidden bg-black">
      {/* Dynamic Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30 z-0">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12"
        />
      </div>

      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-4xl md:text-[44px] font-semibold text-white mb-16 tracking-tight leading-[1.1]"
      >
        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]"> cliQTest?</span>
      </motion.h2>
      
      <div className="relative w-full max-w-7xl mx-auto min-h-[600px] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
        {/* Central Brand Area */}
        <div className="relative lg:absolute w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center z-0 order-first lg:order-none">
          <div className="relative w-full h-full">
            <div className="w-full h-full relative">
              <Image
                src="/assets/brain.png"
                alt="cliQTest AI Brain"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 500px"
                priority
              />
            </div>
          </div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 lg:-bottom-10 text-white text-[10px] font medium tracking-[0.3em] uppercase"
          >
            The cliQTest Advantage
          </motion.span>
        </div>
        
        {/* Floating Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:block w-full gap-6 z-10">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`lg:absolute ${reason.pos} flex flex-col items-center group`}
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.5,
                  ease: "easeInOut" 
                }}
                className="bg-white rounded-md px-8 py-3 mb-4 flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(104,67,183,0.4)] transition-all duration-300 whitespace-nowrap cursor-default"
              >
                {/* <div className="w-5 h-5 rounded-full bg-[#6843B7]/10 flex items-center justify-center text-[#6843B7]">
                  <span className="text-[10px]">✦</span>
                </div> */}
                <span className="text-black font medium text-[14px] md:text-[16px] tracking-tight">{reason.name}</span>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="text-[#b6b3bb] text-xs md:text-sm font medium max-w-[220px] leading-snug drop-shadow-sm text-center"
              >
                {reason.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
