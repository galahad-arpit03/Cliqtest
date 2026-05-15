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
    <section className="bg-black py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#00AEEF] text-sm font-black uppercase tracking-[0.3em] mb-4 block">Pricing Plans</span>
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-6">
            Scalable Solutions for Modern Teams
          </h2>
          <div className="w-24 h-1.5 bg-[#00AEEF] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative p-8 rounded-[32px] border transition-all duration-500 group flex flex-col h-full ${
                tier.highlighted 
                ? 'bg-zinc-900 border-purple-500/50 shadow-[0_20px_50px_rgba(145,91,255,0.1)]' 
                : 'bg-zinc-900/40 border-white/5 hover:border-white/20 hover:bg-zinc-900/60'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-black mb-2 ${tier.highlighted ? 'text-purple-400' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed min-h-[40px]">
                  {tier.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">Contact Us</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.slice(0, 6).map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 items-start group/feat">
                    <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${tier.highlighted ? 'bg-purple-500/20' : 'bg-white/10'}`}>
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-zinc-400 text-[13px] leading-snug group-hover/feat:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-2xl font-bold text-[11px] tracking-widest uppercase transition-all ${
                tier.highlighted 
                ? 'bg-purple-500 text-white hover:bg-purple-600 shadow-lg shadow-purple-500/20' 
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
