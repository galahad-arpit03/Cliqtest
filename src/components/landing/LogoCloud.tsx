"use client";

import React from 'react';

export default function LogoCloud() {
  const logos = [
    "CONDUENT", "servicenow", "uponor", "McAfee", "banjo", "norstella",
    "Syneos", "pwc", "MARKEL", "GE HealthCare", "alight", "MacArthur Foundation"
  ];

  return (
    <section className="bg-black py-24 px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-white text-center text-2xl md:text-3xl font-medium mb-20">
          Trusted by the World's Boldest Engineering Teams
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-70">
          {logos.map((logo) => (
            <div key={logo} className="text-white font-bold text-xl md:text-2xl whitespace-nowrap">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
