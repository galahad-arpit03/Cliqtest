"use client";
import { useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Cpu, ArrowRight, Activity, Building, Lock, Briefcase, Zap, Globe, Target, CheckCircle2, Cloud, Database } from 'lucide-react';
import { useLandingModeStore } from '@/store/themeStore';

export default function PartnersContent() {
  const { landingThemeMode } = useLandingModeStore();
  const isLight = landingThemeMode === 'light';

  // Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  const coreCapabilities = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      desc: "Developing intelligent solutions that enhance automation, decision-making, predictive analytics, and business efficiency. We empower your operations with models that learn and adapt. By integrating state-of-the-art machine learning algorithms and generative AI frameworks, we transform complex data landscapes into actionable cognitive insights, driving exponential growth and uncovering hidden operational bottlenecks.",
      bullets: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing (NLP)",
        "Automated Decision Systems",
        "Machine Learning Integration"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      desc: "Providing comprehensive security strategies, threat management, risk assessment, and digital trust solutions for modern enterprises to ensure continuous protection against evolving threats. Our security operations center (SOC) integration and zero-trust implementation safeguard your critical infrastructure, intellectual property, and customer data from sophisticated cyber attacks.",
      bullets: [
        "Vulnerability Assessments",
        "Zero-Trust Architecture",
        "Proactive Threat Intelligence",
        "Data Protection & Compliance"
      ]
    },
    {
      icon: Activity,
      title: "Digital Transformation",
      desc: "Helping organizations modernize legacy systems, optimize processes, and accelerate innovation through seamless technology adoption and agile operational frameworks. We map out end-to-end digital journeys that align IT infrastructure with strategic business objectives, ensuring minimal disruption while maximizing long-term ROI and competitive advantage.",
      bullets: [
        "Legacy System Modernization",
        "Cloud Migration Strategy",
        "Workflow Automation",
        "Digital Ecosystem Architecture"
      ]
    },
    {
      icon: Building,
      title: "FinTech Solutions",
      desc: "Building secure, scalable, and innovative technology solutions for financial institutions and digital banking ecosystems, ensuring high availability and seamless transactions. We specialize in developing robust payment gateways, automated regulatory reporting tools, and blockchain integrations that meet stringent financial sector compliance requirements.",
      bullets: [
        "Digital Banking Platforms",
        "Secure Payment Gateways",
        "Blockchain & Smart Contracts",
        "Fraud Detection Algorithms"
      ]
    },
    {
      icon: Lock,
      title: "Governance & Compliance",
      desc: "Supporting organizations with regulatory compliance, governance frameworks, risk management, and operational controls to navigate complex global standards securely. We automate compliance tracking and continuous audit readiness, mitigating legal risks across diverse jurisdictions and industry-specific mandates such as GDPR, HIPAA, and SOC2.",
      bullets: [
        "Regulatory Audit Automation",
        "Policy Lifecycle Management",
        "IT Risk Assessment",
        "Data Privacy Governance"
      ]
    },
    {
      icon: Briefcase,
      title: "Technology Consulting",
      desc: "Delivering strategic guidance, technology roadmaps, architecture consulting, and enterprise modernization initiatives to align IT investments with overarching business goals. Our seasoned architects act as an extension of your leadership team, providing objective assessments and scalable blueprints for future-proof technology stacks.",
      bullets: [
        "IT Strategy & Roadmapping",
        "Enterprise Architecture Design",
        "Technology Stack Optimization",
        "Vendor & Platform Assessment"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Engineering & DevSecOps",
      desc: "Building highly resilient, scalable, and secure cloud infrastructures. We integrate continuous deployment with advanced security protocols to streamline your development lifecycle. By shifting security left and automating provisioning, we drastically reduce time-to-market while ensuring robust, high-availability deployments across multi-cloud environments.",
      bullets: [
        "Cloud Infrastructure Setup",
        "CI/CD Pipeline Automation",
        "Microservices Architecture",
        "Secure Containerization"
      ]
    },
    {
      icon: Database,
      title: "Data Engineering & BI",
      desc: "Transforming raw data into actionable intelligence. We architect robust data pipelines and business intelligence dashboards to drive informed, data-backed strategic decisions. From unstructured data lakes to high-performance real-time analytics engines, we ensure your organization has immediate access to critical business metrics.",
      bullets: [
        "Big Data Architecture",
        "Real-time Analytics",
        "Data Warehousing",
        "Business Intelligence Dashboards"
      ]
    }
  ];

  const partnershipValues = [
    {
      icon: Zap,
      title: "Innovation-Driven Solutions",
      desc: "Combining expertise in emerging technologies, AI, and enterprise engineering to create impactful business outcomes."
    },
    {
      icon: Shield,
      title: "Security-First Approach",
      desc: "Integrating cybersecurity best practices into every stage of digital transformation and technology implementation."
    },
    {
      icon: Target,
      title: "Enterprise Scalability",
      desc: "Designing robust, future-ready solutions that support business growth and evolving operational requirements."
    },
    {
      icon: Globe,
      title: "Cross-Industry Expertise",
      desc: "Leveraging experience across technology, financial services, enterprise operations, and digital innovation initiatives."
    }
  ];

  const highlights = [
    "AI-Powered Enterprise Solutions",
    "Cybersecurity & Risk Management",
    "Digital Transformation Programs",
    "Technology Strategy & Consulting",
    "Governance & Compliance Enablement",
    "Emerging Technology Adoption",
    "Enterprise Modernization Initiatives",
    "Secure Digital Innovation Frameworks"
  ];

  return (
    <div className="relative transition-colors duration-500 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative w-full">
      
      {/* Dynamic Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 z-0">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-[10%] left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-6"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-[40%] right-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform rotate-12"
        />
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-[70%] left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform rotate-6"
        />
      </div>

      {/* Intro Header & Logo Section */}
      <section className="mb-24 mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border border-zinc-200 rounded-md p-8 lg:p-12 relative overflow-hidden transition-all duration-500 bg-app-surface border-app-border`}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none" />

          <div className="lg:w-3/4 flex flex-col gap-6 relative z-10 text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight transition-colors duration-500 text-app-fg">
              About YesPanchi
            </h2>
            <p className="text-lg leading-relaxed font-light transition-colors duration-500 text-app-fg/80">
              YesPanchi Tech Services Pvt. Ltd. is a technology consulting and cybersecurity company focused on enabling <span className={`font-medium text-transparent bg-clip-text bg-gradient-to-r ${isLight ? 'from-[#6843B7] to-[#121B31]' : 'from-[#6843B7] to-white'}`}>digital innovation</span> through advanced technologies and strategic advisory services. With expertise spanning Artificial Intelligence, Cybersecurity, FinTech, Governance, Compliance, and Enterprise Transformation, YesPanchi helps organizations navigate complex digital challenges while maintaining security, resilience, and operational excellence.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-start lg:justify-end items-center relative z-10">
            <div className="relative w-full max-w-[280px] aspect-square bg-white rounded-md shadow-lg flex items-center justify-center p-8 border border-zinc-200">
              <Image 
                src="/logos/yespanchi-logo.jpg" 
                alt="YesPanchi Logo" 
                fill 
                className="object-contain p-6 mix-blend-multiply"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Capabilities Sticky Stack */}
      <section className="mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${isLight ? 'from-[#6843B7] to-[#121B31]' : 'from-[#6843B7] to-white'} bg-clip-text text-transparent`}>Core Capabilities</h2>
          <p className="text-lg transition-colors duration-500 text-app-fg/60">Driving enterprise success across critical technological domains.</p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12 relative pb-16">
          {coreCapabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24 md:top-32 w-full bg-app-bg border-app-border rounded-md shadow-[0_-5px_15px_rgba(0,0,0,0.02)] [.theme-dark_&]:shadow-[0_-5px_15px_rgba(0,0,0,0.15)] p-4 lg:p-6"
              style={{ zIndex: 10 + i }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
                
                {/* Paragraph Card */}
                <div className={`lg:col-span-7 bg-app-surface border border-app-border rounded-md p-6 md:p-8 relative overflow-hidden group flex flex-col justify-center order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" />
                  <div className="absolute top-0 inset-x-0 h-px opacity-50 bg-gradient-to-r from-transparent via-[#6843B7] to-transparent" />
                  
                  <div className="relative z-10">
                    <h4 className={`text-3xl font-bold mb-4 leading-tight tracking-tight bg-gradient-to-r ${isLight ? 'from-[#6843B7] to-[#121B31]' : 'from-[#6843B7] to-white'} bg-clip-text text-transparent`}>{cap.title}</h4>
                    <p className="text-[15px] md:text-base leading-relaxed transition-colors duration-500 text-app-fg/70 max-w-2xl">
                      {cap.desc}
                    </p>
                  </div>
                </div>

                {/* Bullet Points Card */}
                <div className={`lg:col-span-5 bg-app-surface border border-app-border rounded-md p-6 md:p-8 relative overflow-hidden order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none" />
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEwIDBWMjBNMCAxMEgyMCIgc3Ryb2tlPSIjNjg0M0I3IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] bg-[length:20px_20px]" />
                  
                  <div className="relative z-10">
                    <h5 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">
                      Key Highlights
                    </h5>
                    <ul className="space-y-4">
                      {cap.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 bg-[#6843B7]/10 mt-0.5`}>
                            <CheckCircle2 size={12} className="text-[#6843B7]" />
                          </div>
                          <span className="font-medium text-[14px] transition-colors duration-500 text-app-fg/80">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>
      </div>

      {/* Partnership Value & Highlights (Forced Dark Theme) */}
      <section className="theme-dark w-full bg-app-bg text-app-fg py-16 md:py-24 relative z-10 border-t border-app-border mt-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6843B7] to-white bg-clip-text text-transparent tracking-tight">
            Partnership Value
          </h2>
          <p className="text-[16px] md:text-lg transition-colors duration-500 text-app-fg/60 leading-relaxed">
            Delivering exceptional results by combining deep domain knowledge with cutting-edge engineering.
          </p>
        </div>

        {/* Bento Grid for Partnership Values & Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {partnershipValues.map((val, i) => {
            // Asymmetrical Bento Layout: 
            // Item 0: wide, Item 1: square, Item 2: square, Item 3: wide
            const isWide = i === 0 || i === 3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-app-surface border border-app-border rounded-md p-6 md:p-8 relative overflow-hidden group hover:border-[#6843B7]/40 transition-all duration-500 shadow-sm hover:shadow-md ${isWide ? 'md:col-span-2' : 'md:col-span-1'} flex flex-col justify-center`}
              >

                <div className="relative z-10">
                  <h4 className={`font-bold mb-3 ${isWide ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} bg-gradient-to-r from-[#6843B7] to-white bg-clip-text text-transparent`}>{val.title}</h4>
                  <p className="text-[14px] md:text-[15px] leading-relaxed transition-colors duration-500 text-app-fg/70">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Highlights Pills - Full Width Bottom Bento Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 w-full bg-app-surface border border-app-border rounded-md p-6 md:p-8 relative overflow-hidden text-center flex flex-col items-center shadow-sm hover:border-[#6843B7]/40 transition-colors duration-500"
          >
             <div className="absolute top-0 inset-x-0 h-px opacity-40 bg-gradient-to-r from-transparent via-[#6843B7] to-transparent" />
             
             <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb] relative z-10">
               Strategic Focus Areas
             </h3>
             
             <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto relative z-10">
               {highlights.map((highlight, i) => (
                 <div 
                   key={i} 
                   className="flex items-center gap-2 px-4 py-2 rounded-full border border-app-border bg-app-bg text-[13px] font-medium text-app-fg/80 hover:border-[#6843B7]/40 hover:text-app-fg hover:bg-[#6843B7]/5 transition-all duration-300 shadow-sm cursor-default"
                 >
                   <CheckCircle2 size={14} className="text-[#6843B7]" />
                   {highlight}
                 </div>
               ))}
             </div>
          </motion.div>
        </div>
        </div>
      </section>

    </div>
  );
}
