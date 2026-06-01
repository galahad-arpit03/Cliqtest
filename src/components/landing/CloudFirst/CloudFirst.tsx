"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CloudFirst() {
  return (
    <section className="relative w-full bg-black py-24 px-8 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-[44px] font-bold text-white mb-4 tracking-tight leading-[1.1]"
          >
            <span className='text-[#6843B7] font-semibold'>cliQTest</span> Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white font-bold tracking-[0.2em] text-[11px] uppercase"
          >
            DRIVING THE FUTURE OF QA
          </motion.p>
        </div>

        {/* Bento Grid - 2x2 Horizontal Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: 12,000+ Test Runs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row rounded-md bg-[#0A0A0A] border border-white/10 overflow-hidden group"
          >
            <div className="relative w-full sm:w-[45%] h-[250px] sm:h-auto bg-black border-b sm:border-b-0 sm:border-r border-white/5 overflow-hidden">
              <Image
                src="/assets/66fc49416a607a9c02f4bd04_card-tall-complex-flows-hq-p-500.webp"
                alt="Test Runs"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <h3 className="text-[28px] font-bold text-white mb-1 leading-tight tracking-tight">12,000+</h3>
              <h4 className="text-xl font-bold text-white mb-3 leading-tight tracking-tight">Test Runs</h4>
              <p className="text-zinc-400 text-[13px] leading-relaxed mb-6">
                Scale your quality engineering with a platform built for massive parallel execution and enterprise-grade reliability.
              </p>
              <a href="#" className="text-[#00F2B0] font-bold text-[13px] hover:text-white transition-colors mt-auto">
                Learn More ...
              </a>
            </div>
          </motion.div>

          {/* Card 2: 50+ Enterprises */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row rounded-md bg-[#0A0A0A] border border-white/10 overflow-hidden group"
          >
            <div className="relative w-full sm:w-[45%] h-[250px] sm:h-auto bg-black overflow-hidden border-b sm:border-b-0 sm:border-r border-white/5">
              <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEwIDBWMjBNMCAxMEgyMCIgc3Ryb2tlPSIjMDBGMkIwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] bg-[length:20px_20px]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/80 to-transparent z-10" />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center relative z-20">
              <h4 className="text-xl font-bold text-white mb-3 leading-tight tracking-tight">50+ Enterprises</h4>
              <p className="text-zinc-400 text-[13px] leading-relaxed mb-6">
                Trusted by global leaders to automate their most critical workflows and ensure seamless user experiences at scale.
              </p>
              <a href="#" className="text-[#00F2B0] font-bold text-[13px] hover:text-white transition-colors mt-auto">
                Learn More ...
              </a>
            </div>
          </motion.div>

          {/* Card 3: 4+ Platform Support */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row rounded-md bg-[#0A0A0A] border border-white/10 overflow-hidden group"
          >
            <div className="relative w-full sm:w-[45%] h-[250px] sm:h-auto bg-black border-b sm:border-b-0 sm:border-r border-white/5">
              <Image
                src="/assets/6852f436ba19260e1e1f1bfe_card-agent-action.webp"
                alt="Platform Support"
                fill
                className="object-cover object-left transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-white mb-3 leading-tight tracking-tight">4+ Platform Support</h4>
              <p className="text-zinc-400 text-[13px] leading-relaxed mb-6">
                Comprehensive coverage for Web, Mobile, API, and Desktop testing in one intelligent ecosystem.
              </p>
              <a href="#" className="text-[#00F2B0] font-bold text-[13px] hover:text-white transition-colors mt-auto">
                Learn More ...
              </a>
            </div>
          </motion.div>

          {/* Card 4: 10,000+ Device Supports */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row rounded-md bg-[#0A0A0A] border border-white/10 overflow-hidden group"
          >
            <div className="relative w-full sm:w-[45%] h-[250px] sm:h-auto bg-black border-b sm:border-b-0 sm:border-r border-white/5">
              <Image
                src="/assets/68e97727a405c7cd4f58ca37_card-test-horizontal-stack.webp"
                alt="Device Supports"
                fill
                className="object-cover object-left transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-white mb-3 leading-tight tracking-tight">10,000+ Device Supports</h4>
              <p className="text-zinc-400 text-[13px] leading-relaxed mb-6">
                Test on real devices and browsers to ensure perfection on every screen and operating system.
              </p>
              <a href="#" className="text-[#00F2B0] font-bold text-[13px] hover:text-white transition-colors mt-auto">
                Learn More ...
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
