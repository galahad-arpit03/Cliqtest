"use client";
import { useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Cpu, ArrowRight, Activity, Building, Lock, Briefcase, Zap, Globe, Target } from 'lucide-react';

export default function PartnersContent() {
  // Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  const coreCapabilities = [
    {
      icon: Cpu,
      title: "Artificial Intelligence",
      desc: "Developing intelligent solutions that enhance automation, decision-making, predictive analytics, and business efficiency."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      desc: "Providing comprehensive security strategies, threat management, risk assessment, and digital trust solutions for modern enterprises."
    },
    {
      icon: Activity,
      title: "Digital Transformation",
      desc: "Helping organizations modernize legacy systems, optimize processes, and accelerate innovation through technology adoption."
    },
    {
      icon: Building,
      title: "FinTech Solutions",
      desc: "Building secure, scalable, and innovative technology solutions for financial institutions and digital banking ecosystems."
    },
    {
      icon: Lock,
      title: "Governance & Compliance",
      desc: "Supporting organizations with regulatory compliance, governance frameworks, risk management, and operational controls."
    },
    {
      icon: Briefcase,
      title: "Technology Consulting",
      desc: "Delivering strategic guidance, technology roadmaps, architecture consulting, and enterprise modernization initiatives."
    }
  ];

  const partnershipValues = [
    {
      icon: Zap,
      title: "Innovation-Driven Solutions",
      desc: "Combining expertise in emerging technologies, AI, and enterprise engineering to create impactful business outcomes."
    },
    {
      icon: Shield,
      title: "Security-First Approach",
      desc: "Integrating cybersecurity best practices into every stage of digital transformation and technology implementation."
    },
    {
      icon: Target,
      title: "Enterprise Scalability",
      desc: "Designing robust, future-ready solutions that support business growth and evolving operational requirements."
    },
    {
      icon: Globe,
      title: "Cross-Industry Expertise",
      desc: "Leveraging experience across technology, financial services, enterprise operations, and digital innovation initiatives."
    }
  ];

  const highlights = [
    "AI-Powered Enterprise Solutions",
    "Cybersecurity & Risk Management",
    "Digital Transformation Programs",
    "Technology Strategy & Consulting",
    "Governance & Compliance Enablement",
    "Emerging Technology Adoption",
    "Enterprise Modernization Initiatives",
    "Secure Digital Innovation Frameworks"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
      
      {/* Intro Header & Logo Section */}
      <section className="mb-24 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 bg-app-surface border border-app-border rounded-md p-8 lg:p-16 shadow-sm relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6843B7]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="lg:w-1/2 flex flex-col gap-6 relative z-10">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6843B7]/10 border border-[#6843B7]/20 text-[#6843B7] text-xs font-bold uppercase tracking-widest w-fit">
              Strategic Technology Partner
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-app-fg tracking-tight leading-tight">
              Accelerating Secure Digital Transformation Through Innovation
            </h2>
            <p className="text-lg text-app-fg/70 leading-relaxed font-light">
              Apmosys Technologies partners with YesPanchi to deliver cutting-edge solutions across Artificial Intelligence, Cybersecurity, Digital Transformation, and Enterprise Technology Consulting. Together, we help organizations modernize operations, strengthen security, and build scalable, future-ready digital ecosystems.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center relative z-10">
            <div className="relative w-full max-w-[320px] aspect-square bg-white rounded-md shadow-xl flex items-center justify-center p-12 transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6843B7]/5 to-transparent rounded-md pointer-events-none" />
              <Image 
                src="/logos/yespanchi-logo.jpg" 
                alt="YesPanchi Logo" 
                fill 
                className="object-contain p-8 mix-blend-multiply"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About YesPanchi */}
      <section className="mb-24 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-[#6843B7] uppercase tracking-widest mb-4">About YesPanchi</h3>
          <p className="text-xl md:text-2xl text-app-fg/80 leading-relaxed font-light">
            YesPanchi Tech Services Pvt. Ltd. is a technology consulting and cybersecurity company focused on enabling digital innovation through advanced technologies and strategic advisory services. With expertise spanning Artificial Intelligence, Cybersecurity, FinTech, Governance, Compliance, and Enterprise Transformation, YesPanchi helps organizations navigate complex digital challenges while maintaining security, resilience, and operational excellence.
          </p>
        </motion.div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6843B7] to-purple-400 bg-clip-text text-transparent mb-4">Core Capabilities</h2>
          <p className="text-app-fg/60 text-lg max-w-2xl mx-auto">Driving enterprise success across critical technological domains.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-app-surface border border-app-border p-8 rounded-md hover:border-[#6843B7]/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-[#6843B7]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cap.icon className="w-6 h-6 text-[#6843B7]" />
              </div>
              <h3 className="text-xl font-bold text-app-fg mb-3">{cap.title}</h3>
              <p className="text-app-fg/70 leading-relaxed font-light">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partnership Value & Highlights */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6843B7] to-purple-400 bg-clip-text text-transparent mb-4">Partnership Value</h2>
            <p className="text-app-fg/60 text-lg">Delivering exceptional results through shared expertise.</p>
          </div>
          
          <div className="space-y-6">
            {partnershipValues.map((val, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-app-surface border border-app-border flex items-center justify-center">
                    <val.icon className="w-4 h-4 text-[#6843B7]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-app-fg mb-1">{val.title}</h4>
                  <p className="text-app-fg/70 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#6843B7] text-white p-10 md:p-12 rounded-md relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8">Partnership Highlights</h3>
            <ul className="space-y-4">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <span className="font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Why This Partnership Matters & CTA */}
      <section className="max-w-4xl mx-auto text-center border-t border-app-border pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6843B7] to-purple-400 bg-clip-text text-transparent mb-6">Why This Partnership Matters</h2>
          <p className="text-lg text-app-fg/70 leading-relaxed font-light mb-16">
            The collaboration between Apmosys and YesPanchi brings together deep technical expertise, strategic consulting capabilities, and a shared commitment to innovation. By combining strengths in AI, cybersecurity, and enterprise transformation, we empower organizations to achieve sustainable growth, operational excellence, and long-term digital success.
          </p>

          <div className="bg-app-surface border border-[#6843B7]/20 p-10 rounded-md">
            <h3 className="text-2xl font-bold text-app-fg mb-4">Build the Future with Apmosys & YesPanchi</h3>
            <p className="text-app-fg/60 mb-8 max-w-2xl mx-auto">
              Unlock new opportunities through secure, intelligent, and scalable technology solutions. Partner with us to accelerate innovation, strengthen resilience, and drive meaningful business transformation.
            </p>
            <Link href="/book-a-demo">
              <button className="px-8 py-3 bg-[#6843B7] text-white text-[14px] font-medium rounded-sm hover:bg-[#6843B7] transition-all shadow-[0_10px_30px_rgba(104,67,183,0.3)] hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto">
                Book a Demo <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
