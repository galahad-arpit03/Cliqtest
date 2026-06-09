"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContentStore } from '@/admin/store/adminStore';
import EditableText from '@/admin/components/EditableText';

export default function CloudFirst({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const content = useContentStore((state) => state.content);
  const isLight = theme === "light";

  return (
    <section className={`relative w-full py-24 px-4 md:px-8 overflow-hidden transition-colors duration-500 ${isLight ? 'bg-[#FAFAFA]' : 'bg-black'}`}>
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-[44px] font-semibold mb-4 tracking-tight leading-[1.1] transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}
          >
            <EditableText path="home.cloudFirst.headingPrefix" fallback="The Power of" as="span" />{" "}
            <EditableText 
              path="home.cloudFirst.headingHighlight" 
              fallback="Agentic QA" 
              as="span" 
              className="bg-gradient-to-r from-[#6843B7] to-[#9e7be9] bg-clip-text text-transparent font-semibold" 
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`font-semibold tracking-[0.2em] text-[11px] uppercase transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-white'}`}
          >
            <EditableText path="home.cloudFirst.subheading" fallback="SCALING INTELLIGENCE ACROSS EVERY WORKFLOW" as="span" />
          </motion.p>
        </div>

        {/* Bento Grid - 2x2 Horizontal Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: 12,000+ Test Runs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`flex flex-col sm:flex-row rounded-md border overflow-hidden group transition-colors duration-500 ${isLight ? 'bg-white border-black/10 shadow-sm' : 'bg-[#0A0A0A] border-white/10'}`}
          >
            <div className={`hidden sm:block relative w-full sm:w-[45%] h-[250px] sm:h-auto border-b sm:border-b-0 sm:border-r overflow-hidden transition-colors duration-500 ${isLight ? 'bg-zinc-100 border-black/5' : 'bg-black border-white/5'}`}>
              <Image
                src="/images/testcase.png"
                alt="Test Runs"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <h3 className={`text-[28px] font medium mb-1 leading-tight tracking-tight transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}><EditableText path="home.cloudFirst.card1Title" fallback="12,000+" as="span" /></h3>
              <h4 className={`text-xl font medium mb-3 leading-tight tracking-tight transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}><EditableText path="home.cloudFirst.card1Subtitle" fallback="Autonomous Test Runs" as="span" /></h4>
              <p className={`text-[13px] leading-relaxed mb-6 transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                <EditableText path="home.cloudFirst.card1Desc" fallback="Scale your quality engineering with AI agents that autonomously generate, execute, and self-heal massive parallel test suites without human intervention." multiline />
              </p>
               {/* <a href="#" className="text-[#6843B7] font medium text-[13px] hover:text-white transition-colors mt-auto">
                Learn More ...
              </a> */}
            </div>
          </motion.div>

          {/* Card 2: 50+ Enterprises */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`flex flex-col sm:flex-row rounded-md border overflow-hidden group transition-colors duration-500 ${isLight ? 'bg-white border-black/10 shadow-sm' : 'bg-[#0A0A0A] border-white/10'}`}
          >
            <div className={`hidden sm:block relative w-full sm:w-[45%] h-[250px] sm:h-auto border-b sm:border-b-0 sm:border-r overflow-hidden transition-colors duration-500 ${isLight ? 'bg-zinc-100 border-black/5' : 'bg-black border-white/5'}`}>
              <Image
                src="/images/enterprise.png"
                alt="50+ Enterprises"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1]"
                sizes="(max-width: 640px) 100vw, 30vw"
              />
              <div className="absolute group-hover:opacity-40 transition-opacity duration-700 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTEwIDBWMjBNMCAxMEgyMCIgc3Ryb2tlPSIjMDBGMkIwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] bg-[length:20px_20px] z-[5]" />
              {/* Gradient overlay removed to keep image opacity high */}
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center relative z-20">
              <h4 className={`text-xl font medium mb-3 leading-tight tracking-tight transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}><EditableText path="home.cloudFirst.card2Title" fallback="50+ Enterprise AI Adopters" as="span" /></h4>
              <p className={`text-[13px] leading-relaxed mb-6 transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                <EditableText path="home.cloudFirst.card2Desc" fallback="Trusted by forward-thinking global leaders to deploy intelligent automation, eliminating QA bottlenecks and accelerating continuous delivery." multiline />
              </p>
              {/* <a href="#" className="text-[#6843B7] font medium text-[13px] hover:text-white transition-colors mt-auto">
                Learn More ...
              </a> */}
            </div>
          </motion.div>

          {/* Card 3: 4+ Platform Support */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`flex flex-col sm:flex-row rounded-md border overflow-hidden group transition-colors duration-500 ${isLight ? 'bg-white border-black/10 shadow-sm' : 'bg-[#0A0A0A] border-white/10'}`}
          >
            <div className={`hidden sm:block relative w-full sm:w-[45%] h-[250px] sm:h-auto border-b sm:border-b-0 sm:border-r overflow-hidden transition-colors duration-500 ${isLight ? 'bg-zinc-100 border-black/5' : 'bg-black border-white/5'}`}>
              <Image
                src="/images/ai-agent.png"
                alt="Platform Support"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <h4 className={`text-xl font medium mb-3 leading-tight tracking-tight transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}><EditableText path="home.cloudFirst.card3Title" fallback="Omnichannel AI Agents" as="span" /></h4>
              <p className={`text-[13px] leading-relaxed mb-6 transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                <EditableText path="home.cloudFirst.card3Desc" fallback="Deploy specialized agents that seamlessly navigate Web, Mobile, API, and Desktop environments, understanding context across your entire ecosystem." multiline />
              </p>
              {/* <a href="#" className="text-[#6843B7] font medium text-[13px] hover:text-white transition-colors mt-auto">
                Learn More ...
              </a> */}
            </div>
          </motion.div>

          {/* Card 4: 10,000+ Device Supports */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`flex flex-col sm:flex-row rounded-md border overflow-hidden group transition-colors duration-500 ${isLight ? 'bg-white border-black/10 shadow-sm' : 'bg-[#0A0A0A] border-white/10'}`}
          >
            <div className={`hidden sm:block relative w-full sm:w-[45%] h-[250px] sm:h-auto border-b sm:border-b-0 sm:border-r overflow-hidden transition-colors duration-500 ${isLight ? 'bg-zinc-100 border-black/5' : 'bg-black border-white/5'}`}>
              <Image
                src="/images/env.png"
                alt="Device Supports"
                fill
                className="object-cover object-left transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <h4 className={`text-xl font medium mb-3 leading-tight tracking-tight transition-colors duration-500 ${isLight ? 'text-black' : 'text-white'}`}><EditableText path="home.cloudFirst.card4Title" fallback="10,000+ Dynamic Environments" as="span" /></h4>
              <p className={`text-[13px] leading-relaxed mb-6 transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                <EditableText path="home.cloudFirst.card4Desc" fallback="Our AI engines test across thousands of real devices and browsers, dynamically adapting to varying screen sizes, OS configurations, and network conditions." multiline />
              </p>
              {/* <a href="#" className="text-[#6843B7] font medium text-[13px] hover:text-white transition-colors mt-auto">
                Learn More ...
              </a> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
