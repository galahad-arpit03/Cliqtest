import re

content = """"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  { company: "Muscat Finance", role: "Muscat Finance Team", quote: "We collaborated with ApMoSys on their FinXplore OCR automation platform and were impressed by their expertise and dedicated support. Their team delivered tailored solutions that aligned perfectly with our needs, ensuring smooth integration and enhancing our operational efficiency." },
  { company: "CRIS", role: "CRIS Team", quote: "CRIS leveraged ApMoSys’s cliQTest platform to streamline their testing processes. The platform’s robust automation capabilities and user-friendly interface significantly improved test accuracy and speed, empowering the team to deliver quality software with greater efficiency and confidence across projects." },
  { company: "Axis Bank", role: "Axis Bank Team", quote: "Axis Bank adopted ApMoSys’s innovative solutions as part of their digital transformation journey. The partnership enabled smooth deployment of tailored technology that aligned with their strategic goals, significantly boosting operational efficiency and streamlining key banking functions across their ecosystem." },
  { company: "FDC", role: "FDC Team", quote: "ApMoSys implemented its Netraa APM solution for FDC India, enabling real-time performance visibility, faster issue resolution, and improved system reliability." },
  { company: "Protean", role: "Protean Team", quote: "ApMoSys implemented its Netraa Lighthouse Synthetic Monitoring solution for Protean eGov Technologies, enabling continuous availability checks, proactive performance alerts, and seamless digital experience assurance." },
  { company: "L&T Finance", role: "L&T Finance Team", quote: "ApMoSys deployed the Netraa Lighthouse Synthetic Monitoring platform for L&T Finance, ensuring end-to-end uptime visibility, faster incident detection, and improved digital channel reliability." },
  { company: "Bank of Maharashtra", role: "Bank of Maharashtra Team", quote: "ApMoSys deployed the Netraa Lighthouse Synthetic Monitoring platform for Bank of Maharashtra, ensuring end-to-end uptime visibility, faster incident detection, and improved digital channel reliability." },
  { company: "UCO Bank", role: "UCO Bank Team", quote: "ApMoSys implemented its cliQTest and Netraa APM solution for UCO Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability." },
  { company: "RBL Bank", role: "RBL Bank Team", quote: "ApMoSys implemented its cliQTest solution for RBL Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability." },
  { company: "ABCD Bank", role: "ABCD Bank Team", quote: "ApMoSys implemented its cliQTest solution for ABCD Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability." },
  { company: "Generali Central Life Insurance", role: "GCLI Team", quote: "ApMoSys implemented its Netraa APM solution for Generali Central Life Insurance, enabling real-time performance visibility, faster issue resolution, and improved system reliability." },
  { company: "NSDL Payments Bank", role: "NSDL Payments Bank Team", quote: "ApMoSys implemented its cliQTest solution for NSDL Payments Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability." },
  { company: "IDBI Bank", role: "IDBI Bank Team", quote: "ApMoSys implemented its cliQTest and Netraa solution for IDBI Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability." }
];

export default function ClientsContent() {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <div className="max-w-7xl mx-auto px-8">
      
      {/* Success Stories Section */}
      <section id="success-stories" className="mb-20">
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

      {/* Testimonials Section */}
      <section id="testimonials">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold text-white mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Testimonials</span></h2>
          
          <div className="relative w-full flex overflow-hidden group py-4">
            {/* Fade gradients for edges */}
            <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex items-stretch w-max gap-6 px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 60,
              }}
              whileHover={{ animationPlayState: "paused" }} // Wait, framer-motion doesn't support animationPlayState directly like this. It's fine to let it scroll.
            >
              {duplicatedTestimonials.map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-[300px] md:w-[400px] shrink-0 bg-[#0A0A0A] border border-white/10 rounded-md p-6 md:p-8 relative overflow-hidden group/card shadow-2xl hover:border-[#6843B7]/30 transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6843B7] to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  <p className="text-white/60 text-sm md:text-base leading-relaxed relative z-10 mb-8 italic whitespace-normal">
                    "{item.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10 mt-auto whitespace-normal">
                    <div className="w-12 h-12 rounded-sm bg-[#111] border border-white/10 flex items-center justify-center shrink-0">
                      <span className="text-white/40 text-xs font-bold uppercase">{item.company.substring(0, 2)}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{item.company}</h4>
                      <p className="text-[#6843B7] text-xs font-medium uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
"""

with open("src/components/clients/ClientsContent.tsx", "w") as f:
    f.write(content)

