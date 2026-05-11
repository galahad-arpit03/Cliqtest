import React from 'react';

export default function Platform() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-32 text-center">
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
        The Cliqtest Agentic Platform
      </h2>
      
      <p className="text-2xl md:text-4xl text-[#10B981] font-medium mb-10 leading-tight">
        Built to end brittle testing once and for all
      </p>

      <div className="max-w-4xl mx-auto">
        <p className="text-zinc-400 text-lg mb-12">
          The world doesn&apos;t need another automation tool. It needs a revolution.
        </p>
        
        <p className="text-zinc-300 text-xl md:text-2xl leading-relaxed font-light">
          Cliqtest is the first <span className="text-white font-bold">AI-native testing platform</span> powered by specialized agents that think, adapt, and act. 
          These aren&apos;t scripts or plug-ins, they are intelligent systems built to eliminate the grind of test creation and maintenance, 
          so engineering teams can finally move at the speed of innovation.
        </p>
      </div>
    </section>
  );
}
