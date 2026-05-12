"use client";

import React from 'react';
import { Layers, Maximize, Database, BrainCircuit } from 'lucide-react';

export default function AgentsSolve() {
  const challenges = [
    {
      title: "Complex Integration Challenges",
      description: "Legacy automation methods often rely on rigid, outdated techniques, making them fragile and limiting their ability to integrate effectively with complex, multi-system workflows.",
      icon: <Layers className="text-[#FF3366]" size={28} />
    },
    {
      title: "Scalability Issues",
      description: "Scaling legacy automation tools presents significant challenges in orchestration, maintenance, and security. The tools often lack the sophistication needed to efficiently manage large-scale operations.",
      icon: <Maximize className="text-[#FF3366]" size={28} />
    },
    {
      title: "Difficulty with Dynamic Data",
      description: "Outdated automation approaches struggle with dynamic or unstructured data, limiting their effectiveness in adapting to diverse, data-rich environments.",
      icon: <Database className="text-[#FF3366]" size={28} />
    },
    {
      title: "Limited Learning Capabilities",
      description: "Static automation systems do not improve over time, relying on fixed rules, which diminishes their effectiveness in rapidly evolving business landscapes.",
      icon: <BrainCircuit className="text-[#FF3366]" size={28} />
    }
  ];

  return (
    <section className="bg-black py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-white text-center font-bold mb-16 text-sm uppercase tracking-widest">
          Agents solve
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-900/20 border border-purple-500/20 rounded-[24px] p-10 hover:border-purple-500/40 transition-all group"
            >
              <div className="mb-8">
                {item.icon}
              </div>
              <h3 className="text-white text-3xl font-bold mb-6">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
