import React from 'react';

const smallCards = [
  {
    title: "50+ Enterprises",
    desc: "Trusted by global leaders to automate their most critical workflows and ensure seamless user experiences at scale.",
    img: "/assets/enterprise.png",
    fallbackBg: "bg-gradient-to-br from-cyan-50 to-blue-100",
    icon: "🏢",
    href: "#"
  },
  {
    title: "4+ Platform Support",
    desc: "Comprehensive coverage for Web, Mobile, API, and Desktop testing in one intelligent ecosystem.",
    img: "/assets/platform.png",
    fallbackBg: "bg-gradient-to-br from-indigo-50 to-purple-100",
    icon: "🌐",
    href: "#"
  },
  {
    title: "10,000+ Device Supports",
    desc: "Test on real devices and browsers to ensure perfection on every screen and operating system.",
    img: "/assets/devices.png",
    fallbackBg: "bg-gradient-to-br from-fuchsia-50 to-pink-100",
    icon: "📱",
    href: "#"
  }
];

export default function Resources() {
  return (
    <section className="w-full bg-white text-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a2e] mb-2">
            Platform Impact
          </h2>
          <p className="text-[#00A3FF] text-sm font-semibold uppercase tracking-[0.2em]">
            Driving the future of QA
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left: Featured Large Card */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white cursor-pointer group">
            {/* Featured Image */}
            <div className="relative w-full h-[260px] md:h-[300px] bg-gradient-to-br from-indigo-100 via-purple-50 to-fuchsia-100 overflow-hidden flex items-center justify-center">
              <div className="text-9xl opacity-20 select-none">📊</div>
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
            </div>

            {/* Featured Text Content */}
            <div className="p-8 md:p-10 flex flex-col gap-4 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-tight tracking-tight">
                12,000+<br />Test Runs
              </h3>
              <p className="text-zinc-500 text-[15px] leading-relaxed font-normal flex-1">
                Scale your quality engineering with a platform built for massive parallel execution and enterprise-grade reliability. Run thousands of tests simultaneously without compromising speed or accuracy.
              </p>
              <div className="text-[#7B5CF5] font-semibold text-sm hover:underline cursor-pointer group-hover:text-[#6d4de8] transition-colors">
                Learn More
              </div>
            </div>
          </div>

          {/* Right: Three Stacked Cards */}
          <div className="flex flex-col gap-4">
            {smallCards.map((card, i) => (
              <div
                key={i}
                className="flex flex-row rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className={`relative w-[140px] md:w-[160px] flex-shrink-0 ${card.fallbackBg} flex items-center justify-center overflow-hidden`}>
                  <span className="text-5xl opacity-30 select-none">{card.icon}</span>
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                </div>

                {/* Card Text */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[#1a1a2e] mb-2 leading-snug tracking-tight group-hover:text-[#7B5CF5] transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-zinc-500 text-[13px] md:text-[14px] leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                  </div>
                  <div className="text-[#7B5CF5] font-semibold text-sm mt-3 hover:underline cursor-pointer group-hover:text-[#6d4de8] transition-colors">
                    Learn More
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
