"use client";
import { useEffect } from 'react';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Database, Crosshair, FunctionSquare, Wrench, Cpu, Bot, DatabaseZap, ShieldCheck, FileText, Activity, Bug, Lightbulb } from 'lucide-react';

const features = [
  { 
    id: "ai-testing", 
    title: "AI Testing & Evaluation", 
    icon: Brain,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    desc: "cliQTest provides advanced AI testing and evaluation capabilities designed to validate the performance, reliability, contextual accuracy, and consistency of modern AI systems including LLMs, RAG pipelines, machine learning models, deep learning systems, chatbots, and voicebots. The platform enables teams to upload structured datasets containing prompts, inputs, expected responses, and evaluation criteria while executing intelligent validation workflows across diverse AI models and use cases. Through flexible data mapping, built-in validation engines, semantic analysis, hallucination detection, contextual response evaluation, and scalable execution capabilities, cliQTest simplifies the complex process of AI model evaluation and ensures production-ready AI quality across enterprise environments." 
  },
  { 
    id: "genai-test", 
    title: "GenAI Test Case Generation", 
    icon: Sparkles,
    span: "col-span-1",
    desc: "cliQTest leverages Generative AI to automate the creation of comprehensive and context-aware test cases directly from BRDs, Jira stories, user flows, Figma designs, and business requirements. The platform intelligently interprets workflows, validation logic, UI structures, and functional dependencies to generate positive, negative, and edge-case scenarios with complete execution steps and expected outcomes. By reducing manual test authoring effort and improving coverage consistency, cliQTest accelerates test preparation, enhances traceability, and enables faster and more scalable quality engineering practices across modern application ecosystems." 
  },
  { 
    id: "ai-test-data", 
    title: "AI Test Data Generator", 
    icon: Database,
    span: "col-span-1",
    desc: "cliQTest’s AI-powered Test Data Generator enables organizations to create realistic, context-aware, and privacy-compliant synthetic datasets for automation, performance, regression, and AI model testing workflows. The platform intelligently generates test data aligned with business rules, field constraints, application patterns, and domain-specific scenarios while ensuring sensitive information is masked and regulatory compliance is maintained. By eliminating dependency on production data and accelerating bulk dataset generation, cliQTest improves testing scalability, coverage quality, and operational efficiency across enterprise testing environments." 
  },
  { 
    id: "ai-xpath", 
    title: "AI X-Path Finder", 
    icon: Crosshair,
    span: "col-span-1",
    desc: "cliQTest simplifies locator management through its intelligent AI-powered XPath Finder that automatically analyzes DOM structures and generates accurate, optimized, and resilient XPath locators for web automation workflows. The platform understands element relationships, UI hierarchies, and structural patterns to generate dynamic locators capable of adapting to minor application changes and reducing automation flakiness. By eliminating manual XPath creation and simplifying locator maintenance, cliQTest improves automation stability, accelerates script development, and reduces debugging effort across rapidly evolving applications." 
  },
  { 
    id: "agentic-function", 
    title: "Agentic AI Function Generator", 
    icon: FunctionSquare,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    desc: "cliQTest’s Agentic AI Function Generator transforms natural language instructions into production-ready automation functions and reusable code components without requiring deep scripting expertise. The platform intelligently interprets user intent, business workflows, and automation requirements to generate clean, modular, and executable functions that integrate seamlessly into existing testing frameworks and workflows. By democratizing automation development and reducing manual coding effort, cliQTest accelerates automation adoption and empowers cross-functional teams to contribute to intelligent automation initiatives." 
  },
  { 
    id: "auto-healing", 
    title: "AI-Powered Auto Healing", 
    icon: Wrench,
    span: "col-span-1",
    desc: "cliQTest’s AI-driven Auto Healing capability continuously monitors application changes and dynamically repairs broken automation scripts during execution by identifying alternate locators and adapting to evolving UI structures in real time. The platform intelligently detects attribute changes, layout modifications, and object shifts while autonomously maintaining execution continuity without manual intervention. This significantly reduces automation maintenance overhead, minimizes execution failures, and ensures long-term automation stability across fast-changing enterprise applications." 
  },
  { 
    id: "mcp-automation", 
    title: "MCP Automation", 
    icon: Cpu,
    span: "col-span-1",
    desc: "cliQTest utilizes Model Context Protocol (MCP)-based automation to intelligently generate and execute automation scripts by understanding application context, business workflows, and user interactions holistically. The platform creates execution-ready automation flows without requiring extensive scripting effort while ensuring alignment with real business processes and testing objectives. By leveraging contextual understanding and intelligent workflow orchestration, cliQTest accelerates automation scalability, improves execution consistency, and simplifies enterprise automation adoption." 
  },
  { 
    id: "agentic-automation", 
    title: "Agentic Automation", 
    icon: Bot,
    span: "col-span-1 md:col-span-2 lg:col-span-1",
    desc: "cliQTest introduces next-generation Agentic Automation capabilities that enable intelligent AI agents to independently analyze, plan, generate, optimize, and execute complex automation workflows with minimal human intervention. The platform decomposes high-level testing goals into structured execution flows, orchestrates multiple specialized AI agents collaboratively, and continuously refines automation scripts based on execution feedback and application behavior. This autonomous and adaptive automation model significantly improves scalability, reduces manual effort, and transforms traditional automation into intelligent quality engineering." 
  },
  { 
    id: "ai-sql", 
    title: "AI SQL Query Agent", 
    icon: DatabaseZap,
    span: "col-span-1",
    desc: "cliQTest simplifies backend validation through its AI-powered SQL Query Agent that converts natural language prompts and validation requirements into optimized SQL queries automatically. The platform enables testers and QA teams to perform complex database validations, data consistency checks, and backend verification without extensive SQL expertise. By accelerating query generation and reducing manual effort, cliQTest improves data validation efficiency, enhances defect detection accuracy, and streamlines backend testing workflows across enterprise applications." 
  },
  { 
    id: "ai-captcha", 
    title: "AI CAPTCHA Automation", 
    icon: ShieldCheck,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    desc: "cliQTest enables intelligent CAPTCHA automation by automatically identifying, processing, and handling CAPTCHA challenges during test execution without interrupting automation workflows. The platform uses AI-driven recognition and execution strategies to ensure uninterrupted validation across secure authentication flows, onboarding journeys, transaction processes, and enterprise applications that rely on CAPTCHA verification. This capability significantly improves end-to-end automation continuity and reduces manual intervention during critical business workflows." 
  },
  { 
    id: "ai-report", 
    title: "AI Report Summarization", 
    icon: FileText,
    span: "col-span-1",
    desc: "cliQTest enhances reporting efficiency through AI-powered report summarization that automatically transforms complex execution reports, logs, defect insights, and testing data into concise, actionable, and stakeholder-friendly summaries. The platform intelligently extracts key trends, failure patterns, anomalies, quality risks, and execution highlights while generating executive-ready insights for faster analysis and decision-making. By reducing manual report review effort and improving visibility into testing outcomes, cliQTest accelerates release readiness assessments and enterprise quality governance." 
  },
  { 
    id: "ai-system-val", 
    title: "AI System Validation", 
    icon: Activity,
    span: "col-span-1",
    desc: "cliQTest delivers comprehensive AI system validation capabilities designed specifically for modern conversational AI, generative AI, and intelligent automation ecosystems. The platform supports validation of LLMs, RAG systems, chatbots, voicebots, and AI-driven applications through contextual response analysis, hallucination detection, prompt testing, bias identification, conversational flow evaluation, and response quality assessment. By ensuring fairness, consistency, reliability, and contextual correctness, cliQTest enables organizations to confidently deploy enterprise-grade AI systems into production environments." 
  },
  { 
    id: "defect-insights", 
    title: "Defect Insights", 
    icon: Bug,
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    desc: "cliQTest delivers AI-driven defect intelligence that helps organizations identify, analyze, and prioritize quality issues more effectively. The platform analyzes execution data, failure trends, defect patterns, and historical outcomes to provide deeper visibility into root causes and testing risks. AI-powered report summarization transforms large execution datasets into concise and actionable insights, enabling stakeholders to understand failures, quality trends, and release risks faster. This intelligent analysis capability improves debugging efficiency, accelerates defect resolution, and enables data-driven decision-making across quality engineering teams." 
  },
  { 
    id: "smart-recs", 
    title: "Smart Recommendations", 
    icon: Lightbulb,
    span: "col-span-1 md:col-span-1 lg:col-span-1",
    desc: "cliQTest utilizes AI-driven recommendation engines to continuously optimize testing strategies, automation coverage, and execution efficiency. By analyzing historical execution behavior, defect trends, environment performance, and test stability, the platform provides intelligent recommendations for improving quality outcomes. The platform can suggest automation optimizations, coverage improvements, execution prioritization strategies, and maintenance actions that help organizations maximize testing effectiveness while reducing operational overhead. These intelligent recommendations enable teams to proactively improve quality engineering practices, accelerate delivery cycles, and maintain higher release confidence across enterprise environments." 
  }
];

export default function AiCapabilitiesFeatures() {
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
    <div className="bg-[#050505] text-white py-20 flex flex-col gap-8">
      {/* Header Section */}
      <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-white">AI Matrix</span>
        </h2>
        <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
          Explore our 14 core AI capabilities designed to autonomously generate, heal, and evaluate enterprise test automation.
        </p>
      </div>

      {features.map((feat, idx) => {
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = idx % 2 === 0;
        const accentColor = isPurple ? "#6843B7" : "#00F2B0";
        const gradientClass = isPurple 
          ? "from-[#6843B7] to-[#ffffff]" 
          : "from-[#00F2B0] to-[#ffffff]";
        
        const Icon = feat.icon;
        
        // Split description into paragraphs based on periods
        const paragraphs = typeof feat.desc === 'string' ? feat.desc.split('. ').filter((p: string) => p.trim() !== '') : feat.desc;

        return (
          <section key={feat.id} id={feat.title.toLowerCase().replace(/\s+/g, '-')} className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:min-h-[400px]">
                
                {/* Left Column Stack */}
                <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Visual Demo Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none" 
                      style={{ background: `linear-gradient(45deg,transparent 25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'} 50%,transparent 75%)`}} 
                    />
                    {/* Mock data lines */}
                    <div className="absolute inset-0 flex flex-col gap-3 p-6 opacity-[0.08] pointer-events-none overflow-hidden justify-center">
                      <div className="h-2 w-full bg-white rounded-full" />
                      <div className="h-2 w-3/4 bg-white rounded-full" />
                      <div className="h-2 w-5/6 bg-white rounded-full" />
                      <div className="h-2 w-1/2 bg-white rounded-full" />
                    </div>
                    <Icon size={80} color={accentColor} className="opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                  </motion.div>
                  
                  {/* Metric Card instead of Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group flex flex-col justify-center items-center text-center"
                  >
                    <div className="absolute top-0 w-full h-1" style={{ backgroundColor: accentColor }} />
                    <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                      <Icon size={48} color={accentColor} />
                    </div>
                    <div className="text-xs md:text-sm font-medium uppercase tracking-widest text-white/40 mt-4">
                      {feat.title} Engine
                    </div>
                  </motion.div>

                </div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 flex flex-col justify-center ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="absolute top-0 inset-x-0 h-px opacity-50" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(-90deg,transparent 0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'} 50%,transparent 100%)`}} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                      {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                    </h2>
                    
                    <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                      {paragraphs.map((p: string, i: number) => (
                        <p key={i}>{p}{!p.endsWith('.') ? '.' : ''}</p>
                      ))}
                    </div>
                    
                    {/* Metrics Strip */}
                    <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">AI</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Powered</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">10x</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Faster</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">100%</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Automated</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">Zero</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Maintenance</span>
                      </div>
                    </div>
                    
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
