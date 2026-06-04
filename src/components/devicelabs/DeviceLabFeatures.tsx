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
      "With capabilities such as parallel execution, geolocation testing, network throttling, interactive debugging, performance profiling, and real-time log monitoring, Protean empowers enterprise teams to execute reliable, scalable, and production-ready mobile testing workflows with improved visibility and faster issue resolution."
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
      "By automatically capturing user interactions and converting them into structured executable test cases, Protean enables teams to build scalable automation workflows without requiring extensive coding expertise. Combined with real-device execution, OTP handling, debugging visibility, and centralized reporting, Protean delivers faster mobile test execution, improved automation reliability, and enterprise-grade scalability for modern mobile application ecosystems."
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
      "Integrated reporting and execution analytics provide detailed insights into browser-specific failures, enabling faster debugging, improved release confidence, and consistent digital experiences for end users."
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
    <div className="bg-[#050505] text-white flex flex-col font-sans overflow-x-hidden">
      
      {/* Sub-Navbar */}
      <div className="sticky top-20 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-y border-white/10 text-white/70 py-4 px-8 flex justify-start sm:justify-center gap-6 sm:gap-10 text-[10px] sm:text-xs font-medium tracking-widest uppercase overflow-x-auto whitespace-nowrap shadow-xl">
        {features.map((f) => (
          <a key={f.id} href={`#${f.id}`} className="hover:text-[#00F2B0] transition-colors">{f.label}</a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col gap-32">
        
        {features.map((feat, idx) => {
          const isEven = idx % 2 === 0;
          const words = feat.title.split(' ');
          const firstWord = words[0];
          const restWords = words.slice(1).join(' ');
          
          return (
            <section key={feat.id} id={feat.id} className="scroll-mt-32">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${feat.theme}`}>{restWords}</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg md:text-xl mb-12 max-w-4xl">
                {feat.desc[0]}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                <div className={`flex flex-col h-full ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="space-y-6 text-white/60 leading-relaxed">
                    {feat.desc.slice(1).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-8">
                    <div className="bg-white/5 border border-white/10 rounded-md p-6">
                      <h4 className="text-white font-medium mb-5 flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-md ${feat.accent} shadow-[0_0_10px_currentColor]`} style={{ color: feat.accent === 'bg-[#6843B7]' ? '#6843B7' : '#00F2B0' }} />
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                        {feat.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                            <div className={`mt-0.5 font-medium ${feat.textAccent}`}>✓</div>
                            <span className="leading-snug">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual Card */}
                <div className={`bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex flex-col justify-center min-h-[400px] ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className={`absolute top-0 right-0 w-64 h-64 ${feat.accent === 'bg-[#6843B7]' ? 'bg-[#6843B7]' : 'bg-[#00F2B0]'} opacity-10 blur-[80px] rounded-md pointer-events-none`} />
                  <div className={`absolute bottom-0 left-0 w-48 h-48 ${feat.accent === 'bg-[#6843B7]' ? 'bg-[#00F2B0]' : 'bg-[#6843B7]'} opacity-5 blur-[60px] rounded-md pointer-events-none`} />
                  
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-8 group">
                    <div className="relative w-48 h-48 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center hover:border-white/20 transition-all duration-500">
                      <feat.icon size={80} className={`${feat.textAccent} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700`} />
                      <div className="absolute w-full h-full animate-[spin_10s_linear_infinite] pointer-events-none">
                        <div className={`absolute top-0 left-0 w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] ${feat.accent}`} style={{ color: feat.accent === 'bg-[#6843B7]' ? '#6843B7' : '#00F2B0' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
