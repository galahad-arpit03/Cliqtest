import { Activity, Globe, Layers, Map, MonitorSmartphone, Smartphone, TerminalSquare, Wifi, Zap } from 'lucide-react';

const features = [
  {
    id: 'protean-device-farm',
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
    id: 'performance-tracking-(app-profiling)',
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

export default features;