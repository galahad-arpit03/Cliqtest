"use client";
import { useEffect } from 'react';

import React, { useRef, useState } from 'react';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Code2, LineChart, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import CustomerMarquee from '@/components/common/CustomerMarquee';

import features from './featuresData';

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
                  className="hidden md:flex h-48 bg-app-surface border border-app-border rounded-md relative overflow-hidden items-center justify-center group"
                >
                  {/* Elegant Gradient Background */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-50" 
                    style={{ background: `radial-gradient(circle at center, ${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'} 0%, transparent 70%)`}} 
                  />
                  
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  
                  {/* Central Glowing Orb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: isPurple ? '#6843B7' : '#00F2B0' }} />
                  
                  {/* Floating Icon Container */}
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-md bg-app-bg border border-app-border shadow-xl group-hover:scale-110 transition-transform duration-700 ease-out">
                    <Icon size={36} className="opacity-90" style={{ color: isPurple ? '#6843B7' : '#00F2B0' }} />
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
