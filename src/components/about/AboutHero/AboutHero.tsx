"use client";

import React from 'react';

export default function AboutHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/about/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-12">

        {/* Heading */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-[54px] font-black leading-[1.05] tracking-tight mb-6 max-w-xl">
          What is <br /><span className="text-white">cliQTest</span>?
        </h1>

        {/* Para 1 — Cyan */}
        <p className="text-[#00F2B0] text-base md:text-lg font-medium leading-relaxed max-w-[50%] mb-5">
          cliQTest is an innovative all-in-one platform designed to revolutionize Quality Assurance for software applications, combining no-code automation, real-device access, and seamless workflow management into a cohesive, game-changing solution.
        </p>

        {/* Para 2 — White */}
        <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-[50%] mb-10">
          At its core, cliQTest empowers QA teams with intelligent tools that eliminate complexity. Whether you&apos;re testing websites, mobile apps, APIs, or desktops — cliQTest provides a robust environment to conduct automated and manual testing with precision. Its self-healing automation, real-time device lab, and centralized test management ensure your team ships faster without compromising quality.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3 bg-[#00AEEF] text-white font-bold rounded-full hover:bg-[#0092E6] hover:scale-105 transition-all text-sm tracking-[0.15em] uppercase shadow-lg shadow-[#00AEEF]/30">
            Explore Platform
          </button>
        </div>



      </div>
    </section>
  );
}
