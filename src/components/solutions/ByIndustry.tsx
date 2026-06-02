"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Landmark, 
  HeartPulse, 
  Store, 
  ShoppingCart, 
  RadioTower, 
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  Tags,
  CreditCard,
  Wifi
} from 'lucide-react';

import Image from 'next/image';

export default function ByIndustry() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '30%']);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-clip selection:bg-[#00F2B0]/30 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 min-h-[60vh] flex flex-col justify-center border-b border-white/5 overflow-hidden">
        {/* Background Image/Gradient */}
        <motion.div style={{ y }} className="absolute top-0 right-0 w-full md:w-[60%] h-full opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10" />
          <Image 
            src="/assets/landing hero.png" 
            alt="Hero Background" 
            fill 
            className="object-cover object-right"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Solutions <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">By Industry</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
              Tailored quality engineering for the unique challenges of your sector. Accelerate releases, ensure compliance, and deliver flawless digital experiences.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#fintech" className="inline-flex items-center gap-2 px-8 py-3 bg-[#6843B7] text-white font medium rounded-sm hover:bg-[#6843B7]/90 transition-all shadow-[0_0_20px_rgba(104,67,183,0.3)]">
                Explore
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>  

      {/* Long Page Content with Per-Section Bento Grids */}
      <div className="max-w-7xl mx-auto px-2 py-10 space-y-32">
        
        {/* FinTech Section */}
        <section 
          id="fintech" 
          className="scroll-mt-20 sticky top-20 z-10 bg-[#050505] py-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* FinTech Main Content */}
            <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group">
              {/* Top Glow Beam */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6843B7] to-transparent opacity-50" />
              {/* Subtle Angled Inner Beam */}
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(104,67,183,0.03)_50%,transparent_100%)] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">FinTech</h2>
                </div>
                
                <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base max-w-3xl">
                  <p>
                    FinTech applications demand speed, reliability, security, and real-time validation across highly regulated financial ecosystems. cliQTest enables end-to-end automation of complex financial workflows including onboarding, payments, remittances, authentication, portfolio management, and transaction validation.
                  </p>
                  <p>
                    The platform supports OTP automation, biometric validation, API testing, AI-driven automation, real-device testing, and cross-system data consistency checks that ensure secure and reliable customer experiences. By automating critical financial workflows, cliQTest helps organizations reduce operational risks, accelerate releases, and maintain regulatory compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* FinTech Right Column (Bento Stack) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* Benefits Card */}
              <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#6843B7] shadow-[0_0_10px_#6843B7]" />
                  Key Benefits
                </h4>
                <div className="space-y-4">
                  {[
                    'Secure transaction workflow validation',
                    'OTP and biometric automation',
                    'Real-time API and backend testing',
                    'Faster compliance-focused regression cycles',
                    'Improved financial system reliability'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 size={18} className="text-[#6843B7] shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Card */}
              <div className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center">
                 {/* Diagonal Beam */}
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(104,67,183,0.15)_50%,transparent_75%)] pointer-events-none" />
                 <ShieldCheck size={64} className="text-[#6843B7] opacity-50 relative z-10" />
                 <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6843B7]/50">Compliance Active</div>
              </div>

            </div>
          </div>
        </section>

        {/* Healthcare Section */}
        <section 
          id="healthcare" 
          className="scroll-mt-40 sticky top-20 z-20 bg-[#050505] py-4 shadow-[0_-20px_40px_rgba(5,5,5,1)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Healthcare Left Column (Bento Stack) */}
            <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
              
              {/* Visual Card */}
              <div className="h-56 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center">
                 {/* Diagonal Beam */}
                 <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(0,242,176,0.15)_50%,transparent_75%)] pointer-events-none" />
                 <Stethoscope size={72} className="text-[#00F2B0] opacity-40 relative z-10" />
                 <div className="absolute top-4 left-4 flex gap-1">
                    <div className="w-2 h-2 bg-[#00F2B0] rounded-md animate-ping" />
                    <div className="w-2 h-2 bg-[#00F2B0]/50 rounded-md" />
                 </div>
              </div>

              {/* Benefits Card */}
              <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]" />
                  Key Benefits
                </h4>
                <div className="space-y-4">
                  {[
                    'Reliable healthcare workflow validation',
                    'Improved traceability and governance',
                    'Secure testing environments',
                    'Scalable quality engineering practices',
                    'Enhanced operational efficiency'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 size={18} className="text-[#00F2B0] shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Healthcare Main Content */}
            <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 lg:order-2">
              {/* Bottom Glow Beam */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent opacity-50" />
              {/* Subtle Angled Inner Beam */}
              <div className="absolute inset-0 bg-[linear-gradient(-120deg,transparent_0%,rgba(0,242,176,0.03)_50%,transparent_100%)] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#00b382]">Healthcare</h2>
                </div>
                
                <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base">
                  <p>
                    Healthcare applications require high accuracy, reliability, compliance, and uninterrupted operational workflows across patient-facing and backend systems. cliQTest enables healthcare organizations to automate critical workflows, validate integrations, and improve quality assurance across digital healthcare ecosystems.
                  </p>
                  <p>
                    The platform supports centralized testing, secure execution environments, traceable workflows, AI-powered automation, and scalable validation capabilities that improve operational efficiency while maintaining testing consistency and governance.
                  </p>
                  <p>
                    cliQTest helps healthcare organizations reduce manual effort, improve system reliability, and deliver secure and seamless digital healthcare experiences.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Retail Section */}
        <section 
          id="retail" 
          className="scroll-mt-40 sticky top-20 z-30 bg-[#050505] py-4 shadow-[0_-20px_40px_rgba(5,5,5,1)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Retail Main Content */}
            <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group">
              {/* Center Glow Beam */}
              <div className="absolute top-0 inset-x-1/4 h-px bg-gradient-to-r from-transparent via-[#6843B7] to-transparent opacity-70" />
              {/* Subtle Angled Inner Beam */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(104,67,183,0.02)_50%,transparent_100%)] pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">Retail</h2>
                </div>
                
                <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base max-w-3xl">
                  <p>
                    Retail businesses operate across fast-moving digital ecosystems where user experience, performance, and cross-platform consistency directly impact revenue and customer satisfaction. cliQTest enables retailers to automate end-to-end shopping journeys, payment flows, inventory systems, and customer engagement workflows across web and mobile platforms.
                  </p>
                  <p>
                    The platform supports cross-browser testing, real-device validation, API testing, and AI-powered automation that help retailers ensure smooth customer experiences during high-demand business cycles. cliQTest enables retailers to improve release speed, reduce customer-facing defects, and deliver seamless omnichannel digital experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Retail Right Column (Stack) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {/* Retail Visual */}
              <div className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#6843B7]/10 to-transparent pointer-events-none opacity-50" />
                 <Tags size={80} className="text-[#6843B7] opacity-30 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="w-1/3 h-2 bg-white/10 rounded-md overflow-hidden">
                      <div className="w-full h-full bg-[#6843B7]" />
                    </div>
                    <div className="w-1/2 h-2 bg-white/10 rounded-md overflow-hidden">
                      <div className="w-[80%] h-full bg-[#6843B7]/50" />
                    </div>
                 </div>
              </div>

              {/* Retail Benefits */}
              <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#6843B7] shadow-[0_0_10px_#6843B7]" />
                  Key Benefits
                </h4>
                <div className="space-y-4">
                  {[
                    'Omnichannel customer journey validation',
                    'Cross-platform retail application testing',
                    'Faster release cycles',
                    'Improved user experience consistency',
                    'Reduced operational risks'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 size={18} className="text-[#6843B7] shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* E-Commerce Section */}
        <section 
          id="ecommerce" 
          className="scroll-mt-40 sticky top-20 z-40 bg-[#050505] py-4 shadow-[0_-20px_40px_rgba(5,5,5,1)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* E-Commerce Main Content */}
            <div className="lg:col-span-7 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group">
              {/* Top Right Glow Beam */}
              <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent opacity-50" />
              {/* Subtle Angled Inner Beam */}
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(0,242,176,0.03)_50%,transparent_100%)] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#00b382]">E-Commerce</h2>
                </div>
                
                <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base">
                  <p>
                    E-Commerce platforms require stable, scalable, and high-performing digital experiences across diverse customer journeys, payment systems, and transactional workflows. cliQTest enables organizations to validate complete e-commerce ecosystems including product discovery, cart management, checkout, payment processing, and order fulfillment.
                  </p>
                  <p>
                    The platform supports AI-driven automation, real-device testing, API validation, cross-browser execution, and distributed regression testing that ensure consistent shopping experiences across devices and environments. cliQTest helps e-commerce organizations improve platform reliability, accelerate feature releases, and maintain customer trust in highly competitive digital marketplaces.
                  </p>
                </div>
              </div>
            </div>

            {/* E-Commerce Right Column (Bento Stack) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Visual Card */}
              <div className="h-40 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center">
                 {/* Diagonal Beam */}
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,242,176,0.15)_50%,transparent_75%)] pointer-events-none" />
                 <CreditCard size={56} className="text-[#00F2B0] opacity-50 relative z-10" />
              </div>

              {/* Benefits Card */}
              <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]" />
                  Key Benefits
                </h4>
                <div className="space-y-4">
                  {[
                    'End-to-end e-commerce workflow validation',
                    'Cross-browser and mobile testing',
                    'Reliable payment and checkout validation',
                    'Faster regression testing',
                    'Improved customer experience quality'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 size={18} className="text-[#00F2B0] shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Telecom Section */}
        <section 
          id="telecom" 
          className="scroll-mt-40 sticky top-20 z-50 bg-[#050505] py-4 shadow-[0_-20px_40px_rgba(5,5,5,1)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Telecom Main Content (Full Top) */}
            <div className="lg:col-span-12 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group">
              {/* Top Glow Beam */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6843B7] to-transparent opacity-50" />
              {/* Subtle Angled Inner Beam */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(104,67,183,0.02)_50%,transparent_100%)] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">Telecom</h2>
                  </div>
                  
                  <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base max-w-3xl">
                    <p>
                      Telecom ecosystems involve highly interconnected systems, real-time workflows, customer onboarding, service provisioning, billing platforms, and multi-channel digital interactions. cliQTest enables telecom organizations to automate and validate complex workflows across web, mobile, API, and backend systems within a unified quality engineering platform.
                    </p>
                    <p>
                      The platform supports large-scale regression testing, real-device validation, AI-powered automation, distributed execution, and centralized reporting that improve testing efficiency and operational reliability across telecom environments.
                    </p>
                    <p>
                      cliQTest helps telecom providers accelerate service delivery, improve customer experience consistency, and reduce risks across mission-critical digital operations.
                    </p>
                  </div>
                </div>
                
                <div className="w-full lg:w-[400px] shrink-0">
                  <div className="bg-[#080808] border border-white/10 rounded-md p-8 relative overflow-hidden h-full min-h-[300px] flex items-center justify-center">
                     {/* Diagonal Beam */}
                     <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(104,67,183,0.15)_50%,transparent_75%)] pointer-events-none" />
                     <Wifi size={100} className="text-[#6843B7] opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#6843B7]/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#6843B7]/30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Telecom Bottom Full (Benefits) */}
            <div className="lg:col-span-12 bg-[#0A0A0A] border border-white/10 rounded-md p-6 md:p-8 relative overflow-hidden">
              <h4 className="text-white font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-md bg-[#6843B7] shadow-[0_0_10px_#6843B7]" />
                Key Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
                {[
                  'Large-scale workflow automation',
                  'Cross-system integration validation',
                  'Real-device and API testing',
                  'Faster release and regression cycles',
                  'Improved operational stability'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 size={18} className="text-[#6843B7] shrink-0 mt-0.5" />
                    <span className="leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
