"use client";

import React, { useState } from 'react';

export default function ProductHero() {
  const tabs = ["OVERVIEW", "CAPABILITES", "USE CASES", "AI JOURNEY"];
  const [activeTab, setActiveTab] = useState("OVERVIEW");

  return (
    <section className="relative pt-24 pb-16 px-12 lg:px-24 bg-black min-h-[80vh] flex flex-col justify-between overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center flex-1">
        {/* Left Side: Content */}
        <div className="text-left">
          <h4 className="text-zinc-500 text-[13px] font-black tracking-[0.3em] uppercase mb-10">
            GO BEYOND SIMPLE TASK AUTOMATION WITH THE
          </h4>
          <h1 className="text-white text-5xl md:text-[72px] font-bold leading-[1] tracking-tight mb-8">
            Functionize <br />
            Agentic Digital <br />
            Worker Platform
          </h1>
          <p className="text-[#00F2B0] text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
            Our digital workers deliver autonomous, adaptive, and cognitive functionalities that enable businesses to automate QA tests and workflows.
          </p>
        </div>

        {/* Right Side: Visual Placeholder */}
        <div className="relative aspect-square w-full max-w-[600px] mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[40px] rotate-3 blur-sm" />
          <div className="absolute inset-0 bg-zinc-900/40 border border-white/10 rounded-[40px] backdrop-blur-3xl flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-10 gap-2 opacity-10">
               {Array.from({ length: 100 }).map((_, i) => (
                 <div key={i} className="w-1 h-1 bg-[#00F2B0] rounded-full" />
               ))}
            </div>
            <div className="absolute w-40 h-40 bg-[#00AEEF]/20 rounded-full blur-[60px] animate-pulse" />
          </div>
        </div>
      </div>

      {/* Tab Navigation (Bottom Centered) */}
      <div className="w-full flex justify-center pb-8 mt-12 lg:mt-0">
        <div className="flex items-center p-1.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 lg:px-10 py-3 rounded-full text-[12px] font-black tracking-widest transition-all duration-300 ${
                activeTab === tab 
                ? 'bg-[#00AEEF] text-white shadow-lg' 
                : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
