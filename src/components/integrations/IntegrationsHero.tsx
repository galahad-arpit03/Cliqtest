"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function IntegrationsHero() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden mb-20"
      style={{
        backgroundImage: "url('/about/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/80 to-[#050505]/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-32 pb-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-[#6843B7] text-[10px] md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block md:hidden">Seamless Enterprise Integrations</span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Seamless Enterprise <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Integrations</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg font-semibold leading-relaxed max-w-2xl mb-6">
            Connect cliQTest with your favorite tools and platforms to create a unified, automated, and highly efficient software development lifecycle.
          </p>

          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl mb-10">
            cliQTest integrates seamlessly with modern enterprise ecosystems, enabling organizations to connect their testing workflows with CI/CD pipelines, DevOps platforms, project management tools, cloud infrastructure, automation frameworks, and security systems. By supporting intelligent integrations across development, testing, deployment, monitoring, and governance layers, cliQTest ensures unified visibility, streamlined workflows, and continuous quality engineering across the software delivery lifecycle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[#6843B7] text-white font-semibold rounded-full hover:bg-[#6843B7]/90 transition-all shadow-[0_0_20px_rgba(104,67,183,0.3)] text-[14px]">
              Explore Ecosystem
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
