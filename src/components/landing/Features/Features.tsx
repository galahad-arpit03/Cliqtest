import React from 'react';

const features = [
  { title: "Real-time Analytics", desc: "Monitor your test suites as they execute with live streaming logs.", icon: "⚡" },
  { title: "AI-Driven Insights", desc: "Identify bottlenecks and flaky tests automatically using ML.", icon: "🤖" },
  { title: "Cloud Integration", desc: "Connect with AWS, Azure, or GCP in a single click for scaling.", icon: "☁️" }
];

export default function Features() {
  return (
    <section className="relative z-10 w-full max-w-5xl px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {features.map((feature, i) => (
          <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-purple-500/30 transition-colors group">
            <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
