"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingGrid() {
  const tiers = [
    {
      name: "Edge",
      tagline: "Begin your testing journey with a zero-cost platform.",
      features: [
        "Access to Test Management Module.",
        "1 User and 1 Device for Manual Testing.",
        "Manual Testing on Browsers and Real Devices (200 minutes/month).",
        "Unlimited Test Case Creation and Documentation.",
        "Standard Security.",
        "24x7 Email and Chat Support."
      ]
    },
    {
      name: "Flex",
      tagline: "Go beyond manual testing with scripting capabilities.",
      features: [
        "5 Users, 2 Scripting Licenses and 1 device.",
        "3 Test Management Licenses.",
        "Unlimited Manual Testing on Browsers and Real Devices.",
        "Unlimited Scriptless Test Case Creation and Execution (Chrome Browser).",
        "Device Onboarding Available (At Additional Cost).",
        "Integration with JIRA.",
        "Built-In Element Inspector.",
        "Install Apps on Mobile Devices.",
        "4 Hours Device Usage.",
        "24x7 Email and Chat Support."
      ]
    },
    {
      name: "Pro",
      tagline: "End-to-end automation with limitless possibilities.",
      features: [
        "Custom Users, Support Scripting and Execution Licenses.",
        "Unlimited Scriptless Test Case Creation and Execution (Mobile/Browser/API).",
        "Appium and Selenium Test Case Import/Export.",
        "Tests Powered by Autoheal.",
        "Visual Testing and Integration with CI/CD Tools.",
        "App Performance Metrics for Deep Insights.",
        "Local Execution of Automation Scripts with Local Automation Log.",
        "Support Parallel Execution."
      ]
    },
    {
      name: "Elite",
      tagline: "Tailored for large-scale enterprises – test without limits.",
      highlighted: true,
      features: [
        "Device Reservation, Allocation, and Management.",
        "Mobile App Test Automation and Visual Regression Testing.",
        "In-Built Performance Metrics and Logs for Apps.",
        "Network Throttling and MDM Support.",
        "Scriptless Automation.",
        "Integrations with JIRA, Slack, LDAP, MFA, SSO, and More.",
        "Local and Device Logs, Video Recordings, and API Access."
      ]
    }
  ];

  return (
    <section className="bg-[#050505] py-24 px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#6843B7]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-[#00F2B0]/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">Pricing Plans</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Scalable Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Modern Teams</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#6843B7] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative p-8 rounded-md transition-all duration-500 group flex flex-col h-full ${
                tier.highlighted 
                ? 'bg-[#0A0A0A] border-2 border-[#6843B7] shadow-[0_0_40px_rgba(104,67,183,0.15)]' 
                : 'bg-[#0A0A0A] border border-white/10 hover:border-white/20 hover:bg-[#0C0C0C]'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#6843B7] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(104,67,183,0.4)] whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <p className="text-white/60 text-xs font-medium leading-relaxed min-h-[40px]">
                  {tier.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">Contact Us</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 items-start group/feat">
                    <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${tier.highlighted ? 'bg-[#6843B7]/20' : 'bg-white/10'}`}>
                      <Check size={10} className={tier.highlighted ? "text-[#6843B7]" : "text-white/70"} strokeWidth={3} />
                    </div>
                    <span className="text-white/70 text-[13px] leading-snug group-hover/feat:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-sm font-semibold text-[14px] transition-all ${
                tier.highlighted 
                ? 'bg-[#6843B7] text-white hover:bg-[#6843B7]/90 shadow-[0_0_20px_rgba(104,67,183,0.3)]' 
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
