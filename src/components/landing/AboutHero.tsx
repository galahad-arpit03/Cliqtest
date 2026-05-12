"use client";

import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 px-12 lg:px-24 bg-black overflow-hidden min-h-[75vh] flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side: Content */}
        <div className="text-left">
          <h1 className="text-white text-5xl md:text-[72px] font-bold leading-[1] tracking-tight mb-8">
            What is <br />
            Functionize?
          </h1>
          <p className="text-[#00F2B0] text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-6">
            Functionize is a transformative platform revolutionizing Enterprise Agentic Automation by integrating AI, ML, Big Data and Advanced Computer Vision into a cohesive, game-changing solution.
          </p>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            At its heart, Functionize is powered by proprietary AI technology that develops intelligent, self-healing AI Agents. These agents are crafted to automate intricate user workflows and adeptly adapt in real-time to application changes. This adaptability is driven by our advanced multi-modal AI that not only captures and analyzes your specific application data maps, but also draws insights from similar applications across various platforms—from web to mobile. This ensures our agents can efficiently learn new user workflows and self-correct as incremental changes occur.
          </p>
          
          <button className="px-10 py-4 bg-gradient-to-r from-[#00AEEF] to-[#0091c7] text-white font-black rounded-full hover:scale-105 transition-transform text-sm tracking-[0.2em] uppercase shadow-lg shadow-[#00AEEF]/20">
            AGENTIC MANIFESTO
          </button>
        </div>

        {/* Right Side: Visual Placeholder */}
        <div className="relative aspect-square w-full max-w-[650px] mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-[#00F2B0]/5 rounded-[60px] rotate-6 blur-md" />
          <div className="absolute inset-0 bg-zinc-900/40 border border-white/5 rounded-[60px] backdrop-blur-3xl flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="relative w-3/4 h-3/4">
               {/* Abstract 3D elements placeholder */}
               <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-3xl" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00AEEF]/20 rounded-full blur-[80px] animate-pulse" />
               <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-2xl rotate-12" />
               <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
