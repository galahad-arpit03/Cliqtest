import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: "No-Code Automation",
    description: "With record-and-playback and no-code/low-code capabilities, cliQTest makes testing accessible and effortless for technical and non-technical users.",
    image: "/assets/6852f436ba19260e1e1f1bfe_card-agent-action.webp",
    color: "bg-purple-500/10"
  },
  {
    title: "Device Lab",
    description: "Access real devices to test your applications for compatibility, performance, and reliability across platforms.",
    image: "/assets/68e97727a405c7cd4f58ca37_card-test-horizontal-stack.webp",
    color: "bg-blue-500/10"
  },
  {
    title: "Centralized Management",
    description: "Streamline testing data storage and analysis with a unified, secure, and collaborative management system.",
    image: "/assets/66fc49416a607a9c02f4bd04_card-tall-complex-flows-hq-p-500.webp",
    color: "bg-cyan-500/10"
  }
];

export default function CloudFirst() {
  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      {/* Radial Gradient Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #33016184 0%, transparent 70%)',
          opacity: 0.6
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Features of cliQTest.
        </h2>
        
        <p className="text-lg md:text-xl text-[#00F2B0] font-medium mb-10 max-w-4xl mx-auto leading-relaxed">
          From requirements management to version control, review workflows, user-role management, and test data maintenance, cliQTest streamlines every aspect of test data and project handling, ensuring seamless collaboration and complete control in one unified platform.
        </p>

        <div className="flex justify-center mb-20">
          <button className="px-8 py-3 rounded-full bg-[#00AEEF] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#0092E6] transition-all font-rubik shadow-[0_0_15px_rgba(0,174,239,0.3)]">
            Enterprise App Intelligence
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col group text-left">
              <div className={`w-full aspect-[16/10] rounded-[32px] mb-8 ${feature.color} border border-white/5 transition-all duration-700 group-hover:border-[#00AEEF]/40 relative overflow-hidden shadow-xl`}>
                 {/* High-fidelity Zoomed Image */}
                 <div className="absolute inset-0 z-0">
                   <Image
                     src={feature.image}
                     alt={feature.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                   />
                 </div>
                 
                 {/* Subtle Overlay */}
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              </div>

              <div className="px-2">
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-[#00AEEF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
