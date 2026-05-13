import React from 'react';

export default function Features() {
  return (
    <section className="w-full px-12 py-20 text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
        Features of cliQTest.
      </h2>
      
      <p className="text-xl md:text-3xl text-[#00F2B0] font-medium mb-10 leading-tight">
        Streamlining every aspect of test data and project handling.
      </p>

      <div className="w-full mb-14">
        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
          From requirements management to version control, review workflows, user-role management, 
          and test data maintenance, cliQTest ensures seamless collaboration and complete control in one unified platform.
        </p>
      </div>

      <div className="flex justify-center">
        <button className="px-10 py-3 bg-[#00AEEF] text-white text-xs font-bold tracking-[0.2em] rounded-full uppercase shadow-[0_0_20px_rgba(0,174,239,0.4)] hover:scale-105 transition-transform">
          Enterprise App Intelligence
        </button>
      </div>
    </section>
  );
}
