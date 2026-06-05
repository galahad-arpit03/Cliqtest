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
    <div className="min-bg-[#050505] text-white overflow-x-clip selection:bg-[#00F2B0]/30 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 min-h-[60vh] flex flex-col justify-center border-b border-white/5 overflow-hidden">
        {/* Background Image/Gradient */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Image 
            src="/images/by-industry-hero.png" 
            alt="Hero Background" 
            fill 
            priority
            className="object-cover object-center opacity-[0.6] scale-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80 pointer-events-none" />
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
          className="scroll-mt-20 lg:sticky top-20 z-10 bg-[#050505] py-4"
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
          className="scroll-mt-40 lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Healthcare Left Column (Bento Stack) */}
            <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
              
              {/* Visual Card */}
              <div className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center">
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
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Healthcare</h2>
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
          className="scroll-mt-40 lg:sticky top-20 z-30 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]"
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
          className="scroll-mt-40 lg:sticky top-20 z-40 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]"
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
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">E-Commerce</h2>
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
              <div className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center">
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
          className="scroll-mt-40 lg:sticky top-20 z-50 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Telecom Main Content */}
            <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group">
              {/* Top Glow Beam */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6843B7] to-transparent opacity-50" />
              {/* Subtle Angled Inner Beam */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(104,67,183,0.02)_50%,transparent_100%)] pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
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
            </div>

            {/* Telecom Right Column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group">
                 {/* Diagonal Beam */}
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(104,67,183,0.15)_50%,transparent_75%)] pointer-events-none" />
                 <Wifi size={64} className="text-[#6843B7] opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#6843B7]/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#6843B7]/30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>
              <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#6843B7] shadow-[0_0_10px_#6843B7]" />
                  Key Benefits
                </h4>
                <div className="space-y-4">
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

          </div>
        </section>

      {/* Additional Industries Generated for Anchor Links */}
      {[
        { 
          id: "banking", 
          name: "Banking", 
          icon: Landmark, 
          desc: [
            "Banking ecosystems require highly reliable, secure, and scalable testing across core banking platforms, mobile applications, APIs, payment systems, and omnichannel customer journeys. cliQTest enables end-to-end automation of critical banking workflows including customer onboarding, account management, loan origination, fund transfers, transaction validation, and branch operations across interconnected systems.",
            "The platform supports OTP automation, real-device testing, API validation, audit-ready reporting, AI-driven automation, and synchronized UI/API testing to ensure operational consistency and regulatory compliance. By automating large-scale banking workflows and regression cycles, cliQTest helps financial institutions improve system reliability, reduce operational risks, and accelerate digital banking transformation initiatives."
          ],
          benefits: [
            "End-to-end core banking workflow validation",
            "OTP and authentication automation",
            "Real-time API and backend testing",
            "Omnichannel banking journey validation",
            "Improved compliance and operational reliability"
          ]
        },
        { 
          id: "insurance", 
          name: "Insurance", 
          icon: ShieldCheck, 
          desc: [
            "Insurance platforms involve highly complex workflows across underwriting, policy issuance, claims processing, renewals, cancellations, refunds, and customer servicing operations. cliQTest enables intelligent automation and validation of multi-stage insurance workflows across web, mobile, APIs, and interconnected backend systems.",
            "The platform supports CAPTCHA handling, financial validations, reusable automation components, API integrations, cross-platform execution, and AI-powered automation stability to ensure accurate validation of business-critical insurance processes. By streamlining insurance workflow testing and improving execution consistency, cliQTest helps organizations reduce manual effort, improve policy lifecycle reliability, and strengthen compliance across insurance ecosystems."
          ],
          benefits: [
            "End-to-end policy lifecycle automation",
            "CAPTCHA and secure workflow handling",
            "Reusable and scalable test automation",
            "Cross-platform insurance workflow validation",
            "Improved process reliability and compliance"
          ]
        },
        { 
          id: "capital-markets", 
          name: "Capital Markets", 
          icon: Landmark, 
          desc: [
            "Capital market systems require precise validation of high-volume trading workflows, portfolio operations, financial calculations, and real-time transaction processing across complex financial ecosystems. cliQTest enables intelligent automation and data-driven validation for trading platforms, investment systems, portfolio management workflows, and reporting engines.",
            "The platform supports scenario-based testing, API validation, real-time data synchronization checks, AI-assisted automation, and audit-ready reporting to ensure accuracy across P&L calculations, NAV processing, margin validations, and trade execution workflows. By improving testing precision and operational visibility, cliQTest helps organizations reduce financial risks and maintain confidence in mission-critical investment systems."
          ],
          benefits: [
            "Trading and portfolio workflow validation",
            "Real-time financial data consistency checks",
            "Scenario-based automation testing",
            "Audit-ready reporting and traceability",
            "Improved accuracy in financial operations"
          ]
        },
        { 
          id: "payments-&-remittance", 
          name: "Payments & Remittance", 
          icon: CreditCard, 
          desc: [
            "Payment and remittance platforms require secure, real-time validation of transaction flows, payment gateways, beneficiary management, authentication mechanisms, and cross-border financial operations. cliQTest enables end-to-end automation of complex payment journeys across mobile and web ecosystems while ensuring transaction consistency and operational reliability.",
            "The platform supports OTP automation, API validation, PIN authentication workflows, real-device testing, and cross-system synchronization to validate complete remittance and payment processing lifecycles. By automating critical transaction workflows and reducing execution failures, cliQTest helps organizations improve transaction reliability, minimize operational risks, and accelerate release readiness across payment ecosystems."
          ],
          benefits: [
            "End-to-end remittance workflow validation",
            "OTP and PIN authentication automation",
            "Payment gateway and API testing",
            "Real-device mobile payment validation",
            "Improved transaction reliability and stability"
          ]
        },
        { 
          id: "wealth-management", 
          name: "Wealth Management", 
          icon: Landmark, 
          desc: [
            "Wealth management and investment platforms require reliable validation of portfolio management, SIP operations, investment transactions, redemption workflows, and customer financial journeys across digital ecosystems. cliQTest enables scalable automation of mutual fund operations, investment dashboards, transaction processing, and customer engagement workflows with improved visibility and execution consistency.",
            "The platform supports data-driven testing, real-time financial validation, cross-device execution, dynamic workflow testing, and AI-powered automation to ensure accurate handling of investment scenarios and business logic changes. By streamlining testing operations and improving automation scalability, cliQTest helps wealth management organizations deliver secure and seamless customer investment experiences."
          ],
          benefits: [
            "Investment and portfolio workflow validation",
            "Data-driven financial testing",
            "Cross-device investment platform testing",
            "Real-time dashboard and transaction validation",
            "Improved customer experience reliability"
          ]
        },
        { 
          id: "enterprise-crm", 
          name: "Enterprise CRM", 
          icon: Store, 
          desc: [
            "Enterprise CRM platforms involve complex business workflows, multi-level approvals, document management, financial validations, and role-based operational processes across distributed enterprise environments. cliQTest enables intelligent automation of CRM workflows while ensuring process consistency, execution reliability, and operational transparency.",
            "The platform supports role-based automation, reusable test workflows, centralized reporting, workflow orchestration, and compliance-focused validation to streamline testing across interconnected enterprise systems. By improving testing efficiency and reducing manual intervention, cliQTest helps enterprises strengthen operational governance and improve workflow continuity across CRM ecosystems."
          ],
          benefits: [
            "Multi-level workflow automation",
            "Role-based validation and execution",
            "Document and financial process testing",
            "Centralized reporting and traceability",
            "Improved enterprise workflow reliability"
          ]
        },
        { 
          id: "transportation-&-mobility", 
          name: "Transportation & Mobility", 
          icon: RadioTower, 
          desc: [
            "Transportation and mobility platforms require seamless validation of booking systems, payment workflows, reservation processes, approvals, and cross-platform customer interactions across interconnected applications. cliQTest enables unified automation of transportation workflows spanning web, mobile, APIs, and backend systems while ensuring reliable execution across complex operational ecosystems.",
            "The platform supports OTP handling, CAPTCHA automation, Flutter application testing, API validation, and synchronized cross-platform execution to improve operational efficiency and customer experience consistency. By automating long and complex mobility workflows, cliQTest helps organizations reduce operational risks and improve service reliability across transportation ecosystems."
          ],
          benefits: [
            "End-to-end booking and reservation validation",
            "Flutter and mobile application testing",
            "OTP and CAPTCHA workflow automation",
            "Cross-platform transportation testing",
            "Improved operational efficiency and reliability"
          ]
        },
        { 
          id: "railway-&-reservation-systems", 
          name: "Railway & Reservation Systems", 
          icon: CheckCircle2, 
          desc: [
            "Railway reservation systems require highly accurate API validation, backend synchronization, and environment consistency across large-scale reservation, timetable, fare enquiry, and ticketing services. cliQTest enables structured multi-environment testing and automated response validation across complex railway and transportation APIs.",
            "The platform supports field-level response comparison, automated mismatch detection, environment-based execution workflows, and centralized reporting to ensure accurate migration validation and backend reliability across reservation ecosystems. By improving data consistency and reducing release risks, cliQTest helps railway platforms maintain operational stability and seamless customer experiences."
          ],
          benefits: [
            "Multi-environment API validation",
            "Field-level response comparison",
            "Automated mismatch detection",
            "Centralized execution reporting",
            "Improved backend reliability and accuracy"
          ]
        },
        { 
          id: "financial-services", 
          name: "Financial Services", 
          icon: Landmark, 
          desc: [
            "Financial service organizations require secure, scalable, and highly reliable validation across customer onboarding, lending, leasing, transaction processing, compliance operations, and digital customer engagement platforms. cliQTest enables intelligent automation of complex financial workflows across web, mobile, APIs, and backend systems.",
            "The platform supports AI-driven automation, OTP and biometric handling, workflow orchestration, API testing, and real-device validation to ensure accurate execution and operational consistency across interconnected financial ecosystems. By improving visibility, automation scalability, and compliance readiness, cliQTest helps organizations accelerate digital transformation while maintaining customer trust and operational excellence."
          ],
          benefits: [
            "End-to-end financial workflow automation",
            "OTP and biometric validation",
            "AI-driven automation capabilities",
            "Cross-system and API testing",
            "Improved compliance and release reliability"
          ]
        },
        { 
          id: "public-sector-&-government", 
          name: "Public Sector & Government", 
          icon: ShieldCheck, 
          desc: [
            "Government and public sector platforms require reliable validation of citizen services, workflow approvals, digital documentation, and large-scale public-facing applications while ensuring governance, transparency, and operational continuity. cliQTest enables centralized automation and quality validation across complex public sector workflows and digital service ecosystems.",
            "The platform supports secure workflow automation, role-based execution, cross-platform validation, audit-ready reporting, and scalable testing operations that improve service reliability and operational efficiency. By modernizing testing practices and streamlining workflow validation, cliQTest helps government organizations improve digital service delivery and maintain compliance across critical public systems."
          ],
          benefits: [
            "Citizen service workflow validation",
            "Secure and scalable testing operations",
            "Role-based execution management",
            "Audit-ready reporting and traceability",
            "Improved operational transparency and efficiency"
          ]
        },
        { 
          id: "logistics-&-supply-chain", 
          name: "Logistics & Supply Chain", 
          icon: Store, 
          desc: [
            "Logistics and supply chain ecosystems require reliable validation of shipment tracking, inventory management, warehouse operations, transportation coordination, and order fulfillment workflows across interconnected enterprise systems. cliQTest enables intelligent automation and end-to-end validation across supply chain platforms to ensure operational continuity and process accuracy.",
            "The platform supports API testing, mobile execution, real-time workflow validation, centralized reporting, and cross-platform automation to streamline logistics operations and improve execution reliability. By accelerating testing cycles and reducing operational failures, cliQTest helps logistics organizations optimize supply chain efficiency and deliver seamless customer experiences."
          ],
          benefits: [
            "End-to-end logistics workflow validation",
            "Real-time shipment and inventory testing",
            "API and mobile platform validation",
            "Centralized execution visibility",
            "Improved supply chain operational efficiency"
          ]
        }
      ].map((industry, idx) => {
        const layoutType = idx % 4;
        const colorClass = idx % 2 === 0 ? 'text-[#6843B7]' : 'text-[#00F2B0]';
        const bgGradientFrom = idx % 2 === 0 ? 'from-[#6843B7]' : 'from-[#00F2B0]';
        const bgGradientTo = idx % 2 === 0 ? 'to-[#9e7be9]' : 'to-[#00b382]';
        const shadowColor = idx % 2 === 0 ? 'shadow-[0_0_10px_#6843B7]' : 'shadow-[0_0_10px_#00F2B0]';
        const dotBg = idx % 2 === 0 ? 'bg-[#6843B7]' : 'bg-[#00F2B0]';
        const viaColor = idx % 2 === 0 ? 'via-[#6843B7]' : 'via-[#00F2B0]';

        const MainContent = (
          <>
            <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${viaColor} to-transparent opacity-50`} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(104,67,183,0.02)_50%,transparent_100%)] pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="mb-6">
                <h2 className={`text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${bgGradientFrom} ${bgGradientTo}`}>{industry.name}</h2>
              </div>
              <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base max-w-3xl">
                {industry.desc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </>
        );

        const BenefitsContent = (
          <>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
              <span className={`w-2 h-2 rounded-md ${dotBg} ${shadowColor}`} />
              Key Benefits
            </h4>
            <div className="space-y-4">
              {industry.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 size={18} className={`${colorClass} shrink-0 mt-0.5`} />
                  <span className="leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </>
        );

        const VisualContent = (hClass: string) => (
          <div className={`${hClass} bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group`}>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(104,67,183,0.15)_50%,transparent_75%)] pointer-events-none" />
            <industry.icon size={64} className={`${colorClass} opacity-40 group-hover:scale-110 transition-transform duration-700 relative z-10`} />
          </div>
        );

        return (
          <section 
            key={industry.id}
            id={industry.id} 
            className="scroll-mt-40 lg:sticky top-20 z-50 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {layoutType === 0 && (
                <>
                  <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group">
                    {MainContent}
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                      {BenefitsContent}
                    </div>
                    {VisualContent("h-48")}
                  </div>
                </>
              )}
              {layoutType === 1 && (
                <>
                  <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
                    {VisualContent("h-48")}
                    <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                      {BenefitsContent}
                    </div>
                  </div>
                  <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 lg:order-2">
                    {MainContent}
                  </div>
                </>
              )}
              {layoutType === 2 && (
                <>
                  <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group">
                    {MainContent}
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    {VisualContent("h-48")}
                    <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden">
                      {BenefitsContent}
                    </div>
                  </div>
                </>
              )}
              {layoutType === 3 && (
                <>
                  <div className="lg:col-span-7 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group">
                    {MainContent}
                  </div>
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    {VisualContent("h-48")}
                    <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                      {BenefitsContent}
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })}

      </div>
    </div>
  );
}
