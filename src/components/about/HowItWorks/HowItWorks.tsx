"use client";

import React from 'react';

const steps = [
  {
    number: "01",
    title: "Test Script",
    description: "Use the no-code engine to design and customize test cases tailored to your application.",
    color: "from-[#00AEEF] to-[#0092E6]"
  },
  {
    number: "02",
    title: "Device & Browser Selection",
    description: "Choose from a wide range of real devices and browsers available in the lab.",
    color: "from-[#00F2B0] to-[#00D19A]"
  },
  {
    number: "03",
    title: "Test Execution",
    description: "Run parallel automation tests across multiple devices and browsers.",
    color: "from-purple-500 to-purple-700"
  },
  {
    number: "04",
    title: "Monitoring & Debugging",
    description: "Leverage real-time monitoring tools to identify and resolve issues promptly.",
    color: "from-[#00AEEF] to-[#0092E6]"
  },
  {
    number: "05",
    title: "Analytics & Reporting",
    description: "Generate comprehensive reports to analyze performance and identify areas for improvement.",
    color: "from-[#00F2B0] to-[#00D19A]"
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-black py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-center text-3xl md:text-5xl font-bold mb-24 tracking-tight">
          How cliQTest Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
              {/* Number Circle with Glow */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-xl mb-8 shadow-[0_0_20px_rgba(0,174,239,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,174,239,0.4)] transition-all duration-500 rotate-3 group-hover:rotate-0`}>
                {step.number}
              </div>

              {/* Content Card (Dark Theme) */}
              <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-6 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all duration-500 flex-1 flex flex-col group">
                <h3 className="text-white text-lg font-bold mb-3 leading-tight group-hover:text-[#00AEEF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
