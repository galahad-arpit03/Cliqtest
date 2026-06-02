"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function LeadershipContent() {
  const executives = [
    { name: "Executive Name", role: "Chief Executive Officer" },
    { name: "Executive Name", role: "Chief Technology Officer" },
    { name: "Executive Name", role: "Chief Operating Officer" },
    { name: "Executive Name", role: "Chief Product Officer" },
  ];

  const boardMembers = [
    { name: "Board Member", role: "Independent Director" },
    { name: "Board Member", role: "Chairman of the Board" },
    { name: "Board Member", role: "Board Member" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8">
      
      {/* Executive Team Section */}
      <section className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Team</span></h2>
          <div className="max-w-4xl text-white/60 text-base leading-relaxed mb-16 space-y-4">
            <p>
              cliQTest is driven by a leadership team with deep expertise in enterprise technology, digital transformation, automation engineering, and large-scale quality assurance initiatives. The leadership team brings together extensive experience across Banking, Financial Services, Insurance, Enterprise Applications, Mobility, and AI-driven automation ecosystems.
            </p>
            <p>
              With a strong focus on innovation, scalability, and customer success, the executive team continues to guide cliQTest toward becoming a next-generation intelligent quality engineering platform for global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executives.map((exec, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-white/10 rounded-md overflow-hidden group shadow-xl">
                <div className="w-full aspect-[4/5] bg-[#111] relative overflow-hidden">
                  {/* Placeholder Image Space */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6843B7]/20 to-[#0A0A0A] group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold uppercase tracking-widest text-xs">
                    Photo Space
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{exec.name}</h3>
                  <p className="text-[#6843B7] text-sm font-medium">{exec.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Board of Directors Section */}
      <section className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Board of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Directors</span></h2>
          <p className="text-white/60 text-base leading-relaxed mb-16 max-w-4xl">
            Inputs for Board of Directors section to be provided.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-white/10 rounded-md overflow-hidden group shadow-xl">
                <div className="w-full aspect-[4/5] bg-[#111] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#00F2B0]/10 to-[#0A0A0A] group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold uppercase tracking-widest text-xs">
                    Photo Space
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-white/40 text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Investors Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Investors</span></h2>
          <p className="text-white/60 text-base leading-relaxed mb-16 max-w-4xl">
            Inputs for Investors section to be provided.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-[#0A0A0A] border border-white/10 rounded-md h-32 flex items-center justify-center group hover:border-[#6843B7]/30 hover:bg-[#6843B7]/5 transition-all duration-300 shadow-xl cursor-pointer">
                <div className="text-white/20 font-bold tracking-widest uppercase text-sm group-hover:text-white/50 transition-colors">
                  Investor Logo
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
