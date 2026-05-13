import React from 'react';
import Image from 'next/image';

const reasons = [
  { name: "Multi-Platform Testing", desc: "Mobile | API | Web | Desktop", pos: "lg:top-[0%] lg:left-[10%]" },
  { name: "Flexible Deployment", desc: "On-Prem | Local Hosted | Hybrid", pos: "lg:top-[0%] lg:right-[10%]" },
  { name: "Real Device Access", desc: "Real Device over SaaS | Device Rack (Hardware)", pos: "lg:top-[40%] lg:left-[2%]" },
  { name: "Secure & Automated", desc: "Secured Access | OTP/Code Automation", pos: "lg:top-[40%] lg:right-[2%]" },
  { name: "AI-Driven Insights", desc: "Intelligent Reporting | Anomaly Detection", pos: "lg:bottom-[5%] lg:left-[10%]" },
  { name: "Scale with Ease", desc: "Parallel Execution | Cloud Elasticity", pos: "lg:bottom-[5%] lg:right-[10%]" }
];

export default function MeetAgents() {
  return (
    <section className="w-full px-6 md:px-12 py-20 text-center relative overflow-hidden bg-black">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">
        Why Choose cliQTest?
      </h2>
      
      <div className="relative w-full max-w-7xl mx-auto min-h-[600px] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
        {/* Central Brand Area */}
        <div className="relative lg:absolute w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center z-0 order-first lg:order-none">
          <div className="relative w-full h-full animate-float">
            <Image
              src="/assets/brain.png"
              alt="Cliqtest AI Brain"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="absolute -bottom-8 lg:-bottom-10 text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">The Cliqtest Advantage</span>
        </div>
        
        {/* Floating Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:block w-full gap-6 z-10">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className={`lg:absolute ${reason.pos} flex flex-col items-center group transition-all duration-300`}
            >
              <div className="bg-white rounded-full px-6 md:px-8 py-3 mb-4 flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-all duration-300 whitespace-nowrap">
                <div className="w-5 h-5 rounded-full bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF]">
                  <span className="text-[10px]">✦</span>
                </div>
                <span className="text-black font-bold text-[14px] md:text-[16px] tracking-tight">{reason.name}</span>
              </div>
              <p className="text-[#00F2B0] text-xs md:text-sm font-semibold max-w-[220px] leading-snug drop-shadow-sm text-center">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
