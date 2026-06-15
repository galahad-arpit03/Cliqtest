"use client";
import { useEffect } from 'react';

import React, { useRef, useState } from 'react';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Code2, LineChart, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import CustomerMarquee from '@/components/common/CustomerMarquee';

import features from './featuresData';


const renderMockUIBody = (id: string, accentColor: string, idx: number, Icon: any) => {
  // Common fallback that looks good for any generic item
  const renderFallback = () => (
    <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 flex flex-col items-center justify-center relative overflow-hidden p-2 gap-2">
       <div className="flex justify-center items-center w-full relative">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute w-12 h-12 rounded-full border border-dashed border-app-fg/20" />
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accentColor}20`, boxShadow: `0 0 15px ${accentColor}40` }}>
             <Icon size={14} style={{ color: accentColor }} />
          </div>
       </div>
       <div className="flex gap-2 w-full mt-2 justify-center">
          <div className="w-1/3 h-1 rounded-full bg-app-fg/20" />
          <div className="w-1/4 h-1 rounded-full bg-app-fg/20" />
       </div>
    </div>
  );

  switch (id) {
    // By Team Specifics
    case 'qa-teams':
    case 'automation-engineers':
      return (
        <div className="w-full h-full flex flex-col gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 font-mono">
          <div className="w-3/4 h-3 rounded bg-app-fg/10 flex items-center px-1.5">
             <span className="text-[6px] text-app-fg/60">"Run test suite"</span>
             <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="ml-1 w-0.5 h-2 bg-app-fg" />
          </div>
          <div className="flex-1 rounded border border-app-border/10 bg-app-fg/5 p-1.5 flex flex-col gap-1.5 mt-1 overflow-hidden">
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5 }} className="h-1 rounded mb-0.5 max-w-[60%]" style={{ backgroundColor: accentColor }} />
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 }} className="h-1 rounded mb-0.5 max-w-[80%]" style={{ backgroundColor: accentColor, opacity: 0.7 }} />
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 1 }} className="h-1 rounded max-w-[40%]" style={{ backgroundColor: accentColor, opacity: 0.4 }} />
          </div>
        </div>
      );
    case 'devops-teams':
      return (
        <div className="w-full h-full flex items-center justify-center gap-4 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 relative overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-app-fg/10 border-t border-dashed border-app-fg/20" /></div>
           <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="w-10 h-10 rounded border border-app-border/30 flex items-center justify-center z-10 bg-app-bg shadow-lg" style={{ borderColor: accentColor, boxShadow: `0 0 15px ${accentColor}30` }}>
             <Icon size={18} style={{ color: accentColor }} />
           </motion.div>
           <div className="flex flex-col gap-3 z-10">
              <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-6 h-6 rounded border border-app-border/30 bg-app-surface flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-app-fg/30"/></motion.div>
              <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="w-6 h-6 rounded border border-app-border/30 bg-app-surface flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-app-fg/30"/></motion.div>
           </div>
        </div>
      );

    // By Use Case Specifics
    case 'web-testing':
    case 'mobile-testing':
    case 'desktop-testing':
      return (
        <div className="w-full h-full flex flex-col gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 relative overflow-hidden">
           <div className="w-full h-full border border-app-fg/10 rounded-md relative flex items-center justify-center p-2 bg-app-bg">
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-app-fg/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-app-fg/30" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-app-fg/30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-app-fg/30" />
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 h-10 rounded border border-dashed flex items-center justify-center relative" style={{ borderColor: accentColor, backgroundColor: `${accentColor}10` }}>
                 <Icon size={14} style={{ color: accentColor }} />
              </motion.div>
           </div>
        </div>
      );
    case 'api-testing':
    case 'performance-testing':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 text-[8px] font-mono">
           <div className="grid grid-cols-3 gap-1 border-b border-app-border/20 pb-1 text-app-fg/50 font-bold uppercase tracking-wider">
              <div>Endpoint</div><div>Status</div><div>Time</div>
           </div>
           {[1, 2].map((_, i) => (
             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }} key={i} className="grid grid-cols-3 gap-1 py-1 border-b border-app-border/10">
                <div className="h-1.5 rounded bg-app-fg/20 w-3/4" />
                <div className="h-1.5 rounded w-1/2" style={{ backgroundColor: accentColor, opacity: 0.8 }} />
                <div className="h-1.5 rounded bg-app-fg/20 w-full" />
             </motion.div>
           ))}
        </div>
      );

    // Default for Industry/Success Stories, etc.
    default:
      return renderFallback();
  }
};


function DomainSection({ feat, idx }: { feat: typeof features[0], idx: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % feat.stories.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + feat.stories.length) % feat.stories.length);
  };

  const currentStory = feat.stories[currentIndex];

  const parts = feat.title.split(': ');
  const firstWord = parts[0] + (parts.length > 1 ? ':' : '');
  const restWords = parts.length > 1 ? parts[1] : '';
  const isPurple = feat.theme === 'purple';
  const gradientClass = isPurple ? "from-[#6843B7] to-[#ffffff]" : "from-[#00F2B0] to-[#ffffff]";
  const accentColor = isPurple ? "#6843B7" : "#00F2B0";
  const Icon = feat.icon;

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 30 : -30, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 30 : -30, opacity: 0 })
  };

  return (
    <React.Fragment key={feat.id}>
      <div id={feat.id} className="scroll-mt-20 w-full" aria-hidden="true" />
      <section 
        className="lg:sticky top-20 bg-app-bg py-6  border-t border-app-border rounded-md"
        style={{ zIndex: 20 + idx }}
      >
        <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:min-h-[500px]">
          
          {/* Left Column Stack */}
          <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            
            {/* Visual Demo Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="hidden md:flex h-48 bg-app-surface border border-app-border rounded-md relative overflow-hidden group"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  
                  {/* Large background icon for texture */}
                  <Icon 
                    size={160} 
                    className="absolute -right-8 -bottom-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none" 
                    style={{ color: accentColor }} 
                  />

                  {/* Mock UI */}
                  <div className="absolute inset-0 p-4 flex flex-col z-10 w-full h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="w-7 h-7 rounded-md flex items-center justify-center shadow-sm"
                          style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
                        >
                          <Icon size={14} style={{ color: accentColor }} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="w-20 h-2 rounded-full bg-app-fg/20" />
                          <div className="w-14 h-1.5 rounded-full bg-app-fg/10" />
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 flex gap-2.5 h-full min-h-0">
                      {/* Sidebar */}
                      <div className="w-1/3 rounded-md bg-black/30 [.theme-light_&]:bg-white/50 border border-app-border/50 p-2.5 flex flex-col gap-2 shadow-sm">
                        {[1, 2].map((_, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-sm bg-app-fg/20 shrink-0" />
                            <div className="w-full h-1.5 rounded-full bg-app-fg/10" />
                          </div>
                        ))}
                      </div>

                      {/* Main Content Area */}
                      <div className="w-2/3 rounded-md bg-black/30 [.theme-light_&]:bg-white/50 border border-app-border/50 p-2.5 flex flex-col min-h-0 shadow-sm">
                        <div className="w-1/2 h-1.5 rounded-full bg-app-fg/20 mb-2 shrink-0" />
                        
                        <div className="flex-1 min-h-0">
                          {renderMockUIBody(feat.id, accentColor, idx, Icon)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
            
            {/* Metrics Card */}
            <motion.div 
              className="flex-1 bg-app-surface border border-app-border rounded-md p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className={`font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>
                Key Outcomes
              </h4>
              <div className="relative min-h-[100px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={`benefits-${currentIndex}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    className="space-y-4 absolute inset-0 w-full"
                  >
                    {currentStory.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-app-fg/80">
                        <span className={`shrink-0 mt-0.5 ${isPurple ? 'text-[#6843B7]' : 'text-[#00F2B0]'}`}>✓</span>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.div
            className={`lg:col-span-8 bg-app-surface border border-app-border rounded-md p-8 md:p-10 relative overflow-hidden group flex flex-col justify-center order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${isPurple ? 'via-[#6843B7]' : 'via-[#00F2B0]'} to-transparent opacity-50`} />
            <div className={`absolute inset-0 bg-[linear-gradient(${idx % 2 === 0 ? '90deg' : '-90deg'},transparent_0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'}_50%,transparent_100%)] pointer-events-none`} />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 relative z-10">
              <h3 className="text-3xl md:text-4xl font-semibold text-app-fg tracking-tight">
                {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
              </h3>
              
              {feat.stories.length > 1 && (
                <div className="flex items-center gap-2 shrink-0 md:mt-2">
                  <button onClick={prevSlide} className="w-10 h-10 rounded-md bg-app-fg/5 hover:bg-[#6843B7] flex items-center justify-center transition-all text-app-fg/50 hover:text-app-fg border border-app-border">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={nextSlide} className="w-10 h-10 rounded-md bg-app-fg/5 hover:bg-[#6843B7] flex items-center justify-center transition-all text-app-fg/50 hover:text-app-fg border border-app-border">
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
            
            <div className="relative min-h-[160px] z-10 flex flex-col">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`desc-${currentIndex}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="w-full flex-1 flex flex-col justify-start"
                >
                  <h4 className="text-xl md:text-2xl font-bold text-app-fg mb-4 border-b border-app-border pb-4 w-fit pr-8">
                    {currentStory.company}
                  </h4>
                  <div className="space-y-4 text-app-fg/60 text-base md:text-lg leading-relaxed max-w-3xl">
                    <p>{currentStory.desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          </div>
        </div>
      </section>
      <div className="h-8 w-full" />
    </React.Fragment>
  );
}

export default function SuccessStoriesFeatures() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '30%']);

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
    <div className="bg-[#090A0A] text-app-fg min-h-screen">
      {/* 1. Hero Section */}
      

      <CustomerMarquee />

      {/* 2. Main Content - Sticky Bento Layout */}
      <div className="bg-app-bg text-app-fg py-20 flex flex-col">
        {/* Header Section */}
        <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-app-fg">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Showcases</span>
          </h2>
          <p className="text-base md:text-lg text-app-fg/50 leading-relaxed max-w-2xl">
            Read through our proven success stories and in-depth case studies from industry leaders who trust cliQTest every single day.
          </p>
        </div>

        {features.map((feat, idx) => (
          <DomainSection key={feat.id} feat={feat} idx={idx} />
        ))}
      </div>

      {/* 3. CTA Section */}
      <section className="py-24 px-8 bg-app-bg">
        <div className="max-w-4xl mx-auto text-left sm:text-center bg-app-fg/5 border border-app-border rounded-md p-8 sm:p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold text-app-fg mb-4 leading-tight">Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Enterprise-Grade Quality?</span></h2>
          <p className="text-app-fg/60 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Contact us to see how cliQTest can seamlessly integrate into your team's workflow and scale your testing infrastructure.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-4">
            <Link href="/book-a-demo" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:scale-105 active:scale-95 transition-all text-[13px] sm:text-base whitespace-nowrap">
              Book a Demo
            </Link>
            {/* <Link href="/pricing" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 border border-app-border-hover text-app-fg font-medium rounded-sm hover:bg-app-fg/5 transition-colors text-[13px] sm:text-base whitespace-nowrap">
              View Pricing
            </Link> */}
          </div>
        </div>
      </section>
      
    </div>
  );
}
