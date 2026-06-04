"use client";

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
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="bg-black min-py-14  md:py-24 relative text-white font-sans selection:bg-[#6843B7] selection:text-white">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-black">
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 xl:px-24 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Interactive List */}
        <div className="w-full lg:w-[35%] flex flex-col relative">
          <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-xl pt-32 pb-6 mb-2 -mt-32 border-b border-white/10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-white">AI Matrix</span>
            </motion.h2>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Explore our 14 core AI capabilities designed to autonomously generate, heal, and evaluate enterprise test automation.
            </p>
          </div>

          {/* Nav List (Page Scroll) */}
          <div className="flex flex-col gap-1.5 pr-4 pb-32">
            {features.map((feat, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group flex items-center gap-3 p-3 rounded-sm text-left transition-all duration-300 w-full ${
                    isActive 
                      ? 'bg-[#6843B7]/10 border border-[#6843B7]/30 shadow-[0_0_15px_rgba(104,67,183,0.1)]' 
                      : 'bg-transparent border border-transparent hover:bg-white/5'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#6843B7] text-white' : 'bg-white/5 text-white/50 group-hover:text-white group-hover:bg-white/10'
                  }`}>
                    <feat.icon size={16} />
                  </div>
                  <span className={`font-semibold tracking-wide text-sm transition-colors ${
                    isActive ? 'text-white' : 'text-white/50 group-hover:text-white'
                  }`}>
                    {feat.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed View */}
        <div className="w-full lg:w-[65%] lg:sticky lg:top-32 h-auto lg:h-[calc(100vh-12rem)] flex flex-col justify-center perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-full min-h-[420px] bg-[#080808] border border-white/10 rounded-sm p-8 md:p-10 overflow-hidden shadow-2xl flex flex-col justify-between"
            >

              <div className="relative z-10 flex items-center gap-4 mb-6">
                {React.createElement(features[activeIndex].icon, {
                  size: 32,
                  className: "text-[#6843B7]"
                })}
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  {features[activeIndex].title}
                </h3>
              </div>

              <div className="relative z-10 flex-grow">
                <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed font-light">
                  {features[activeIndex].desc}
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                {/* <span className="text-[#6843B7] font-semibold text-xs tracking-widest uppercase flex items-center gap-2">
                  <Activity size={14} className="animate-pulse" />
                  Active Module
                </span> */}
                <button className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-xs font-medium transition-colors text-white">
                  Learn More
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(104, 67, 183, 0.5);
        }
      `}} />
    </section>
  );
}
