"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const categorizedStories = [
  {
    category: "Banking",
    stories: [
      { company: "Axis Bank", role: "Axis Bank Team", quote: "Axis Bank adopted ApMoSys’s innovative solutions as part of their digital transformation journey. The partnership enabled smooth deployment of tailored technology that aligned with their strategic goals, significantly boosting operational efficiency and streamlining key banking functions across their ecosystem.", logo: "" },
      { company: "Bank of Maharashtra", role: "Bank of Maharashtra Team", quote: "ApMoSys deployed the Netraa Lighthouse Synthetic Monitoring platform for Bank of Maharashtra, ensuring end-to-end uptime visibility, faster incident detection, and improved digital channel reliability.", logo: "/clients/bank-of-maharashtra.svg" },
      { company: "UCO Bank", role: "UCO Bank Team", quote: "ApMoSys implemented its cliQTest and Netraa APM solution for UCO Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.", logo: "/clients/uco-bank.svg" },
      { company: "RBL Bank", role: "RBL Bank Team", quote: "ApMoSys implemented its cliQTest solution for RBL Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.", logo: "/clients/rbl-bank.svg" },
      { company: "ABCD Bank", role: "ABCD Bank Team", quote: "ApMoSys implemented its cliQTest solution for ABCD Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.", logo: "/clients/abcd-bank.png" },
      { company: "IDBI Bank", role: "IDBI Bank Team", quote: "ApMoSys implemented its cliQTest and Netraa solution for IDBI Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.", logo: "/clients/idbi-bank.svg" }
    ]
  },
  {
    category: "FinTech & Payments",
    stories: [
      { company: "CRIS", role: "CRIS Team", quote: "CRIS leveraged ApMoSys’s cliQTest platform to streamline their testing processes. The platform’s robust automation capabilities and user-friendly interface significantly improved test accuracy and speed, empowering the team to deliver quality software with greater efficiency and confidence across projects.", logo: "" },
      { company: "Protean", role: "Protean Team", quote: "ApMoSys implemented its Netraa Lighthouse Synthetic Monitoring solution for Protean eGov Technologies, enabling continuous availability checks, proactive performance alerts, and seamless digital experience assurance.", logo: "/clients/protean.svg" },
      { company: "NSDL Payments Bank", role: "NSDL Payments Bank Team", quote: "ApMoSys implemented its cliQTest solution for NSDL Payments Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.", logo: "/clients/nsdl-bank.png" }
    ]
  },
  {
    category: "Financial Services",
    stories: [
      { company: "Muscat Finance", role: "Muscat Finance Team", quote: "We collaborated with ApMoSys on their FinXplore OCR automation platform and were impressed by their expertise and dedicated support. Their team delivered tailored solutions that aligned perfectly with our needs, ensuring smooth integration and enhancing our operational efficiency.", logo: "" },
      { company: "L&T Finance", role: "L&T Finance Team", quote: "ApMoSys deployed the Netraa Lighthouse Synthetic Monitoring platform for L&T Finance, ensuring end-to-end uptime visibility, faster incident detection, and improved digital channel reliability.", logo: "/clients/lt.svg" }
    ]
  },
  {
    category: "Insurance",
    stories: [
      { company: "Generali Central Life Insurance", role: "GCLI Team", quote: "ApMoSys implemented its Netraa APM solution for Generali Central Life Insurance, enabling real-time performance visibility, faster issue resolution, and improved system reliability.", logo: "/clients/Generali_Central_Life_Insurance_Company_Limited.svg" }
    ]
  },
  {
    category: "Pharma",
    stories: [
      { company: "FDC", role: "FDC Team", quote: "ApMoSys implemented its Netraa APM solution for FDC India, enabling real-time performance visibility, faster issue resolution, and improved system reliability.", logo: "/clients/fdc.jpeg" }
    ]
  }
];

const testimonialsData = categorizedStories.flatMap(cat => cat.stories);

export default function ClientsContent() {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  // Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
        // Delay to ensure elements are rendered
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-8">
      
      {/* Success Stories Section has been moved to Solutions */}
      {/* Testimonials Marquee Section */}
      <section id="testimonials">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0%); }
          }
        `}} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold text-white mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Testimonials</span></h2>
          
          <div className="relative w-full flex flex-col gap-6 overflow-hidden group/marquee py-4">
            {/* Fade gradients for edges */}
            <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            {/* Row 1 */}
            <div 
              className="flex items-center w-max gap-6 px-4 group-hover/marquee:[animation-play-state:paused]"
              style={{ animation: 'scroll-left 100s linear infinite' }}
            >
              {[...testimonialsData.slice(0, 7), ...testimonialsData.slice(0, 7), ...testimonialsData.slice(0, 7)].map((item, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="w-[300px] md:w-[400px] shrink-0 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group/card shadow-2xl hover:border-[#6843B7]/30 hover:bg-[#0c0c16] transition-all duration-300 flex flex-col justify-between hover:scale-105 hover:z-20 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6843B7] to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  <p className="text-white/60 text-sm md:text-base leading-relaxed relative z-10 mb-6 italic whitespace-normal line-clamp-3 group-hover/card:line-clamp-none transition-all duration-300">
                    "{item.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10 mt-auto whitespace-normal">
                    <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden relative">
                      {item.logo ? (
                        <Image src={item.logo} alt={item.company} fill className="object-contain p-2" />
                      ) : (
                        <span className="text-white/40 text-xs font-bold uppercase">{item.company.substring(0, 2)}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{item.company}</h4>
                      <p className="text-[#6843B7] text-xs font-medium uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div 
              className="flex items-center w-max gap-6 px-4 group-hover/marquee:[animation-play-state:paused]"
              style={{ animation: 'scroll-right 120s linear infinite' }}
            >
              {[...testimonialsData.slice(7), ...testimonialsData.slice(7), ...testimonialsData.slice(7)].map((item, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="w-[300px] md:w-[400px] shrink-0 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group/card shadow-2xl hover:border-[#6843B7]/30 hover:bg-[#0c0c16] transition-all duration-300 flex flex-col justify-between hover:scale-105 hover:z-20 cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#6843B7] to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  <p className="text-white/60 text-sm md:text-base leading-relaxed relative z-10 mb-6 italic whitespace-normal line-clamp-3 group-hover/card:line-clamp-none transition-all duration-300">
                    "{item.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10 mt-auto whitespace-normal">
                    <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden relative">
                      {item.logo ? (
                        <Image src={item.logo} alt={item.company} fill className="object-contain p-2" />
                      ) : (
                        <span className="text-white/40 text-xs font-bold uppercase">{item.company.substring(0, 2)}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{item.company}</h4>
                      <p className="text-[#6843B7] text-xs font-medium uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
