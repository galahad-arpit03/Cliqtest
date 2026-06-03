"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function TestCasesFeature() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    '/assets/6852f436ba19260e1e1f1bfe_card-agent-action.webp',
    '/assets/68e97727a405c7cd4f58ca37_card-test-horizontal-stack.webp'
  ];

  const handleImageClick = () => {
    setActiveImageIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className="py-32 bg-[#030303] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#6843B7]/10 to-transparent blur-[120px] rounded-[100%] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LHS Content - Totally New Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >

            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
              Structured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Validation Units</span>
            </h2>
            
            <p className="text-white/60 text-lg leading-relaxed mb-10 pr-4">
              Centralize manual and automated test cases within a unified ecosystem. Eliminate fragmented workflows, map defects accurately, and collaborate seamlessly between QA and development teams.
            </p>

            {/* New Feature List Design */}
            <div className="space-y-6">
              {[
                { title: "Execution Histories & Logs", desc: "Track every step and validation point." },
                { title: "Version Control & Reusability", desc: "Maintain modular components effortlessly." },
                { title: "Audit & Compliance Readiness", desc: "Always be ready for regulatory reviews." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-sm bg-[#6843B7]/10 flex items-center justify-center border border-[#6843B7]/20 shrink-0 group-hover:bg-[#6843B7] transition-colors">
                    <CheckCircle2 size={12} className="text-[#6843B7] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white/90 font medium text-[16px] mb-1">{item.title}</h4>
                    <p className="text-white/50 text-[14px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RHS - Interactive Stacked Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:pl-10 h-[600px] w-full flex items-center justify-center perspective-[1200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6843B7]/20 to-[#00F2B0]/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative w-full max-w-[650px] h-[450px] cursor-pointer group" onClick={handleImageClick}>
              
              <AnimatePresence>
                {/* Image 0 */}
                <motion.div
                  key="image-0"
                  initial={false}
                  animate={{
                    opacity: activeImageIndex === 0 ? 1 : 0.4,
                    scale: activeImageIndex === 0 ? 1 : 0.95,
                    x: activeImageIndex === 0 ? -40 : 40,
                    y: activeImageIndex === 0 ? 40 : -40,
                    zIndex: activeImageIndex === 0 ? 20 : 10,
                  }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                  className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[90%] h-[90%] rounded-md border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden bg-[#111]"
                >
                  <Image 
                    src={images[0]} 
                    alt="Agent Action" 
                    fill 
                    className="object-cover"
                  />
                  {/* Subtle overlay for inactive state */}
                  {activeImageIndex !== 0 && (
                    <div className="absolute inset-0 bg-black/50 transition-colors" />
                  )}
                </motion.div>

                {/* Image 1 */}
                <motion.div
                  key="image-1"
                  initial={false}
                  animate={{
                    opacity: activeImageIndex === 1 ? 1 : 0.4,
                    scale: activeImageIndex === 1 ? 1 : 0.95,
                    x: activeImageIndex === 1 ? -40 : 40,
                    y: activeImageIndex === 1 ? 40 : -40,
                    zIndex: activeImageIndex === 1 ? 20 : 10,
                  }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                  className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[90%] h-[90%] rounded-md border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden bg-[#111]"
                >
                  <Image 
                    src={images[1]} 
                    alt="Test Stack" 
                    fill 
                    className="object-cover"
                  />
                  {/* Subtle overlay for inactive state */}
                  {activeImageIndex !== 1 && (
                    <div className="absolute inset-0 bg-black/50 transition-colors" />
                  )}
                </motion.div>
              </AnimatePresence>
              
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
