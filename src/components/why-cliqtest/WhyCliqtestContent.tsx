"use client";
import { useEffect } from 'react';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyCliqtestContent() {
  const reasons = [
    {
      title: "Unified Quality Engineering Platform",
      desc: "cliQTest unifies test management, automation, mobile device labs, analytics, AI-driven validation, and reporting into a centralized quality engineering ecosystem that eliminates fragmented testing workflows and disconnected tools."
    },
    {
      title: "AI-Native Automation",
      desc: "cliQTest leverages Generative AI, Agentic AI, MCP-based automation, self-healing execution, AI-driven report summarization, and intelligent validation capabilities to modernize automation and reduce manual effort across testing lifecycles."
    },
    {
      title: "Enterprise-Grade Scalability",
      desc: "Designed for modern enterprise environments, cliQTest supports cloud-native, on-premise, and hybrid deployment models with distributed execution agents, scalable automation architecture, centralized governance, and real-device execution capabilities."
    },
    {
      title: "Faster Time-to-Market",
      desc: "By combining low-code automation, reusable components, AI-powered execution stability, parallel execution, and CI/CD integration, cliQTest significantly accelerates regression cycles and release validation timelines."
    },
    {
      title: "Cross-Platform Testing Ecosystem",
      desc: "cliQTest enables unified testing across web, mobile, desktop, APIs, AI systems, and enterprise workflows while ensuring consistent validation across browsers, devices, environments, and integrated business systems."
    },
    {
      title: "Intelligent Insights & Reporting",
      desc: "With centralized dashboards, AI-powered report summarization, execution analytics, failure analysis, and quality metrics, cliQTest transforms testing data into actionable business intelligence that supports faster and smarter release decisions."
    }
  ];
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
    <div className="max-w-7xl mx-auto px-8">
      
      {/* Stacked Numbered Section */}
      <div className="space-y-6">
        {reasons.map((reason, index) => {
          const sectionId = reason.title.toLowerCase().replace(/\s+/g, '-');
          return (
          <div key={index} id={sectionId} className="scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sticky bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500"
            style={{ 
              top: `calc(8rem + ${index * 2}rem)`, 
              zIndex: 10 + index 
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start relative z-10">
              {/* Huge Number */}
              <div className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff] opacity-40 transition-colors duration-500 leading-none">
                0{index + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1 mt-2">
                <h2 className="text-2xl font-bold text-white mb-4 tracking-tight transition-colors duration-300">
                  {reason.title}
                </h2>
                <p className="text-white/60 text-base leading-relaxed max-w-4xl">
                  {reason.desc}
                </p>
              </div>
            </div>
            
          </motion.div>
          </div>
        )})}
      </div>

    </div>
  );
}
