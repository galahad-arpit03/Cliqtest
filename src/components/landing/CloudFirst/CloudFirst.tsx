import React from 'react';

const features = [
  {
    title: "Unmatched Application Intelligence",
    description: "Eight years of enterprise training and 30,000+ data points per page power Cliqtest's AI to achieve 99.97% element recognition accuracy, cutting flaky tests and maintenance by 80%.",
    color: "bg-purple-500/20"
  },
  {
    title: "Agentic Platform at the Core",
    description: "Our agentic AI builds, runs, diagnoses, and self heals tests end to end with minimal human input. Each agent delivers measurable value by reducing maintenance, accelerating execution.",
    color: "bg-blue-500/20"
  },
  {
    title: "Tests In Seconds",
    description: "Go from idea to execution in record time. Non technical teams can create and deploy tests in seconds, up to 90% faster than traditional scripting approaches.",
    color: "bg-cyan-500/20"
  },
  {
    title: "Unbounded Parallel Testing",
    description: "Stateless, containerized agents spin up thousands of tests instantly across browsers, devices, and geographies, empowering teams to release faster with zero trade offs.",
    color: "bg-emerald-500/20"
  }
];

export default function CloudFirst() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-32 text-center border-t border-white/5">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
        Cloud First. AI First. Agentic at the Core.
      </h2>
      
      <p className="text-xl md:text-2xl text-[#10B981] font-medium mb-12 max-w-4xl mx-auto leading-relaxed">
        Cliqtest delivers quality at scale for enterprises ready to move from reactive QA to truly intelligent, adaptive testing.
      </p>

      <div className="flex justify-center mb-24">
        <button className="px-8 py-3 rounded-full bg-[#00A3FF] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#0092E6] transition-all font-rubik">
          Enterprise App Intelligence
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className={`w-full aspect-square rounded-3xl mb-8 ${feature.color} border border-white/10 transition-transform group-hover:scale-[1.02] duration-500 flex items-center justify-center`}>
               {/* Image placeholder */}
               <div className="w-1/2 h-1/2 opacity-20 border-2 border-dashed border-white rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              {feature.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
