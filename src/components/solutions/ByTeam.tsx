"use client";
import { useEffect } from 'react';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Code2, GitBranch, LineChart, Building2 } from 'lucide-react';
import CustomerMarquee from '@/components/common/CustomerMarquee';

const features = [
  {
    id: "qa-teams",
    title: "QA Teams: Clinical Precision & Controlled Mastery",
    desc: "Modern QA teams are under constant pressure to accelerate releases while maintaining high quality across increasingly complex digital ecosystems. cliQTest empowers QA teams with a unified quality engineering platform that centralizes manual testing, automation, reporting, and execution management into a single ecosystem.\n\nThe platform simplifies test design, execution, traceability, and reporting through intuitive workflows and AI-assisted capabilities. QA teams can create structured test cases, organize suites, manage environments, monitor execution outcomes, and analyze quality metrics without relying on fragmented tools or disconnected workflows.",
    benefits: [
      'Centralized test management and automation',
      'Reduced manual effort and faster execution',
      'End-to-end traceability across releases',
      'Improved collaboration across QA, Dev, and Ops',
      'Real-time visibility into testing metrics'
    ],
    theme: "purple",
    icon: ShieldCheck
  },
  {
    id: "automation-engineers",
    title: "Automation Engineers: Unrestricted & Low-Code Flexibility",
    desc: "Automation engineers require scalable, maintainable, and resilient automation frameworks capable of handling dynamic enterprise applications and complex workflows. cliQTest provides a powerful low-code/no-code automation ecosystem designed to simplify script creation, optimize execution, and reduce maintenance overhead.\n\nThe platform supports intelligent recorder-based automation, reusable components, AI-driven self-healing, MCP-based automation, and Agentic AI workflows that significantly accelerate automation development. Engineers can automate web, mobile, desktop, and API applications while leveraging centralized repositories.",
    benefits: [
      'Faster development with low-code workflows',
      'AI-powered self-healing automation',
      'Reusable modular automation architecture',
      'Distributed and parallel execution support',
      'Cross-platform automation capabilities'
    ],
    theme: "teal",
    icon: Code2
  },
  {
    id: "devops-teams",
    title: "DevOps Teams: Pipeline Integrity & Orchestration",
    desc: "Continuous delivery demands faster feedback cycles, reliable automation, and seamless integration across development and deployment pipelines. cliQTest enables DevOps teams to integrate testing directly into CI/CD workflows, ensuring continuous validation throughout the software delivery lifecycle.\n\nThe platform supports automated execution triggers, distributed execution agents, hybrid deployments, real-time reporting, and scalable automation orchestration. Prevent defective builds from progressing into production with our AI-powered analytics and intelligent reporting.",
    benefits: [
      'Seamless CI/CD integration',
      'Faster build validation and feedback loops',
      'Scalable distributed execution architecture',
      'Hybrid cloud and on-premise testing support',
      'Improved deployment confidence and stability'
    ],
    tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'AWS CodePipeline'],
    theme: "purple",
    icon: GitBranch
  },
  {
    id: "product-teams",
    title: "Product Teams: Business Intelligence & Release Readiness",
    desc: "Product teams require real-time visibility into release quality, testing progress, and business risk before delivering applications to customers. cliQTest provides centralized quality insights that help product teams align testing strategies with business objectives and release priorities.\n\nThe platform delivers dashboards, quality metrics, trend analysis, execution insights, and AI-powered reporting that enable product managers to make informed release decisions. With complete traceability across requirements, test cases, and defects, you gain confidence in product readiness.",
    benefits: [
      'Real-time release readiness visibility',
      'Business-aligned quality insights',
      'Improved risk assessment and prioritization',
      'Centralized reporting and analytics',
      'Faster and smarter release decisions'
    ],
    theme: "teal",
    icon: LineChart
  },
  {
    id: "enterprises",
    title: "Enterprises: Global Governance & Scale",
    desc: "Large enterprises operate across complex application ecosystems, distributed teams, multiple environments, and evolving compliance requirements. cliQTest provides an enterprise-grade quality engineering platform built to support scalability, governance, security, and operational efficiency.\n\nThe platform centralizes test management, automation, execution orchestration, and reporting within a unified ecosystem. With robust Role-based access control (RBAC), SSO, audit traceability, and AI-powered automation, we ensure enterprise-wide governance and consistency.",
    benefits: [
      'Enterprise-grade scalability and governance',
      'Centralized quality management across teams',
      'Hybrid deployment flexibility',
      'AI-driven automation and analytics',
      'Improved operational efficiency and velocity'
    ],
    theme: "purple",
    icon: Building2
  }
];

export default function ByTeam() {
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
    <div className="bg-[#090A0A] text-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen bg-[#060411] flex flex-col justify-center border-b border-white/5 overflow-hidden">
        {/* Background Image/Gradient */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Image 
            src="/images/sol-by-team.png" 
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
              Precision Quality Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Every Team</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
              Our robust platforms and tools align perfectly with your team dynamics, providing dedicated workspaces, customized analytics, and workflows tailored for individual roles and broad enterprise structures alike.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#qa-teams" className="inline-flex items-center gap-2 px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:bg-[#6843B7]/90 transition-all">
                Explore
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

     

      {/* 2. Main Content - Sticky Bento Layout */}
      <div className="bg-[#050505] text-white py-20 flex flex-col gap-8">
        {/* Header Section */}
        <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
            Solutions By <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Team</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
            Discover how cliQTest adapts to the unique needs and workflows of every quality-driven role across your organization.
          </p>
        </div>

        {features.map((feat, idx) => {
          const parts = feat.title.split(': ');
          const firstWord = parts[0] + (parts.length > 1 ? ':' : '');
          const restWords = parts.length > 1 ? parts[1] : '';
          
          const isPurple = feat.theme === 'purple';
          const accentColor = isPurple ? "#6843B7" : "#00F2B0";
          const gradientClass = isPurple 
            ? "from-[#6843B7] to-[#ffffff]" 
            : "from-[#00F2B0] to-[#ffffff]";
          
          const Icon = feat.icon;
          const paragraphs = feat.desc.split('\n\n');

          return (
            <div key={feat.id} id={feat.id} className="scroll-mt-32">
              <section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
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
                    
                    {/* Metrics / Tools Card */}
                    <motion.div 
                      className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-md ${isPurple ? 'bg-[#6843B7] shadow-[0_0_10px_#6843B7]' : 'bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]'}`} />
                        Key Capabilities
                      </h4>
                      <div className="space-y-4">
                        {feat.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                            <span className={`shrink-0 mt-0.5 ${isPurple ? 'text-[#6843B7]' : 'text-[#00F2B0]'}`}>✓</span>
                            <span className="leading-snug">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {feat.tools && (
                        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                          {feat.tools.map((tool) => (
                            <div key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm text-[11px] font-medium text-white/80">
                              {tool}
                            </div>
                          ))}
                        </div>
                      )}
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
                    
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8 tracking-tight relative z-10">
                      {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                    </h3>
                    
                    <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed max-w-3xl relative z-10">
                      {paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </motion.div>

                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>

      {/* 3. CTA Section */}
      <section className="py-24 px-8 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-left sm:text-center bg-white/5 border border-white/10 rounded-md p-8 sm:p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Enterprise-Grade Quality?</span></h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Contact us to see how cliQTest can seamlessly integrate into your team's workflow and scale your testing infrastructure.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-4">
            <Link href="/book-a-demo" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:scale-105 active:scale-95 transition-all ] text-[13px] sm:text-base whitespace-nowrap">
              Book a Demo
            </Link>
            {/* <Link href="/pricing" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors text-[13px] sm:text-base whitespace-nowrap">
              View Pricing
            </Link> */}
          </div>
        </div>
      </section>
      
    </div>
  );
}
