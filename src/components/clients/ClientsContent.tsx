"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ClientsContent() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      
      {/* Success Stories Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Stories</span>
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-white/60 text-base leading-relaxed">
              cliQTest has successfully enabled organizations across Banking, Financial Services, Insurance, Retail, Transportation, Telecom, Enterprise CRM, and Capital Markets to modernize quality engineering practices through intelligent automation and centralized testing ecosystems. By automating complex workflows, enabling real-device validation, improving regression efficiency, and integrating AI-driven testing capabilities, cliQTest has helped enterprises accelerate releases, improve operational stability, and strengthen customer-facing digital experiences.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Studies</span>
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-white/60 text-base leading-relaxed">
              cliQTest supports a wide range of enterprise use cases including loan origination automation, mobile onboarding and KYC validation, omnichannel banking regression testing, payment workflow automation, insurance policy lifecycle testing, CRM workflow automation, transportation platform validation, AI-driven OTP automation, and API response consistency validation across large-scale enterprise systems. These implementations demonstrate cliQTest’s ability to handle complex, interconnected, and compliance-driven digital ecosystems with improved scalability and execution reliability.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Testimonials</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group shadow-2xl hover:border-[#6843B7]/30 transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6843B7] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                <p className="text-white/60 text-sm leading-relaxed relative z-10 mb-8 italic">
                  "Inputs for Testimonials section to be provided."
                </p>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
                    <span className="text-white/20 text-xs font-bold uppercase">Pic</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Client Name</h4>
                    <p className="text-[#6843B7] text-xs font-medium uppercase tracking-wider">Role / Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
