import React from 'react';
import Image from 'next/image';

const reasons = [
  { name: "Multi-Platform Testing", desc: "Mobile | API | Web | Desktop", pos: "top-[0%] left-[5%]" },
  { name: "Flexible Deployment", desc: "On-Prem | Local Hosted | Hybrid", pos: "top-[0%] right-[5%]" },
  { name: "Real Device Access", desc: "Real Device over SaaS | Device Rack (Hardware)", pos: "top-[40%] left-[-10%]" },
  { name: "Secure & Automated", desc: "Secured Access | OTP/Code Automation", pos: "top-[40%] right-[-10%]" },
  { name: "AI-Driven Insights", desc: "Intelligent Reporting | Anomaly Detection", pos: "bottom-[5%] left-[5%]" },
  { name: "Scale with Ease", desc: "Parallel Execution | Cloud Elasticity", pos: "bottom-[5%] right-[5%]" }
];

export default function MeetAgents() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-40 text-center relative overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-32 tracking-tight">
        Why Choose cliQTest?
      </h2>
      
      <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
        {/* Central Brand Area */}
        <div className="absolute w-[450px] h-[450px] flex items-center justify-center">
          <div className="relative w-full h-full animate-float">
            <Image
              src="/assets/brain.png"
              alt="Cliqtest AI Brain"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="absolute -bottom-12 text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">The Cliqtest Advantage</span>
        </div>
        
        {/* Floating Reason Cards */}
        {reasons.map((reason, i) => (
          <div key={i} className={`absolute ${reason.pos} flex flex-col items-center group z-10`}>
            <div className="bg-white rounded-full px-8 py-3.5 mb-4 flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-all duration-300 whitespace-nowrap">
              <div className="w-5 h-5 rounded-full bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF]">
                <span className="text-[10px]">✦</span>
              </div>
              <span className="text-black font-bold text-[16px] tracking-tight">{reason.name}</span>
            </div>
            <p className="text-[#00F2B0] text-sm font-semibold max-w-[220px] leading-snug drop-shadow-sm">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
