"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    title: "Real-Device Lab",
    description: "Access a wide range of real devices, including smartphones and tablets via a SaaS platform. Conduct cross-browser and cross-device testing for comprehensive coverage with real-time monitoring and debugging capabilities.",
    img: "/assets/68e97727a405c7cd4f58ca37_card-test-horizontal-stack.webp",
  },
  {
    title: "Integrated Test Management",
    description: "Centralized dashboard for planning, tracking, and managing test cycles. Detailed reporting and analytics to generate actionable insights with support for team collaboration via role-based access.",
    img: "/assets/6852f436ba19260e1e1f1bfe_card-agent-action.webp",
  },
  {
    title: "Scalability and Flexibility",
    description: "Seamless scalability to handle diverse testing needs. Integration with CI/CD pipelines for automated workflows and customizable workflows to align with unique business requirements.",
    img: "/assets/66fc49416a607a9c02f4bd04_card-tall-complex-flows-hq-p-500.webp",
  }
];

export default function AboutPlatform() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-black text-center text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          cliQTest Core Features
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: Large Featured Card */}
          <div className="relative">
            {/* Big Image */}
            <div className="w-full aspect-[4/5] md:aspect-[4/4.5] rounded-[24px] overflow-hidden relative shadow-xl bg-zinc-900">
              <Image
                src="/assets/brain.png"
                alt="cliQTest Platform Overview"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
 
            {/* Floating Info Card — responsive positioning */}
            <div className="absolute bottom-[-10px] right-[-10px] md:bottom-[-20px] md:right-[-20px] w-[260px] xs:w-[280px] md:w-[320px] bg-white rounded-[20px] p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-zinc-100 z-10">
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3 leading-snug">
                No-Code Automation Engine
              </h3>
              <p className="text-zinc-500 text-[12px] md:text-[13px] mb-3 md:mb-4 leading-relaxed">
                Create, execute, and manage test cases without writing a single line of code.
              </p>
              <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-5">
                {[
                  "Intuitive drag-and-drop interface for faster test creation.",
                  "Supports reusable test components for streamlined processes."
                ].map((li, i) => (
                  <li key={i} className="flex gap-2 text-[12px] md:text-[13px] text-[#00AEEF] font-semibold leading-snug">
                    <span className="mt-0.5">•</span>
                    {li}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#00AEEF] font-bold text-[10px] md:text-[11px] uppercase tracking-widest hover:gap-3 transition-all">
                Learn More <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Right: Stack of 3 Cards */}
          <div className="flex flex-col gap-5 mt-24 lg:mt-0">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] border border-zinc-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] transition-all flex gap-5 items-start p-5 group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="shrink-0 w-[110px] h-[100px] rounded-xl overflow-hidden bg-zinc-100 relative">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 flex flex-col justify-between min-h-[100px]">
                  <div>
                    <h4 className="text-base font-bold text-black mb-2 leading-snug group-hover:text-[#00AEEF] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-zinc-500 text-[13px] leading-relaxed line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                  <button className="flex items-center gap-1.5 text-[#00AEEF] font-bold text-[10px] uppercase tracking-widest mt-3 hover:gap-2.5 transition-all">
                    Learn More <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
