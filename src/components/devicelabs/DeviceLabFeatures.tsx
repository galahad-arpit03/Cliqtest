"use client";

import React from 'react';
import { Smartphone, Zap, Map, TerminalSquare, Wifi, Activity, Globe, MonitorSmartphone, Layers } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    id: 'device-lab',
    label: 'Device Lab',
    title: 'Protean Device Farm',
    icon: Smartphone,
    theme: "from-[#6843B7] to-[#8f81eb]",
    accent: "bg-[#6843B7]",
    textAccent: "text-[#6843B7]",
    desc: [
      "Protean is cliQTest's advanced Device Lab Management Platform designed to simplify and scale end-to-end mobile and web application testing on real devices through a unified cloud-based ecosystem. The platform provides remote access to physical devices across multiple brands, operating systems, screen sizes, and configurations while integrating automation, observability, debugging, and performance analysis into a single interface.",
      "Protean eliminates the operational challenges associated with maintaining physical device labs, handling OTP and SIM-based workflows, reproducing device-specific issues, and debugging application crashes by enabling centralized real-device execution, live streaming, shell-level access, session recording, and intelligent reporting.",
    ],
    benefits: [
      "Remote access to global real devices",
      "Unified cloud-based testing ecosystem",
      "Centralized real-device execution & live streaming",
      "OTP and SIM-based workflow handling"
    ]
  },
  {
    id: 'mobile-automation',
    label: 'Mobile Automation',
    title: 'Mobile Automation',
    icon: Zap,
    theme: "from-[#00F2B0] to-[#ffffff]",
    accent: "bg-[#00F2B0]",
    textAccent: "text-[#00F2B0]",
    desc: [
      "Protean simplifies mobile automation through an intelligent low-code/no-code automation framework that enables teams to create, execute, and manage mobile test scripts seamlessly across real devices and environments. The platform supports streamlined device onboarding, application configuration, reusable automation workflows, and recorder-based script generation that significantly reduce manual scripting effort and accelerate automation adoption.",
      "By automatically capturing user interactions and converting them into structured executable test cases, Protean enables teams to build scalable automation workflows without requiring extensive coding expertise."
    ],
    benefits: [
      "Low-code/no-code mobile automation",
      "Recorder-based script generation",
      "Reusable automation workflows",
      "Automated capture of user interactions"
    ]
  },
  {
    id: 'parallel-execution',
    label: 'Parallel Execution',
    title: 'Parallel Execution',
    icon: Layers,
    theme: "from-[#6843B7] to-[#8f81eb]",
    accent: "bg-[#6843B7]",
    textAccent: "text-[#6843B7]",
    desc: [
      "Protean enables high-speed parallel execution across multiple real devices, operating systems, and configurations simultaneously, allowing organizations to drastically reduce testing timelines and accelerate release cycles.",
      "By executing multiple test scenarios concurrently, teams can improve validation coverage, optimize resource utilization, and ensure faster feedback across large-scale mobile testing environments. This scalable execution architecture enhances testing efficiency while supporting continuous integration and rapid delivery pipelines."
    ],
    benefits: [
      "Simultaneous execution across devices & OS",
      "Drastically reduced testing timelines",
      "Optimized resource utilization",
      "Scalable CI/CD pipeline integration"
    ]
  },
  {
    id: 'geolocation-testing',
    label: 'Geolocation Testing',
    title: 'Geolocation Testing',
    icon: Map,
    theme: "from-[#00F2B0] to-[#ffffff]",
    accent: "bg-[#00F2B0]",
    textAccent: "text-[#00F2B0]",
    desc: [
      "Protean provides advanced geolocation testing capabilities that allow teams to validate location-based application behavior across different geographic regions and environments without requiring physical device movement.",
      "The platform simulates region-specific scenarios such as location-sensitive services, language variations, local content delivery, and geo-restricted workflows to ensure consistent user experiences across global markets. This capability is especially valuable for fintech, e-commerce, logistics, and travel applications that rely heavily on location intelligence."
    ],
    benefits: [
      "Validate location-based application behavior",
      "Simulate geo-restricted workflows",
      "No physical device movement required",
      "Ideal for fintech, logistics, and e-commerce"
    ]
  },
  {
    id: 'interactive-debugging',
    label: 'Interactive Debugging',
    title: 'Interactive Debugging',
    icon: TerminalSquare,
    theme: "from-[#6843B7] to-[#8f81eb]",
    accent: "bg-[#6843B7]",
    textAccent: "text-[#6843B7]",
    desc: [
      "Protean enhances troubleshooting efficiency through interactive debugging capabilities that provide real-time device visibility, shell access, execution insights, and live monitoring during test execution.",
      "Teams can analyze application behavior, inspect device states, monitor runtime activities, and identify root causes instantly without relying on delayed logs or disconnected debugging tools. By combining live streaming, real-time diagnostics, and centralized observability, Protean significantly accelerates issue identification and resolution across mobile testing workflows."
    ],
    benefits: [
      "Real-time device visibility & shell access",
      "Live monitoring during execution",
      "Instant root cause identification",
      "Centralized observability & diagnostics"
    ]
  },
  {
    id: 'network-throttling',
    label: 'Network Throttling',
    title: 'Network Throttling',
    icon: Wifi,
    theme: "from-[#00F2B0] to-[#ffffff]",
    accent: "bg-[#00F2B0]",
    textAccent: "text-[#00F2B0]",
    desc: [
      "Protean supports intelligent network throttling that enables teams to simulate varying network conditions such as low bandwidth, unstable connectivity, latency spikes, and slow mobile networks during application testing.",
      "This allows organizations to validate application responsiveness, stability, and user experience under real-world network scenarios before production deployment. By testing applications under constrained network environments, Protean helps identify performance bottlenecks, optimize application behavior, and improve reliability across diverse user conditions."
    ],
    benefits: [
      "Simulate low bandwidth and latency spikes",
      "Validate responsiveness under constrained networks",
      "Identify real-world performance bottlenecks",
      "Improve global reliability"
    ]
  },
  {
    id: 'performance-tracking',
    label: 'App Profiling',
    title: 'Performance Tracking',
    icon: Activity,
    theme: "from-[#6843B7] to-[#8f81eb]",
    accent: "bg-[#6843B7]",
    textAccent: "text-[#6843B7]",
    desc: [
      "Protean delivers advanced application performance tracking and profiling capabilities that provide deep visibility into CPU usage, memory consumption, battery utilization, response times, and application behavior during execution.",
      "The platform enables teams to monitor performance trends, detect resource bottlenecks, analyze crashes, and identify optimization opportunities across mobile applications and devices. With real-time profiling insights and centralized observability, Protean helps organizations improve application stability, optimize performance, and deliver seamless digital experiences across production environments."
    ],
    benefits: [
      "Deep visibility into CPU, memory & battery",
      "Monitor response times and app behavior",
      "Analyze crashes and resource bottlenecks",
      "Real-time profiling insights"
    ]
  },
  {
    id: 'browser-testing',
    label: 'Browser Testing',
    title: 'Browser Testing',
    icon: Globe,
    theme: "from-[#00F2B0] to-[#ffffff]",
    accent: "bg-[#00F2B0]",
    textAccent: "text-[#00F2B0]",
    desc: [
      "cliQTest supports enterprise-grade browser testing across leading browsers including Chrome, Firefox, Safari, Edge, and other modern browser environments. The platform enables teams to validate application compatibility, responsiveness, UI behavior, and functionality across diverse browser configurations.",
      "Cross-browser execution capabilities help organizations identify rendering inconsistencies, browser-specific defects, and user experience issues before production deployment. Teams can execute tests in parallel across multiple browser combinations, significantly reducing testing timelines while improving validation coverage.",
    ],
    benefits: [
      "Enterprise-grade cross-browser compatibility",
      "Parallel execution across multiple browsers",
      "Identify rendering inconsistencies instantly",
      "Detailed insights into browser-specific failures"
    ]
  },
  {
    id: 'cross-platform',
    label: 'Cross Platform',
    title: 'Cross Platform Testing',
    icon: MonitorSmartphone,
    theme: "from-[#6843B7] to-[#8f81eb]",
    accent: "bg-[#6843B7]",
    textAccent: "text-[#6843B7]",
    desc: [
      "cliQTest provides a unified testing ecosystem that supports validation across web, mobile, desktop, and API applications through a single centralized platform. This cross-platform capability ensures consistent quality validation across multiple technologies, devices, environments, and operating systems.",
      "Organizations can standardize testing workflows, execution strategies, reporting mechanisms, and governance models across all application layers, eliminating the need for fragmented testing tools and disconnected processes.",
      "By supporting integrated execution across diverse platforms, cliQTest improves operational efficiency, enhances collaboration between teams, and enables enterprises to achieve scalable, future-ready quality engineering practices."
    ],
    benefits: [
      "Unified testing across Web, Mobile, Desktop & API",
      "Standardized testing workflows and governance",
      "Eliminates fragmented testing tools",
      "Scalable, future-ready quality engineering"
    ]
  }
];

export default function DeviceLabFeatures() {
  return (
    <div className="bg-[#050505] text-white py-20 flex flex-col gap-8">
      {/* Header Section */}
      <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
          Real Devices. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Real Results.</span>
        </h2>
        <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
          Access a global cloud of physical devices to execute end-to-end mobile and web validation with zero latency and enterprise-grade observability.
        </p>
      </div>

      {features.map((feat, idx) => {
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = feat.theme === "from-[#6843B7] to-[#8f81eb]";
        const accentColor = isPurple ? "#6843B7" : "#00F2B0";
        const gradientClass = feat.theme;
        
        const Icon = feat.icon;

        return (
          <section key={feat.id} id={feat.id} className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[520px]">
                
                {/* Left Column Stack */}
                <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Visual Demo Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none" 
                      style={{ background: `linear-gradient(45deg,transparent 25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'} 50%,transparent 75%)`}} 
                    />
                    {/* Mock data lines */}
                    <div className="absolute inset-0 flex flex-col gap-3 p-6 opacity-[0.08] pointer-events-none overflow-hidden justify-center">
                      <div className="h-2 w-full bg-white rounded-full" />
                      <div className="h-2 w-3/4 bg-white rounded-full" />
                      <div className="h-2 w-5/6 bg-white rounded-full" />
                      <div className="h-2 w-1/2 bg-white rounded-full" />
                      <div className="h-2 w-full bg-white rounded-full" />
                      <div className="h-2 w-2/3 bg-white rounded-full" />
                    </div>
                    <Icon size={80} color={accentColor} className="opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                  </motion.div>
                  
                  {/* Benefits Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group"
                  >
                    <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-md shadow-[0_0_10px]" style={{ backgroundColor: accentColor, color: accentColor }} />
                      Key Capabilities
                    </h4>
                    <div className="space-y-4">
                      {feat.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                          <div className="shrink-0 mt-0.5" style={{ color: accentColor }}>✓</div>
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 flex flex-col justify-center ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="absolute top-0 inset-x-0 h-px opacity-50" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(-90deg,transparent 0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'} 50%,transparent 100%)`}} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                      {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                    </h2>
                    
                    <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                      {feat.desc.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    
                    {/* Metrics Strip */}
                    <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">500+</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Real Devices</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">Zero</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Latency</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">Global</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Availability</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">100%</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Secure</span>
                      </div>
                    </div>
                    
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
