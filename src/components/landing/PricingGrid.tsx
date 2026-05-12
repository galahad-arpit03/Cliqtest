"use client";

import React from 'react';
import { Check } from 'lucide-react';

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
    <section className="bg-black py-32 px-12 lg:px-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-24 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            One Platform, Affordable Pricing, Limitless Testing
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-[32px] p-8 flex flex-col border transition-all duration-500 hover:scale-[1.02] ${
                tier.highlighted 
                ? 'border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.15)] bg-purple-500/5' 
                : 'border-white/10 bg-zinc-900/40 hover:border-white/20'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-4xl font-light text-white/90 mb-8">{tier.name}</h3>
                <div className="inline-block p-[1px] bg-gradient-to-r from-[#00F2B0] to-[#00AEEF] rounded-full">
                  <div className="bg-black/90 px-6 py-2 rounded-full">
                    <span className="text-[11px] text-[#00F2B0] font-bold leading-tight block text-center">
                      {tier.tagline}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-6 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-4 items-start group">
                    <Check size={18} className={`shrink-0 mt-0.5 ${tier.highlighted ? 'text-purple-400' : 'text-white/40'}`} />
                    <span className="text-zinc-400 text-[13px] leading-relaxed group-hover:text-white/90 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
