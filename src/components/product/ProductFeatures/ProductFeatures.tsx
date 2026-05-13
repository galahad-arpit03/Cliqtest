"use client";

import React from 'react';
import { Zap, TrendingUp, Cpu, Network, Cloud } from 'lucide-react';

export default function ProductFeatures() {
  return (
    <section className="bg-black py-32 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            Exponentially Boost Operational Efficiency with <span className="text-[#00AEEF]">Agentic Digital Workers</span>
          </h2>
          <p className="text-[#00F2B0] text-lg md:text-xl font-medium max-w-3xl mx-auto">
            More than a technological enhancement, digital workers are crucial for staying competitive in the rapidly shifting world of AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Large Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[32px] p-10 flex flex-col min-h-[600px] justify-between group hover:border-[#00F2B0]/30 transition-all">
            <div>
              <h3 className="text-white text-4xl font-bold mb-8">Supercharge <br /> productivity</h3>
              <p className="text-zinc-400 leading-relaxed text-xl max-w-md">
                Powered by proprietary, layered AI models, EAI Agents automate workflows across diverse applications, utilizing an intelligence layer that captures the intricacies of each process to streamline operations and drive efficiency across business functions.
              </p>
            </div>
            {/* Visual element placeholder */}
            <div className="mt-12 w-full aspect-square bg-[#00F2B0]/5 rounded-3xl relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00F2B0]/20 to-transparent" />
              <div className="w-1/2 h-1/2 bg-[#00F2B0]/20 rounded-full blur-[80px] animate-pulse" />
              <div className="relative z-10 grid grid-cols-8 gap-1 opacity-20">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#00F2B0] rounded-sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/40 border border-white/10 rounded-[24px] p-8 hover:bg-zinc-900/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#00F2B0]/10 flex items-center justify-center mb-6 group-hover:bg-[#00F2B0]/20 transition-colors">
                <Zap className="text-[#00F2B0]" size={24} />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Optimize expenses</h3>
              <p className="text-zinc-400 leading-relaxed">
                Reduce operational expenses by over 80% with EAI Agents. Leverage enhanced workflow automation and a comprehensive cloud-scale architecture to enable efficient capital allocation and reinvestment of resources into higher-value initiatives.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-white/10 rounded-[24px] p-8 hover:bg-zinc-900/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <TrendingUp className="text-[#00AEEF]" size={24} />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Outpace your rivals</h3>
              <p className="text-zinc-400 leading-relaxed">
                Expedite product delivery by automating repetitive business tasks like testing, data processing and system updates, allowing teams to focus on innovation and reducing time-to-market with EAI Agents.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-white/10 rounded-[24px] p-8 hover:bg-zinc-900/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Network className="text-purple-400" size={24} />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Drive top-line growth</h3>
              <p className="text-zinc-400 leading-relaxed">
                Automate critical business processes to enable efficient and seamless operations that deliver exceptional customer experiences and drive sustained revenue growth.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-white/10 rounded-[24px] p-8 hover:bg-zinc-900/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Cloud className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Unlock cloud-scale growth</h3>
              <p className="text-zinc-400 leading-relaxed">
                Eliminate local infrastructure management and costs. Enable efficient, scalable business operations in the cloud with EAI Agents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
