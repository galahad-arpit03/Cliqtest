"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutPlatform() {
  const cards = [
    {
      title: "Enterprise Application Intelligence",
      description: "With over 10 years of model training and data optimization, our Enterprise Application Intelligence offers unmatched precision, scalability, and efficiency in agentic automation.",
      visual: "bg-emerald-500/10"
    },
    {
      title: "Enterprise Intelligent Agents",
      description: "Achieve dramatic improvements in productivity, efficiency, and cost savings with Functionize's Agentic Automation platform. Our EAI Agents transform how businesses manage workflows, enhancing operational capacity without compromising data privacy or security.",
      visual: "bg-blue-500/10"
    },
    {
      title: "Advanced AI models",
      description: "Functionize's Cognitive ML builds a model of how your UI works using multiple machine learning approaches. This allows tests to automatically heal when they encounter changes and provides single click fixes using our root cause analysis when changes in the application do cause a test to fail.",
      visual: "bg-purple-500/10"
    }
  ];

  return (
    <section className="bg-white py-32 px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-black text-center text-4xl md:text-6xl font-bold mb-24">
          Functionize Agentic Platform
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side: Large Overview Card */}
          <div className="relative group">
            {/* Visual Background */}
            <div className="w-full aspect-square bg-zinc-900 rounded-[32px] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black" />
              {/* Abstract graphics placeholder */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 blur-[60px]" />
            </div>
            
            {/* Overlay Info Card */}
            <div className="absolute bottom-[-40px] right-[-20px] lg:bottom-[-20px] lg:right-[-40px] max-w-[400px] bg-white rounded-[24px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-zinc-100 z-10">
              <h3 className="text-2xl font-bold text-black mb-6 leading-tight">
                Functionize Agentic Platform Overview
              </h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed">
                Our Enterprise Application Agents (EAI) deliver autonomous, adaptive, and cognitive functionalities that enable businesses to automate entire workflows and complex processes.
              </p>
              <ul className="space-y-3 mb-8">
                {["Supercharge flow creation, coverage, and diagnosis while reducing maintenance.", "Power up team efficiency and optimize resources."].map((li, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#00AEEF] font-semibold">
                    <span className="text-[20px] leading-none">•</span>
                    {li}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#00AEEF] font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Side: Stack of 3 Cards */}
          <div className="space-y-6 pt-20 lg:pt-0">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-[24px] border border-zinc-100 p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all flex gap-8 items-start group">
                <div className={`shrink-0 w-24 h-24 rounded-2xl ${card.visual} flex items-center justify-center overflow-hidden`}>
                   {/* Icon/Small Graphic placeholder */}
                   <div className="w-12 h-12 border border-black/5 rounded-lg rotate-12" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-black mb-4 group-hover:text-[#00AEEF] transition-colors">{card.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <button className="flex items-center gap-2 text-zinc-400 font-bold text-[10px] uppercase tracking-widest hover:text-[#00AEEF] transition-colors">
                    Learn More <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
