import React from 'react';

export default function Hero() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-32 pb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Stop running tests. <br />
            Start driving quality.
          </h1>
          
          <p className="text-xl md:text-2xl text-[#10B981] font-medium mb-10 leading-tight">
            Built for teams who want to ship faster and <br className="hidden md:block" />
            never look back.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-20 font-rubik">
            <button className="px-8 py-3.5 rounded-full border-2 border-[#00A3FF] text-[#00A3FF] font-bold text-sm tracking-widest uppercase hover:bg-[#00A3FF]/10 transition-all">
              Platform Overview
            </button>
            <button className="px-10 py-3.5 rounded-full bg-[#00A3FF] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#0092E6] transition-all shadow-[0_0_20px_rgba(0,163,255,0.4)]">
              Demo
            </button>
          </div>
        </div>

        {/* Right Side Placeholder (for future image) */}
        <div className="flex-1 hidden lg:block" />
      </div>

    </section>
  );
}
