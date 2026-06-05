"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const sections = [
  { id: 'qa-teams', label: 'QA Teams' },
  { id: 'automation-engineers', label: 'Automation Engineers' },
  { id: 'devops-teams', label: 'DevOps Teams' },
  { id: 'product-teams', label: 'Product Teams' },
  { id: 'enterprises', label: 'Enterprises' },
];

export default function ByTeam() {
  const [activeSection, setActiveSection] = useState('qa-teams');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '30%']);

  // Handle intersection observer to update active sidebar link
  useEffect(() => {
    const observers = new Map();
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px', // Trigger when section hits upper half of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#050505] text-white min-">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-24 min-h-[60vh] flex flex-col justify-center border-b border-white/5 overflow-hidden">
        {/* Background Image/Gradient */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Image 
            src="/images/solution-by-team-hero.png" 
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
              Precision Quality Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Every Team Tier</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
              Our robust platforms and tools align perfectly with your team dynamics, providing dedicated workspaces, customized analytics, and workflows tailored for individual roles and broad enterprise structures alike.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#qa-teams" className="inline-flex items-center gap-2 px-8 py-3 bg-[#6843B7] text-white font medium rounded-sm hover:bg-[#6843B7]/90 transition-all shadow-[0_0_20px_rgba(104,67,183,0.3)]">
                Explore
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Layout: Sticky Sidebar + Scrolling Content */}
      <section className="relative max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Sticky Sidebar */}
        <div className="hidden lg:block w-[280px] shrink-0">
          <div className="sticky top-32 flex flex-col gap-2 border-l border-white/10 pl-6">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left px-4 py-3 rounded-md transition-all font-medium text-[15px] ${
                  activeSection === id 
                    ? 'bg-white/10 text-white font medium' 
                    : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex-1 flex flex-col gap-32">
          
          {/* QA Teams Section */}
          <div id="qa-teams" className="scroll-mt-32">
            {/* <div className="inline-block px-3 py-1 rounded bg-[#6843B7]/20 text-[#6843B7] text-xs font medium tracking-widest uppercase mb-6 border border-[#6843B7]/30">
              For Quality Assurance
            </div> */}
            <h2 className="text-3xl md:text-4xl font medium mb-6">QA Teams: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Clinical Precision & Controlled Mastery</span></h2>
            
            <p className="text-white/60 leading-relaxed text-lg mb-10">
              Modern QA teams are under constant pressure to accelerate releases while maintaining high quality across increasingly complex digital ecosystems. cliQTest empowers QA teams with a unified quality engineering platform that centralizes manual testing, automation, reporting, and execution management into a single ecosystem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col h-full">
                <p className="text-white/60 leading-relaxed mb-10">
                  The platform simplifies test design, execution, traceability, and reporting through intuitive workflows and AI-assisted capabilities. QA teams can create structured test cases, organize suites, manage environments, monitor execution outcomes, and analyze quality metrics without relying on fragmented tools or disconnected workflows.
                </p>
                
                <div className="mt-8">
                  <h4 className="text-white font medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6843B7]" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Centralized test management and automation',
                      'Reduced manual effort and faster execution',
                      'End-to-end traceability across releases',
                      'Improved collaboration across QA, Dev, and Ops',
                      'Real-time visibility into testing metrics'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <div className="mt-0.5 text-[#00F2B0]">✓</div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column: Visual Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 relative overflow-hidden h-full min-h-[350px] flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent" />
                  <div className="flex justify-between items-center mb-8">
                    <h5 className="text-white/80 font medium text-sm">Test Execution</h5>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-white/60">This Week</span>
                  </div>
                  
                  <div className="flex-1 flex items-end justify-between gap-2 px-4 pb-4">
                    {[40, 60, 45, 80, 55, 90, 65].map((h, i) => (
                      <div key={i} className="w-full bg-[#00F2B0]/20 rounded-t-sm relative group cursor-pointer transition-all hover:bg-[#00F2B0]/40" style={{ height: `${h}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {h * 12} Runs
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-white/10 pt-4 flex justify-between text-xs text-white/40">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>

          {/* Automation Engineers Section */}
          <div id="automation-engineers" className="scroll-mt-32">
            {/* <div className="inline-block px-3 py-1 rounded bg-[#6843B7]/20 text-[#6843B7] text-xs font medium tracking-widest uppercase mb-6 border border-[#6843B7]/30">
              For Automation
            </div> */}
            <h2 className="text-3xl md:text-4xl font medium mb-6">Automation Engineers: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Unrestricted & Low-Code Flexibility</span></h2>
            <p className="text-white/60 leading-relaxed text-lg mb-10">
              Automation engineers require scalable, maintainable, and resilient automation frameworks capable of handling dynamic enterprise applications and complex workflows. cliQTest provides a powerful low-code/no-code automation ecosystem designed to simplify script creation, optimize execution, and reduce maintenance overhead.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col h-full">
                <p className="text-white/60 leading-relaxed mb-10">
                  The platform supports intelligent recorder-based automation, reusable components, AI-driven self-healing, MCP-based automation, and Agentic AI workflows that significantly accelerate automation development. Engineers can automate web, mobile, desktop, and API applications while leveraging centralized repositories.
                </p>
                
                <div className="mt-auto mb-8">
                  <h4 className="text-white font medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F2B0]" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Faster development with low-code workflows',
                      'AI-powered self-healing automation',
                      'Reusable modular automation architecture',
                      'Distributed and parallel execution support',
                      'Cross-platform automation capabilities'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <div className="mt-0.5 text-[#6843B7]">✓</div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href="/nocode" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font medium rounded-sm hover:bg-white/90 transition-colors text-sm w-fit mt-auto">
                  Explore Test Automation →
                </Link>
              </div>

              {/* Visual Card on RHS */}
              <div className="bg-black border border-white/10 rounded-xl overflow-hidden h-full min-h-[350px] relative">
                <div className="absolute inset-0 bg-[#0A0A0A] p-6 flex flex-col justify-center">
                  <div className="w-full bg-black border border-white/10 rounded-md p-4 mb-6 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                      <div className="w-3 h-3 rounded-sm bg-red-500/50" />
                      <div className="w-3 h-3 rounded-sm bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-sm bg-green-500/50" />
                      <span className="text-white/30 text-xs ml-2 font-mono">IDE.tsx</span>
                    </div>
                    <div className="font-mono text-xs text-[#00F2B0] mb-2">{`// Wait for element to be visible`}</div>
                    <div className="font-mono text-xs text-white/70 mb-2">{`await cliQTest.locator('#submit-btn').waitFor();`}</div>
                    <div className="font-mono text-xs text-[#00F2B0] mb-2">{`// Assert button state`}</div>
                    <div className="font-mono text-xs text-white/70">{`expect(await btn.isEnabled()).toBeTruthy();`}</div>
                  </div>
                  
                  <ul className="space-y-3">
                    {['Zero Setup Required', 'Self-Healing Locators', 'Parallel Execution Grid'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                        <div className="w-4 h-4 rounded-sm bg-[#6843B7]/20 flex items-center justify-center text-[#6843B7]">✓</div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps Teams Section */}
          <div id="devops-teams" className="scroll-mt-32">
            {/* <div className="inline-block px-3 py-1 rounded bg-[#6843B7]/20 text-[#6843B7] text-xs font medium tracking-widest uppercase mb-6 border border-[#6843B7]/30">
              For Pipeline Integration
            </div> */}
            <h2 className="text-3xl md:text-4xl font medium mb-6">DevOps Teams: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#818cf8]">Pipeline Integrity & Orchestration</span></h2>
            <p className="text-white/60 leading-relaxed text-lg mb-10">
              Continuous delivery demands faster feedback cycles, reliable automation, and seamless integration across development and deployment pipelines. cliQTest enables DevOps teams to integrate testing directly into CI/CD workflows, ensuring continuous validation throughout the software delivery lifecycle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col h-full">
                <p className="text-white/60 leading-relaxed mb-10">
                  The platform supports automated execution triggers, distributed execution agents, hybrid deployments, real-time reporting, and scalable automation orchestration. Prevent defective builds from progressing into production with our AI-powered analytics and intelligent reporting.
                </p>
                
                <div className="mt-auto mb-8">
                  <h4 className="text-white font medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Seamless CI/CD integration',
                      'Faster build validation and feedback loops',
                      'Scalable distributed execution architecture',
                      'Hybrid cloud and on-premise testing support',
                      'Improved deployment confidence and stability'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <div className="mt-0.5 text-[#00F2B0]">✓</div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'AWS CodePipeline'].map((tool) => (
                    <div key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[11px] font-medium text-white/80">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column: Visual Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 relative overflow-hidden flex flex-col justify-center gap-6 h-full min-h-[350px]">
                <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-green-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-sm bg-green-500 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font medium">Pipeline Stable</h4>
                      <p className="text-white/40 text-[11px]">Last run: 2 mins ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00F2B0] font medium">99.8%</div>
                    <div className="text-white/40 text-[10px] uppercase">Pass Rate</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black rounded-lg border border-white/5">
                    <div className="text-white/40 text-[11px] mb-1">Avg. Duration</div>
                    <div className="text-white font-mono">12m 45s</div>
                  </div>
                  <div className="p-4 bg-black rounded-lg border border-white/5">
                    <div className="text-white/40 text-[11px] mb-1">Total Builds</div>
                    <div className="text-white font-mono">1,234</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Teams Section */}
          <div id="product-teams" className="scroll-mt-32">
            {/* <div className="inline-block px-3 py-1 rounded bg-[#6843B7]/20 text-[#6843B7] text-xs font medium tracking-widest uppercase mb-6 border border-[#6843B7]/30">
              For Leadership
            </div> */}
            <h2 className="text-3xl md:text-4xl font medium mb-6">Product Teams: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Business Intelligence & Release Readiness</span></h2>
            
            <p className="text-white/60 leading-relaxed text-lg mb-10">
              Product teams require real-time visibility into release quality, testing progress, and business risk before delivering applications to customers. cliQTest provides centralized quality insights that help product teams align testing strategies with business objectives and release priorities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col h-full">
                <p className="text-white/60 leading-relaxed mb-10">
                  The platform delivers dashboards, quality metrics, trend analysis, execution insights, and AI-powered reporting that enable product managers to make informed release decisions. With complete traceability across requirements, test cases, and defects, you gain confidence in product readiness.
                </p>
                
                <div className="mt-auto mb-8">
                  <h4 className="text-white font medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6843B7]" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Real-time release readiness visibility',
                      'Business-aligned quality insights',
                      'Improved risk assessment and prioritization',
                      'Centralized reporting and analytics',
                      'Faster and smarter release decisions'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <div className="mt-0.5 text-[#00F2B0]">✓</div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Card on RHS */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 relative flex flex-col items-center justify-center h-full min-h-[350px]">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#ffffff10" strokeWidth="12" />
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#00F2B0" strokeWidth="12" strokeDasharray="502" strokeDashoffset="40" strokeLinecap="round" />
                  </svg>
                  <div className="text-center">
                    <div className="text-5xl font-black text-white tracking-tighter">92</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Readiness</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 w-full mt-10 border-t border-white/10 pt-6">
                  <div className="text-center">
                    <div className="text-white font medium text-lg mb-1">45k</div>
                    <div className="text-white/40 text-[10px] uppercase">Test Runs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font medium text-lg mb-1">12</div>
                    <div className="text-white/40 text-[10px] uppercase">Open Bugs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#00F2B0] font medium text-lg mb-1">98%</div>
                    <div className="text-white/40 text-[10px] uppercase">Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprises Section */}
          <div id="enterprises" className="scroll-mt-32">
            {/* <div className="inline-block px-3 py-1 rounded bg-[#6843B7]/20 text-[#6843B7] text-xs font medium tracking-widest uppercase mb-6 border border-[#6843B7]/30">
              For Scale
            </div> */}
            <h2 className="text-3xl md:text-4xl font medium mb-6">Enterprises: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Global Governance & Scale</span></h2>
            <p className="text-white/60 leading-relaxed text-lg mb-10">
              Large enterprises operate across complex application ecosystems, distributed teams, multiple environments, and evolving compliance requirements. cliQTest provides an enterprise-grade quality engineering platform built to support scalability, governance, security, and operational efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col h-full">
                <p className="text-white/60 leading-relaxed mb-10">
                  The platform centralizes test management, automation, execution orchestration, and reporting within a unified ecosystem. With robust Role-based access control (RBAC), SSO, audit traceability, and AI-powered automation, we ensure enterprise-wide governance and consistency.
                </p>
                
                <div className="mt-auto mb-8">
                  <h4 className="text-white font medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F2B0]" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Enterprise-grade scalability and governance',
                      'Centralized quality management across teams',
                      'Hybrid deployment flexibility',
                      'AI-driven automation and analytics',
                      'Improved operational efficiency and velocity'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                        <div className="mt-0.5 text-[#6843B7]">✓</div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column: Visual Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl relative overflow-hidden flex flex-col justify-center h-full min-h-[350px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6843B7] opacity-20 blur-[60px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00F2B0] opacity-10 blur-[60px] rounded-full" />
                
                <div className="relative z-10 grid grid-cols-2 gap-4 px-8 py-8 mt-auto mb-auto">
                  {[
                    { icon: '🔒', label: 'SSO Ready' },
                    { icon: '🛡️', label: 'SOC2 Compliant' },
                    { icon: '🌍', label: 'Global Grid' },
                    { icon: '👥', label: 'RBAC Controls' }
                  ].map((feature, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors cursor-default">
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <div className="text-white/80 font medium text-[11px] uppercase tracking-wider">{feature.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-left sm:text-center bg-white/5 border border-white/10 rounded-md p-8 sm:p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Enterprise-Grade Quality?</span></h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Contact us to see how cliQTest can seamlessly integrate into your team&apos;s workflow and scale your testing infrastructure.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-4">
            <Link href="/book-a-demo" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 bg-[#6843B7] text-white font medium rounded-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(104,67,183,0.4)] text-[13px] sm:text-base whitespace-nowrap">
              Book a Demo
            </Link>
            <Link href="/pricing" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 border border-white/20 text-white font medium rounded-sm hover:bg-white/5 transition-colors text-[13px] sm:text-base whitespace-nowrap">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
