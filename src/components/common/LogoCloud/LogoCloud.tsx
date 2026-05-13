"use client";

import React from 'react';

export default function LogoCloud() {
  const logos = [
    { name: "ServiceNow", font: "font-serif" },
    { name: "McAfee", font: "font-sans font-black" },
    { name: "uponor", font: "font-sans lowercase" },
    { name: "banjo", font: "font-sans lowercase font-light" },
    { name: "norstella", font: "font-serif italic" },
    { name: "Syneos", font: "font-sans font-bold" },
    { name: "pwc", font: "font-serif font-bold lowercase" },
    { name: "MARKEL", font: "font-sans uppercase font-black tracking-widest" },
    { name: "GE HealthCare", font: "font-sans font-bold" },
    { name: "alight", font: "font-sans lowercase" },
    { name: "MacArthur Foundation", font: "font-serif italic" }
  ];

  return (
    <section className="bg-white py-20 px-12 lg:px-24 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-zinc-900 text-center text-xl md:text-2xl font-semibold mb-16 tracking-tight">
          Trusted by the World&apos;s Boldest Engineering Teams
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-12 items-center justify-items-center opacity-40 grayscale hover:opacity-100 transition-all">
          {logos.map((logo, i) => (
            <div key={i} className={`text-zinc-900 ${logo.font} text-lg md:text-xl whitespace-nowrap cursor-default`}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
