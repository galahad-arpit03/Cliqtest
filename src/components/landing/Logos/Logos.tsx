import React from 'react';

export default function Logos() {
  const integrations = ["Jira", "Docker", "AWS", "Jenkins", "Git", "VS Code"];
  
  return (
    <section className="w-full px-6 md:px-12 py-20 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-16 tracking-tight">
          Trusted by the World&apos;s Boldest Engineering Teams
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all">
          {integrations.map((item, i) => (
            <div key={i} className="text-white font-bold text-xl md:text-2xl tracking-tighter hover:opacity-100 transition-opacity cursor-default">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
