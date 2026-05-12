"use client";

import React from 'react';

export default function AboutSecurity() {
  return (
    <section className="bg-white py-32 px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-black text-4xl md:text-5xl font-medium mb-12">
          Enterprise Scale and Security
        </h2>
        <p className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-24 max-w-3xl mx-auto">
          Functionize works with the world's largest enterprises. They trust our security, reliability and scalability. We invest heavily in the security of our cloud systems to ensure world-class support for our customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-items-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-32 h-32 border-4 border-black rounded-full flex flex-col items-center justify-center p-4">
              <span className="text-[10px] font-bold text-center leading-tight">AICPA Service Organization Control Reports</span>
              <span className="text-xl font-black">SOC 2</span>
            </div>
            <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">SOC 2 Audit Certification</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
               <h3 className="text-4xl font-black italic tracking-tighter">WhiteHat</h3>
               <span className="text-sm font-black tracking-[0.4em] uppercase -mt-2">SECURITY</span>
            </div>
            <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Continuous Vulnerability Scanning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
