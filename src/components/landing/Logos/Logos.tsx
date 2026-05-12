import React from 'react';

const partners = [
  "CONDUENT", "servicenow", "Uponor", "McAfee", "banjo", "norstella",
  "Syneos", "pwc", "MARKEL", "GE HealthCare", "alight", "MacArthur Foundation"
];

export default function Logos() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-20">
      <p className="text-zinc-400 text-xl font-medium tracking-wide text-center mb-16">
        Trusted by the World&apos;s Boldest Engineering Teams
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all">
        {partners.map((partner, i) => (
          <div key={i} className="text-white font-bold text-lg tracking-tighter hover:opacity-100 transition-opacity cursor-default">
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}
