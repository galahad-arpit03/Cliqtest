'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Globe, Smartphone, Network, Monitor, RefreshCw, Activity, Brain } from 'lucide-react';

const features = [
  {
    id: 'web-testing',
    title: 'Web Testing',
    desc: [
      "Modern web applications operate across multiple browsers, environments, frameworks, and user workflows, making consistent validation increasingly complex. cliQTest enables comprehensive web testing through intelligent automation, cross-browser execution, real-device validation, and AI-powered automation management.",
      "The platform supports automated validation of dynamic UI elements, authentication workflows, business transactions, and end-to-end user journeys while reducing automation maintenance through self-healing capabilities. Teams can execute scalable regression cycles across browsers and environments while monitoring execution results through centralized dashboards and reports.",
      "cliQTest ensures reliable, scalable, and high-performance web application testing for enterprise-grade digital experiences."
    ],
    benefits: [
      'Cross-browser validation',
      'AI-powered automation stability',
      'End-to-end workflow automation',
      'Faster regression execution',
      'Centralized execution analytics'
    ],
    theme: 'purple',
    icon: Globe
  },
  {
    id: 'mobile-testing',
    title: 'Mobile Testing',
    desc: [
      "Mobile applications demand seamless experiences across devices, operating systems, screen sizes, and network conditions. cliQTest’s real device lab enables organizations to validate mobile applications on actual Android and iOS devices, ensuring accurate production-level testing.",
      "The platform supports OTP automation, biometric validation, CAPTCHA handling, device-level execution, and cross-platform testing while providing real-time logs and execution visibility. Teams can automate onboarding flows, transaction journeys, customer experiences, and critical business workflows across mobile ecosystems.",
      "cliQTest improves mobile application reliability, execution consistency, and customer experience across enterprise mobility platforms."
    ],
    benefits: [
      'Real-device testing for accurate validation',
      'Cross-device and cross-platform execution',
      'OTP, biometric, and CAPTCHA automation',
      'Real-time execution logs and insights',
      'Scalable mobile automation workflows'
    ],
    theme: 'teal',
    icon: Smartphone
  },
  {
    id: 'api-testing',
    title: 'API Testing',
    desc: [
      "Enterprise applications rely heavily on APIs to power integrations, workflows, transactions, and real-time communication across systems. cliQTest enables comprehensive API testing to validate functionality, response accuracy, business logic, and data consistency across interconnected ecosystems.",
      "The platform supports automated validation of REST APIs using GET, POST, PUT, and DELETE methods while enabling synchronized UI and API testing workflows. AI-powered SQL query generation, response comparison, and data-driven testing improve backend validation efficiency and reduce manual effort.",
      "cliQTest helps organizations ensure reliable integrations, accurate data exchange, and stable backend performance across modern enterprise architectures."
    ],
    benefits: [
      'End-to-end API validation',
      'Backend data consistency checks',
      'AI-assisted SQL query generation',
      'Integrated UI and API testing',
      'Faster defect identification and debugging'
    ],
    theme: 'purple',
    icon: Network
  },
  {
    id: 'desktop-testing',
    title: 'Desktop Testing',
    desc: [
      "Enterprise desktop applications often involve complex workflows, legacy systems, and environment-specific dependencies that require reliable and scalable validation. cliQTest enables organizations to automate and manage desktop application testing through centralized execution workflows and intelligent automation capabilities.",
      "The platform supports low-code automation, reusable workflows, AI-driven maintenance, and cross-environment execution while ensuring stable validation of desktop-based business processes and critical enterprise operations.",
      "cliQTest helps enterprises modernize legacy testing approaches while improving execution efficiency, reliability, and operational continuity across desktop environments."
    ],
    benefits: [
      'Automated desktop workflow validation',
      'Low-code test automation',
      'Reduced maintenance effort',
      'Centralized reporting and traceability',
      'Improved execution consistency'
    ],
    theme: 'teal',
    icon: Monitor
  },
  {
    id: 'regression-testing',
    title: 'Regression Testing',
    desc: [
      "Frequent releases and evolving applications make regression testing critical for maintaining application stability and business continuity. cliQTest enables scalable and intelligent regression testing across web, mobile, desktop, and API ecosystems through centralized orchestration and AI-powered automation.",
      "The platform supports reusable components, parallel execution, cross-browser testing, distributed execution agents, and automated scheduling that significantly reduce regression cycle durations. AI-powered self-healing minimizes failures caused by UI changes, ensuring reliable execution across dynamic applications.",
      "cliQTest enables organizations to execute faster and more reliable regression cycles while maintaining release confidence and operational efficiency."
    ],
    benefits: [
      'Faster regression execution cycles',
      'Parallel and distributed execution',
      'AI-powered automation resilience',
      'Improved test coverage and reliability',
      'Continuous validation across releases'
    ],
    theme: 'purple',
    icon: RefreshCw
  },
  {
    id: 'performance-testing',
    title: 'Performance Testing',
    desc: [
      "High-performing applications are critical for delivering seamless digital experiences and maintaining operational reliability under varying workloads. cliQTest supports scalable performance validation by enabling organizations to monitor execution behavior, application responsiveness, and system reliability across enterprise environments.",
      "The platform supports large-scale execution orchestration, data-driven workflows, distributed execution models, and centralized reporting that help organizations identify bottlenecks, performance degradation, and scalability risks before production deployment.",
      "cliQTest enables teams to improve system performance, optimize application behavior, and ensure stable user experiences under demanding business conditions."
    ],
    benefits: [
      'Scalable execution and validation',
      'Centralized performance visibility',
      'Faster bottleneck identification',
      'Improved application reliability',
      'Enhanced release confidence'
    ],
    theme: 'teal',
    icon: Activity
  },
  {
    id: 'ai-testing',
    title: 'AI Testing',
    desc: [
      "Artificial Intelligence models and AI-driven applications require a fundamentally different validation approach compared to traditional software. cliQTest enables organizations to test AI and Machine Learning systems by evaluating model accuracy, testing edge cases, and ensuring consistent output quality.",
      "The platform supports automated validation of AI responses, algorithmic behaviors, conversational agents (LLMs), and data processing pipelines. With built-in AI evaluation metrics, teams can measure hallucination rates, contextual accuracy, and performance drift over time.",
      "cliQTest helps enterprises build trust in their AI initiatives by ensuring models remain reliable, safe, and highly performant under real-world usage."
    ],
    benefits: [
      'Automated LLM and chatbot validation',
      'Model accuracy and drift monitoring',
      'Reduced hallucination risks',
      'Edge-case evaluation workflows',
      'Improved AI reliability and safety'
    ],
    theme: 'purple',
    icon: Brain
  }
];

export default function ByUseCase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-[#090A0A] text-white min-h-screen">
      
      {/* 1. Hero Section */}
      <section ref={containerRef} className="relative min-h-[85vh] md:min-h-screen bg-[#06050C] flex flex-col justify-center border-b border-white/5 overflow-hidden">
        {/* Background Image/Gradient */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Image 
            src="/images/solution-by-usecase-hero.png" 
            alt="Hero Background" 
            fill 
            priority
            unoptimized
            className="object-cover object-right opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06050C]/80 via-[#06050C]/40 to-[#06050C] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none" />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
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
              <a href="#web-testing" className="inline-flex items-center gap-2 px-8 py-3 bg-[#6843B7] text-white font-medium rounded-sm hover:bg-[#6843B7]/90 transition-all">
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
          
          const isPurple = feat.theme === 'purple';
          const accentColor = isPurple ? "#6843B7" : "#00F2B0";
          const gradientClass = isPurple 
            ? "from-[#6843B7] to-[#ffffff]" 
            : "from-[#00F2B0] to-[#ffffff]";
            
          const Icon = feat.icon;

          return (
            <section key={feat.id} id={feat.id} className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
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
                      {feat.desc.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
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
            <Link href="/pricing" className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors text-[13px] sm:text-base whitespace-nowrap">
              View Plans
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
