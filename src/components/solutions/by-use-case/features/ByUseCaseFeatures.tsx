'use client';
import { useEffect } from 'react';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Globe, Smartphone, Network, Monitor, RefreshCw, Activity, Brain } from 'lucide-react';

import features from './featuresData';

export default function ByUseCaseFeatures() {

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
    <div className="bg-[#090A0A] text-white min-h-screen">
      
      {/* 1. Hero Section */}
      

      {/* 2. Main Content - Sticky Bento Layout */}
      <div className="bg-[#050505] text-white py-20 flex flex-col gap-8">
        {/* Header Section */}
        <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
            Solutions By <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Use Case</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
            Explore specialized automation and testing capabilities designed to conquer the unique challenges of your technology stack.
          </p>
        </div>

              {features.map((feat, idx) => {
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = (feat as any).theme === 'purple' || !(feat as any).theme;
        const accentColor = isPurple ? "#6843B7" : "#00F2B0";
        const gradientClass = isPurple 
          ? "from-[#6843B7] to-[#8f81eb]" 
          : "from-[#00F2B0] to-[#ffffff]";
        
        const Icon = feat.icon;

        return (
          <React.Fragment key={feat.id}>
            <div id={feat.id} className="scroll-mt-32 w-full" aria-hidden="true" />
            
            <section 
              className="lg:sticky top-20 bg-[#050505] py-6 lg:shadow-[0_-20px_40px_rgba(0,0,0,0.6)] border-t border-white/5 rounded-md"
              style={{ zIndex: 20 + idx }}
            >
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[500px]">
              
              <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="hidden md:flex h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden items-center justify-center group"
                >
                  <div 
                    className="absolute inset-0 pointer-events-none" 
                    style={{ background: `linear-gradient(45deg,transparent 25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'} 50%,transparent 75%)`}} 
                  />
                  <div className="absolute inset-0 flex flex-col gap-3 p-6 opacity-[0.08] pointer-events-none overflow-hidden justify-center">
                    <div className="h-2 w-full bg-white rounded-full" />
                    <div className="h-2 w-3/4 bg-white rounded-full" />
                    <div className="h-2 w-5/6 bg-white rounded-full" />
                    <div className="h-2 w-1/2 bg-white rounded-full" />
                    <div className="h-2 w-full bg-white rounded-full" />
                    <div className="h-2 w-2/3 bg-white rounded-full" />
                  </div>
                  <Icon size={80} color={accentColor} className="opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group"
                >
                  <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-md shadow-[0_0_10px]" style={{ backgroundColor: accentColor, color: accentColor }} />
                    Key Capabilities
                  </h4>
                  <div className="space-y-4">
                    {((feat as any).benefits || []).map((benefit: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <div className="shrink-0 mt-0.5" style={{ color: accentColor }}>✓</div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 flex flex-col justify-center ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="absolute top-0 inset-x-0 h-px opacity-50" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
                <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(-90deg,transparent 0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'} 50%,transparent 100%)`}} />
                
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                    {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                  </h2>
                  
                  <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                    {Array.isArray((feat as any).desc) ? (feat as any).desc.map((p: string, i: number) => (
                      <p key={i}>{p}</p>
                    )) : <p>{(feat as any).desc}</p>}
                  </div>
                  
                </div>
              </motion.div>

              </div>
            </div>
          </section>
          <div className="h-8 w-full" />
        </React.Fragment>
        );
      })}
      </div>

      {/* 3. CTA Section */}
      <section className="py-24 px-8 mt-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-left sm:text-center bg-white/5 border border-white/10 rounded-md p-8 sm:p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">Ready to Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Your Quality?</span></h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Join enterprise engineering teams who trust cliQTest to automate their most complex and business-critical testing workflows.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-4">
            <Link href="/book-a-demo" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:scale-105 active:scale-95 transition-all ] text-[13px] sm:text-base whitespace-nowrap">
              Contact Sales
            </Link>
            {/* <Link href="/pricing" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors text-[13px] sm:text-base whitespace-nowrap">
              View Plans
            </Link> */}
          </div>
        </div>
      </section>

    </div>
  );
}
