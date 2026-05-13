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
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-16 tracking-tight">
          One Platform, <span className="text-[#00AEEF]">Affordable Pricing</span>, Limitless Testing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative bg-black p-6 md:p-8 flex flex-col border-[1.5px] transition-all duration-300 ${
                tier.highlighted 
                ? 'border-[#915BFF] ring-1 ring-[#915BFF]/50 shadow-[0_0_30px_rgba(145,91,255,0.1)]' 
                : 'border-white/40 hover:border-white/60'
              }`}
              style={{ borderRadius: '8px' }}
            >
              {/* Highlight Ribbon for Elite */}
              {tier.highlighted && (
                <div className="absolute top-0 left-0 overflow-hidden w-16 h-16 md:w-20 md:h-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-[#915BFF] origin-top-left -rotate-45 -translate-x-[70%] -translate-y-[70%] shadow-lg" />
                  <Check size={12} className="absolute top-1 left-1 md:top-1.5 md:left-1.5 text-white z-10" strokeWidth={3} />
                </div>
              )}

              {/* Header Section */}
              <div className="text-center mb-8">
                <h3 className="text-[40px] md:text-[52px] font-extralight text-[#7B8EDF] mb-6 tracking-tight">
                  {tier.name}
                </h3>
                
                {/* Tagline Pill */}
                <div className="border border-[#00F2B0]/40 rounded-[12px] bg-[#0A0A0A] p-3 md:p-4 min-h-[64px] md:min-h-[72px] flex items-center justify-center">
                  <span className="text-[11px] md:text-[12px] text-[#00F2B0] font-semibold leading-relaxed tracking-wide text-center">
                    {tier.tagline}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-5 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 items-start group">
                    <Check size={16} className="shrink-0 mt-1 text-white" strokeWidth={2.5} />
                    <span className="text-white text-[14px] leading-snug font-normal opacity-90">
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
