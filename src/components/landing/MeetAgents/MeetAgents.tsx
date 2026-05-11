import React from 'react';

const agents = [
  { name: "Create", desc: "Greater test coverage, higher quality products", pos: "top-[10%] left-[10%]" },
  { name: "Execute", desc: "Test Agents self healing reduces test maintenance", pos: "top-[10%] right-[10%]" },
  { name: "Document", desc: "Keep stakeholders and team leads in the loop", pos: "top-[40%] left-[-5%]" },
  { name: "Diagnose", desc: "Keep development teams in the loop automatically", pos: "top-[40%] right-[-5%]" },
  { name: "Optimize", desc: "Reduce execution time and improve stability", pos: "bottom-[10%] left-[10%]" },
  { name: "Maintain", desc: "Eliminate the costly maintenance cycle", pos: "bottom-[10%] right-[10%]" }
];

export default function MeetAgents() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-40 text-center border-t border-white/5 relative overflow-hidden">
      <h2 className="text-6xl md:text-8xl font-bold text-white mb-32 tracking-tight">
        Meet the Agents
      </h2>
      
      <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
        {/* Central Brain Placeholder */}
        <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-[40px] animate-pulse" />
        <div className="absolute w-64 h-64 border border-white/10 rounded-full animate-spin-slow" />
        
        {/* Floating Agent Cards */}
        {agents.map((agent, i) => (
          <div key={i} className={`absolute ${agent.pos} flex flex-col items-center group`}>
            <div className="bg-white rounded-full px-12 py-4 mb-4 flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-500">
                <span className="text-xs">✦</span>
              </div>
              <span className="text-black font-bold text-xl">{agent.name}</span>
            </div>
            <p className="text-[#10B981] text-sm font-medium max-w-[180px] leading-snug">
              {agent.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
