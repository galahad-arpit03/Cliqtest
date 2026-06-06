"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Code2, LineChart, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import CustomerMarquee from '@/components/common/CustomerMarquee';

const features = [
  {
    id: "banking",
    title: "Banking: Scaling Reliable Core Systems",
    theme: "purple",
    icon: Building2,
    stories: [
      {
        company: "Axis Bank",
        desc: "Axis Bank adopted ApMoSys’s innovative solutions as part of their digital transformation journey. The partnership enabled smooth deployment of tailored technology that aligned with their strategic goals, significantly boosting operational efficiency and streamlining key banking functions across their ecosystem.",
        benefits: ['Boosted operational efficiency', 'Streamlined banking functions', 'Tailored technology deployment']
      },
      {
        company: "Bank of Maharashtra",
        desc: "Bank of Maharashtra deployed the Netraa Lighthouse Synthetic Monitoring platform, ensuring end-to-end uptime visibility, faster incident detection, and improved digital channel reliability.",
        benefits: ['End-to-end uptime visibility', 'Faster incident detection', 'Improved channel reliability']
      },
      {
        company: "UCO Bank, RBL Bank & More",
        desc: "UCO Bank, RBL Bank, ABCD Bank, and IDBI Bank implemented our cliQTest and Netraa solutions to enable real-time performance visibility, faster issue resolution, and improved system reliability.",
        benefits: ['Faster issue resolution', 'Real-time performance visibility', 'Improved system reliability']
      }
    ]
  },
  {
    id: "fintech",
    title: "FinTech & Payments: Streamlined Execution",
    theme: "teal",
    icon: ShieldCheck,
    stories: [
      {
        company: "CRIS",
        desc: "CRIS leveraged ApMoSys’s cliQTest platform to streamline their testing processes. The platform’s robust automation capabilities and user-friendly interface significantly improved test accuracy and speed, empowering the team to deliver quality software with greater efficiency and confidence across projects.",
        benefits: ['Improved test accuracy and speed', 'Greater delivery efficiency', 'Robust automation capabilities']
      },
      {
        company: "Protean & NSDL",
        desc: "Protean implemented our Netraa Lighthouse Synthetic Monitoring solution for Protean eGov Technologies, enabling continuous availability checks, proactive performance alerts, and seamless digital experience assurance. NSDL Payments Bank leveraged our cliQTest solution for real-time visibility.",
        benefits: ['Continuous availability checks', 'Proactive performance alerts', 'Real-time visibility']
      }
    ]
  },
  {
    id: "financial-services",
    title: "Financial Services: Operational Excellence",
    theme: "purple",
    icon: LineChart,
    stories: [
      {
        company: "Muscat Finance",
        desc: "Muscat Finance collaborated with ApMoSys on their FinXplore OCR automation platform and were impressed by their expertise and dedicated support. Their team delivered tailored solutions that aligned perfectly with our needs, ensuring smooth integration and enhancing our operational efficiency.",
        benefits: ['Smooth system integration', 'Enhanced operational efficiency', 'Dedicated tailored support']
      },
      {
        company: "L&T Finance",
        desc: "L&T Finance deployed the Netraa Lighthouse Synthetic Monitoring platform, ensuring end-to-end uptime visibility, faster incident detection, and improved digital channel reliability.",
        benefits: ['Faster incident detection', 'End-to-end uptime visibility', 'Reliable digital channels']
      }
    ]
  },
  {
    id: "insurance-pharma",
    title: "Insurance & Pharma: Real-Time Performance",
    theme: "teal",
    icon: Code2,
    stories: [
      {
        company: "Generali Central Life Insurance",
        desc: "Generali Central Life Insurance implemented its Netraa APM solution, enabling real-time performance visibility, faster issue resolution, and improved system reliability across their entire application ecosystem.",
        benefits: ['Real-time APM visibility', 'Faster issue resolution', 'System ecosystem reliability']
      },
      {
        company: "FDC India",
        desc: "In the pharmaceutical sector, FDC India implemented its Netraa APM solution, enabling real-time performance visibility, faster issue resolution, and improved system reliability.",
        benefits: ['Real-time APM visibility', 'Faster issue resolution', 'Improved system reliability']
      }
    ]
  }
];

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
    <section id={feat.id} className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:min-h-[400px]">
          
          {/* Left Column Stack */}
          <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            
            {/* Visual Demo Card */}
            <motion.div 
              className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={`absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'}_50%,transparent_75%)] pointer-events-none`} />
              
              <Icon size={80} className={`${isPurple ? 'text-[#6843B7]' : 'text-[#00F2B0]'} opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10`} />

              {/* Animated Mock Data Lines */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 opacity-20">
                <motion.div 
                  className={`h-1 rounded-full ${isPurple ? 'bg-[#6843B7]' : 'bg-[#00F2B0]'}`}
                  initial={{ width: '20%' }}
                  whileInView={{ width: '80%' }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div 
                  className={`h-1 rounded-full ${isPurple ? 'bg-[#6843B7]' : 'bg-[#00F2B0]'}`}
                  initial={{ width: '40%' }}
                  whileInView={{ width: '60%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                />
              </div>
            </motion.div>
            
            {/* Metrics Card */}
            <motion.div 
              className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-md ${isPurple ? 'bg-[#6843B7] shadow-[0_0_10px_#6843B7]' : 'bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]'}`} />
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
                      <div key={i} className="flex items-start gap-3 text-sm text-white/80">
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
            className={`lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group flex flex-col justify-center order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${isPurple ? 'via-[#6843B7]' : 'via-[#00F2B0]'} to-transparent opacity-50`} />
            <div className={`absolute inset-0 bg-[linear-gradient(${idx % 2 === 0 ? '90deg' : '-90deg'},transparent_0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'}_50%,transparent_100%)] pointer-events-none`} />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 relative z-10">
              <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
              </h3>
              
              {feat.stories.length > 1 && (
                <div className="flex items-center gap-2 shrink-0 md:mt-2">
                  <button onClick={prevSlide} className="w-10 h-10 rounded-md bg-white/5 hover:bg-[#6843B7] flex items-center justify-center transition-all text-white/50 hover:text-white border border-white/10">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={nextSlide} className="w-10 h-10 rounded-md bg-white/5 hover:bg-[#6843B7] flex items-center justify-center transition-all text-white/50 hover:text-white border border-white/10">
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
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4 border-b border-white/10 pb-4 w-fit pr-8">
                    {currentStory.company}
                  </h4>
                  <div className="space-y-4 text-white/60 text-base md:text-lg leading-relaxed max-w-3xl">
                    <p>{currentStory.desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function SuccessStories() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '30%']);

  return (
    <div className="bg-[#090A0A] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen bg-[#060411] flex flex-col justify-center border-b border-white/5 overflow-hidden">
        {/* Background Image/Gradient */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Image 
            src="/images/success-story-hero.png" 
            alt="Hero Background" 
            fill 
            priority
            unoptimized
            className="object-contain object-right md:object-right-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060411]/80 via-[#060411]/40 to-[#060411] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none" />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Success Stories</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
              Discover how leading global enterprises and innovative startups leverage our comprehensive platform to seamlessly achieve and exceed their quality goals across industries.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#banking" className="inline-flex items-center gap-2 px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:bg-[#6843B7]/90 transition-all">
                Explore Stories
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CustomerMarquee />

      {/* 2. Main Content - Sticky Bento Layout */}
      <div className="bg-[#050505] text-white py-20 flex flex-col gap-8">
        {/* Header Section */}
        <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Showcases</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
            Read through our proven success stories and in-depth case studies from industry leaders who trust cliQTest every single day.
          </p>
        </div>

        {features.map((feat, idx) => (
          <DomainSection key={feat.id} feat={feat} idx={idx} />
        ))}
      </div>

      {/* 3. CTA Section */}
      <section className="py-24 px-8 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-left sm:text-center bg-white/5 border border-white/10 rounded-md p-8 sm:p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Enterprise-Grade Quality?</span></h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Contact us to see how cliQTest can seamlessly integrate into your team's workflow and scale your testing infrastructure.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-4">
            <Link href="/book-a-demo" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:scale-105 active:scale-95 transition-all text-[13px] sm:text-base whitespace-nowrap">
              Book a Demo
            </Link>
            <Link href="/pricing" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors text-[13px] sm:text-base whitespace-nowrap">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
