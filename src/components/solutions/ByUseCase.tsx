'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ByUseCase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-[#050505] min-h-screen text-white flex flex-col font-sans overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section ref={containerRef} className="relative pt-40 pb-24 min-h-[60vh] flex flex-col justify-center border-b border-white/5 overflow-hidden">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">By Use Case</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
              We deliver purpose-built infrastructure for targeted use cases, ensuring your engineering teams can validate quality at every tier of the modern tech stack.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#web-testing" className="inline-flex items-center gap-2 px-8 py-3 bg-[#6843B7] text-white font medium rounded-sm hover:bg-[#6843B7]/90 transition-all shadow-[0_0_20px_rgba(104,67,183,0.3)]">
                Explore
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sub-Navbar */}
      <div className="sticky top-20 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-y border-white/10 text-white/70 py-4 px-8 flex justify-center gap-6 sm:gap-10 text-[10px] sm:text-xs font medium tracking-widest uppercase overflow-x-auto whitespace-nowrap shadow-xl">
        <a href="#web-testing" className="hover:text-[#00F2B0] transition-colors">Web</a>
        <a href="#mobile-testing" className="hover:text-[#00F2B0] transition-colors">Mobile</a>
        <a href="#api-testing" className="hover:text-[#00F2B0] transition-colors">API</a>
        <a href="#desktop-testing" className="hover:text-[#00F2B0] transition-colors">Desktop</a>
        <a href="#regression-testing" className="hover:text-[#00F2B0] transition-colors">Regression</a>
        <a href="#performance-testing" className="hover:text-[#00F2B0] transition-colors">Performance</a>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col gap-32">
        
        {/* Section 1: Web Testing */}
        <section id="web-testing" className="scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Testing</span></h2>
          <p className="text-white/60 leading-relaxed text-lg md:text-xl mb-12 max-w-4xl">
            Modern web applications operate across multiple browsers, environments, frameworks, and user workflows, making consistent validation increasingly complex. cliQTest enables comprehensive web testing through intelligent automation, cross-browser execution, real-device validation, and AI-powered automation management.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col h-full">
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  The platform supports automated validation of dynamic UI elements, authentication workflows, business transactions, and end-to-end user journeys while reducing automation maintenance through self-healing capabilities. Teams can execute scalable regression cycles across browsers and environments while monitoring execution results through centralized dashboards and reports.
                </p>
                <p>
                  cliQTest ensures reliable, scalable, and high-performance web application testing for enterprise-grade digital experiences.
                </p>
              </div>
              
              <div className="mt-8 bg-white/5 border border-white/10 rounded-md p-6">
                <h4 className="text-white font medium mb-5 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    'Cross-browser validation',
                    'AI-powered automation stability',
                    'End-to-end workflow automation',
                    'Faster regression execution',
                    'Centralized execution analytics'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="mt-0.5 text-[#00F2B0] font medium">✓</div>
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Professional UI Visual */}
            <div className="bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6843B7] opacity-20 blur-[80px] rounded-md pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00F2B0] opacity-10 blur-[60px] rounded-md pointer-events-none" />
              
              <div className="relative z-10 w-full h-full p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-md bg-red-500/80" />
                    <div className="w-3 h-3 rounded-md bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-md bg-green-500/80" />
                  </div>
                  <div className="text-[#00F2B0] text-[10px] font medium tracking-[0.2em] uppercase border border-[#00F2B0]/30 bg-[#00F2B0]/10 px-3 py-1 rounded-md backdrop-blur-md">
                    EXECUTION MATRIX
                  </div>
                </div>
                
                <div className="flex-1 bg-black/60 rounded-md border border-white/10 overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col">
                  <div className="flex border-b border-white/10 text-xs font-medium text-white/50">
                    <div className="px-4 py-3 border-b-2 border-[#6843B7] text-white bg-white/5 flex items-center gap-2">
                      <span>e2e-checkout.spec.ts</span>
                    </div>
                    <div className="px-4 py-3 flex items-center gap-2 hover:bg-white/5 cursor-pointer">
                      <span>auth.spec.ts</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6 font-mono text-[13px] leading-loose text-white/70 overflow-hidden relative">
                    <div className="text-blue-400">test<span className="text-white">(</span><span className="text-green-400">'Complete Checkout Flow'</span><span className="text-white">, </span><span className="text-[#00F2B0]">async</span><span className="text-white"> (&#123; page &#125;) </span><span className="text-[#6843B7]">=&gt;</span><span className="text-white"> &#123;</span></div>
                    <div className="pl-6"><span className="text-[#00F2B0]">await</span> page.goto(<span className="text-green-400">'/'</span>);</div>
                    <div className="pl-6"><span className="text-[#00F2B0]">await</span> page.getByRole(<span className="text-green-400">'button'</span>, &#123; name: <span className="text-green-400">'Add to Cart'</span> &#125;).click();</div>
                    <div className="pl-6"><span className="text-[#00F2B0]">await</span> expect(page.locator(<span className="text-green-400">'.cart-badge'</span>)).toHaveText(<span className="text-green-400">'1'</span>);</div>
                    <div className="text-white">&#125;);</div>
                    
                    <div className="absolute bottom-6 right-6 flex gap-2">
                      <div className="px-3 py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded text-xs font medium shadow-[0_0_15px_rgba(34,197,94,0.2)]">Chrome: PASSED</div>
                      <div className="px-3 py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded text-xs font medium shadow-[0_0_15px_rgba(34,197,94,0.2)]">Safari: PASSED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Mobile Testing */}
        <section id="mobile-testing" className="scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Testing</span></h2>
          <p className="text-white/60 leading-relaxed text-lg md:text-xl mb-12 max-w-4xl">
            Mobile applications demand seamless experiences across devices, operating systems, screen sizes, and network conditions. cliQTest’s real device lab enables organizations to validate mobile applications on actual Android and iOS devices, ensuring accurate production-level testing.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="order-2 lg:order-1 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,242,176,0.05),transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
                <div className="relative w-64 h-[420px] bg-black border-4 border-zinc-800 rounded-[2.5rem] p-4 shadow-2xl overflow-hidden shadow-[#00F2B0]/10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-xl z-20" />
                  
                  {/* App Screen Simulation */}
                  <div className="w-full h-full bg-zinc-900 rounded-[1.5rem] overflow-hidden flex flex-col pt-8 relative">
                    <div className="px-4 pb-4 border-b border-white/5 flex items-center justify-between">
                      <div className="w-8 h-8 rounded-md bg-zinc-800" />
                      <div className="w-24 h-4 rounded bg-zinc-800" />
                    </div>
                    <div className="flex-1 p-4 space-y-4">
                      <div className="w-full h-32 rounded-md bg-gradient-to-br from-[#6843B7]/40 to-[#00F2B0]/40 animate-pulse" />
                      <div className="w-3/4 h-4 rounded bg-zinc-800" />
                      <div className="w-1/2 h-4 rounded bg-zinc-800" />
                      <div className="w-full h-12 rounded-md bg-[#00F2B0]/20 border border-[#00F2B0]/30 mt-auto flex items-center justify-center text-[#00F2B0] font medium text-xs shadow-[0_0_15px_rgba(0,242,176,0.2)]">
                        Validating OTP...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col h-full">
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  The platform supports OTP automation, biometric validation, CAPTCHA handling, device-level execution, and cross-platform testing while providing real-time logs and execution visibility. Teams can automate onboarding flows, transaction journeys, customer experiences, and critical business workflows across mobile ecosystems.
                </p>
                <p>
                  cliQTest improves mobile application reliability, execution consistency, and customer experience across enterprise mobility platforms.
                </p>
              </div>
              
              <div className="mt-8 bg-white/5 border border-white/10 rounded-md p-6">
                <h4 className="text-white font medium mb-5 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#6843B7] shadow-[0_0_10px_#6843B7]" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    'Real-device testing for accurate validation',
                    'Cross-device and cross-platform execution',
                    'OTP, biometric, and CAPTCHA automation',
                    'Real-time execution logs and insights',
                    'Scalable mobile automation workflows'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="mt-0.5 text-[#6843B7] font medium">✓</div>
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: API Testing */}
        <section id="api-testing" className="scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">API <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#818cf8]">Testing</span></h2>
          <p className="text-white/60 leading-relaxed text-lg md:text-xl mb-12 max-w-4xl">
            Enterprise applications rely heavily on APIs to power integrations, workflows, transactions, and real-time communication across systems. cliQTest enables comprehensive API testing to validate functionality, response accuracy, business logic, and data consistency across interconnected ecosystems.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col h-full">
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  The platform supports automated validation of REST APIs using GET, POST, PUT, and DELETE methods while enabling synchronized UI and API testing workflows. AI-powered SQL query generation, response comparison, and data-driven testing improve backend validation efficiency and reduce manual effort.
                </p>
                <p>
                  cliQTest helps organizations ensure reliable integrations, accurate data exchange, and stable backend performance across modern enterprise architectures.
                </p>
              </div>
              
              <div className="mt-8 bg-white/5 border border-white/10 rounded-md p-6">
                <h4 className="text-white font medium mb-5 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#A855F7] shadow-[0_0_10px_#A855F7]" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    'End-to-end API validation',
                    'Backend data consistency checks',
                    'AI-assisted SQL query generation',
                    'Integrated UI and API testing',
                    'Faster defect identification and debugging'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="mt-0.5 text-[#A855F7] font medium">✓</div>
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1),transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 p-8 w-full">
                <div className="flex gap-4 mb-6">
                  <div className="px-3 py-1 rounded bg-[#A855F7]/20 border border-[#A855F7]/40 text-[#A855F7] text-xs font medium tracking-widest uppercase">REST</div>
                  <div className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white/50 text-xs font medium tracking-widest uppercase">GRAPHQL</div>
                </div>
                
                <div className="bg-black/80 border border-white/10 rounded-md p-6 shadow-2xl backdrop-blur-xl">
                  <div className="flex flex-col gap-4">
                    {/* Mock API Request */}
                    <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font medium">POST</span>
                        <span className="text-white/80 font-mono text-sm">/api/v1/transactions/process</span>
                      </div>
                      <div className="font-mono text-xs text-white/40 pl-4 border-l-2 border-white/10">
                        &#123; "amount": 5000, "currency": "USD" &#125;
                      </div>
                    </div>
                    
                    {/* Mock API Response */}
                    <div className="bg-white/5 border border-[#00F2B0]/30 rounded-lg p-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-2 h-full bg-[#00F2B0]" />
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/60 text-xs uppercase tracking-widest font medium">Response</span>
                        <span className="px-2 py-0.5 rounded bg-[#00F2B0]/20 text-[#00F2B0] text-xs font medium shadow-[0_0_10px_rgba(0,242,176,0.3)]">200 OK</span>
                      </div>
                      <div className="font-mono text-xs text-[#00F2B0] pl-4 border-l-2 border-[#00F2B0]/30">
                        &#123;<br/>
                        &nbsp;&nbsp;"status": "success",<br/>
                        &nbsp;&nbsp;"transaction_id": "TXN-98273",<br/>
                        &nbsp;&nbsp;"timestamp": "2026-06-02T00:23:48Z"<br/>
                        &#125;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Desktop Testing */}
        <section id="desktop-testing" className="scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Desktop <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Testing</span></h2>
          <p className="text-white/60 leading-relaxed text-lg md:text-xl mb-12 max-w-4xl">
            Enterprise desktop applications often involve complex workflows, legacy systems, and environment-specific dependencies that require reliable and scalable validation. cliQTest enables organizations to automate and manage desktop application testing through centralized execution workflows and intelligent automation capabilities.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="order-2 lg:order-1 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center">
                
                {/* Simulated Desktop Window */}
                <div className="w-full max-w-sm bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  
                  {/* Title bar */}
                  <div className="bg-zinc-800 px-3 py-2 flex items-center justify-between border-b border-zinc-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-md bg-red-500" />
                      <div className="w-3 h-3 rounded-md bg-yellow-500" />
                      <div className="w-3 h-3 rounded-md bg-green-500" />
                    </div>
                    <div className="text-zinc-400 text-[10px] font-medium">Enterprise ERP System.exe</div>
                    <div className="w-10" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center text-2xl">📊</div>
                      <div className="space-y-2 flex-1">
                        <div className="w-3/4 h-3 rounded bg-zinc-700" />
                        <div className="w-1/2 h-3 rounded bg-zinc-800" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 relative">
                       {/* Automated Cursor Arrow */}
                       <motion.div 
                         animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
                         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                         className="absolute -top-4 left-4 z-20"
                       >
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.8 6.76 21.36L11.44 17.15L15.44 22.46C15.74 22.86 16.32 22.95 16.73 22.65L18.42 21.38C18.82 21.08 18.91 20.5 18.61 20.1L14.61 14.79H19.72C20.4 14.79 20.76 13.98 20.3 13.48L6.47 2.66C5.97 2.27 5.5 2.63 5.5 3.21Z" fill="white" stroke="black" strokeWidth="1.5"/>
                         </svg>
                       </motion.div>
                       
                      <div className="w-full h-10 rounded bg-[#00F2B0]/20 border border-[#00F2B0]/50 relative overflow-hidden flex items-center px-4">
                        <span className="text-[#00F2B0] text-xs font medium z-10">Validating Native Form...</span>
                        <div className="absolute left-0 top-0 h-full w-full bg-[#00F2B0]/10 animate-pulse" />
                      </div>
                      <div className="w-full h-10 rounded bg-zinc-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col h-full">
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  The platform supports low-code automation, reusable workflows, AI-driven maintenance, and cross-environment execution while ensuring stable validation of desktop-based business processes and critical enterprise operations.
                </p>
                <p>
                  cliQTest helps enterprises modernize legacy testing approaches while improving execution efficiency, reliability, and operational continuity across desktop environments.
                </p>
              </div>
              
              <div className="mt-8 bg-white/5 border border-white/10 rounded-md p-6">
                <h4 className="text-white font medium mb-5 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    'Automated desktop workflow validation',
                    'Low-code test automation',
                    'Reduced maintenance effort',
                    'Centralized reporting and traceability',
                    'Improved execution consistency'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="mt-0.5 text-[#00F2B0] font medium">✓</div>
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Regression Testing */}
        <section id="regression-testing" className="scroll-mt-32">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6843B7] opacity-10 blur-[120px] rounded-md pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00F2B0] opacity-10 blur-[120px] rounded-md pointer-events-none" />
            
            <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Regression <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Testing</span></h2>
              <p className="text-white/60 leading-relaxed text-lg md:text-xl">
                Frequent releases and evolving applications make regression testing critical for maintaining application stability and business continuity. cliQTest enables scalable and intelligent regression testing across web, mobile, desktop, and API ecosystems through centralized orchestration and AI-powered automation.
              </p>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6 text-white/60 leading-relaxed">
                  <p>
                    The platform supports reusable components, parallel execution, cross-browser testing, distributed execution agents, and automated scheduling that significantly reduce regression cycle durations. AI-powered self-healing minimizes failures caused by UI changes, ensuring reliable execution across dynamic applications.
                  </p>
                  <p>
                    cliQTest enables organizations to execute faster and more reliable regression cycles while maintaining release confidence and operational efficiency.
                  </p>
                </div>
                
                <div className="bg-black/50 border border-white/10 rounded-md p-6 backdrop-blur-sm">
                  <h4 className="text-white font medium mb-5 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-md bg-white" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {[
                      'Faster regression execution cycles',
                      'Parallel and distributed execution',
                      'AI-powered automation resilience',
                      'Improved test coverage and reliability',
                      'Continuous validation across releases'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <div className="mt-0.5 text-white font medium">✓</div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-full">
                <div className="bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex flex-col justify-center min-h-[350px] p-8 w-full max-w-md mx-auto shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F2B0]/10 blur-[50px] rounded-md pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="text-white/40 text-xs font medium tracking-[0.2em] uppercase">Test Pipeline</div>
                    <div className="px-3 py-1 bg-[#00F2B0]/10 text-[#00F2B0] border border-[#00F2B0]/30 text-[10px] font medium rounded-md animate-pulse shadow-[0_0_10px_rgba(0,242,176,0.2)]">STABLE</div>
                  </div>
                  
                  <div className="space-y-5 relative z-10">
                    {[
                      { id: 'Regression #4092', time: '2m ago', status: 'Passed', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20', bar: 'w-full bg-green-400' },
                      { id: 'Regression #4091', time: '1h ago', status: 'Passed', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20', bar: 'w-full bg-green-400' },
                      { id: 'Regression #4090', time: '3h ago', status: 'Healed', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20', bar: 'w-[95%] bg-yellow-400' },
                      { id: 'Regression #4089', time: '5h ago', status: 'Passed', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20', bar: 'w-full bg-green-400' },
                    ].map((run, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className={`w-8 h-8 rounded border ${run.bg} ${run.border} flex items-center justify-center ${run.color} transition-colors group-hover:bg-opacity-20`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between text-[11px] mb-1.5">
                            <span className="text-white/80 font-mono">{run.id}</span>
                            <span className="text-white/40">{run.time}</span>
                          </div>
                          <div className="w-full h-1 bg-white/10 rounded-md overflow-hidden">
                            <div className={`h-full ${run.bar} rounded-md`} />
                          </div>
                        </div>
                        <div className={`text-[9px] uppercase font medium tracking-wider ${run.color} w-16 text-right`}>
                          {run.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Performance Testing */}
        <section id="performance-testing" className="scroll-mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#818cf8]">Testing</span></h2>
          <p className="text-white/60 leading-relaxed text-lg md:text-xl mb-12 max-w-4xl">
            High-performing applications are critical for delivering seamless digital experiences and maintaining operational reliability under varying workloads. cliQTest supports scalable performance validation by enabling organizations to monitor execution behavior, application responsiveness, and system reliability across enterprise environments.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col h-full">
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  The platform supports large-scale execution orchestration, data-driven workflows, distributed execution models, and centralized reporting that help organizations identify bottlenecks, performance degradation, and scalability risks before production deployment.
                </p>
                <p>
                  cliQTest enables teams to improve system performance, optimize application behavior, and ensure stable user experiences under demanding business conditions.
                </p>
              </div>
              
              <div className="mt-8 bg-white/5 border border-white/10 rounded-md p-6">
                <h4 className="text-white font medium mb-5 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#A855F7] shadow-[0_0_10px_#A855F7]" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    'Scalable execution and validation',
                    'Centralized performance visibility',
                    'Faster bottleneck identification',
                    'Improved application reliability',
                    'Enhanced release confidence'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <div className="mt-0.5 text-[#A855F7] font medium">✓</div>
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex flex-col justify-end min-h-[400px] p-8">
               <div className="absolute top-6 right-6 text-white/40 text-[10px] font medium tracking-[0.2em] uppercase z-10">Load Simulation Metrics</div>
               <div className="absolute top-6 left-6 z-10">
                 <div className="text-3xl font-black text-white">10,000+</div>
                 <div className="text-xs text-[#00F2B0] font medium uppercase tracking-widest">Virtual Users</div>
               </div>
               
               <div className="flex items-end justify-between gap-3 h-56 w-full mt-auto relative z-10">
                 {[20, 35, 45, 60, 85, 70, 95, 100, 90, 100, 95, 90].map((h, i) => (
                   <div 
                     key={i} 
                     className="w-full bg-gradient-to-t from-[#A855F7]/10 via-[#A855F7]/60 to-[#A855F7] rounded-t-sm opacity-90 hover:opacity-100 transition-all cursor-crosshair group relative shadow-[0_0_15px_rgba(168,85,247,0.3)]" 
                     style={{ height: `${h}%` }}
                   >
                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                       {h * 100} TPS
                     </div>
                   </div>
                 ))}
               </div>
               <div className="w-full border-t-2 border-red-500/50 mt-4 relative z-10 border-dashed">
                 <div className="absolute left-2 -top-6 text-red-400 text-[10px] font medium tracking-widest uppercase bg-black/80 px-2 py-0.5 rounded">SLA Threshold</div>
               </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <section className="py-24 px-8 mt-12">
        <div className="max-w-4xl mx-auto text-left sm:text-center bg-white/5 border border-white/10 rounded-md p-8 sm:p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">Ready to Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Your Quality?</span></h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Join enterprise engineering teams who trust cliQTest to automate their most complex and business-critical testing workflows.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-4">
            <Link href="/book-a-demo" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 bg-[#6843B7] text-white font medium rounded-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(104,67,183,0.4)] text-[13px] sm:text-base whitespace-nowrap">
              Contact Sales
            </Link>
            <Link href="/pricing" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 border border-white/20 text-white font medium rounded-sm hover:bg-white/5 transition-colors text-[13px] sm:text-base whitespace-nowrap">
              View Plans
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
