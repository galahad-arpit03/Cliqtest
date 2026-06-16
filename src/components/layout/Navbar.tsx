"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { blogsData } from '@/data/blogs';
import { useLandingModeStore } from "@/store/themeStore";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Plus,
  Minus,
  Zap,
  Globe,
  Database,
  Cpu,
  ShieldCheck,
  Sun,
  Moon
} from 'lucide-react';

interface Feature {
  label: string;
  desc: string;
}

interface NavTab {
  id: string;
  label: string;
  href?: string;
  title?: string;
  description?: string;
  intro?: string;
  header?: string;
  features?: Feature[];
  icon?: React.ElementType;
}

export interface MenuItem {
  title: string;
  href?: string;
  dropdownType?: string;
  content?: {
    tabs: NavTab[];
  };
}

export const menuItems: MenuItem[] = [
  {
    title: "Platform",
    dropdownType: "tabbed",
    content: {
      tabs: [
        {
          id: "test-management",
          label: "Test Management",
          header: "Centralized Quality Operations",
          intro: "Streamline your entire quality operations through a powerful, centralized hub. From precision test planning to full requirement traceability and comprehensive version control, our management suite brings absolute clarity and governance to your entire testing lifecycle.",
          icon: Globe,
          features: [
            { label: "Test Cases", desc: "Comprehensive case authoring." },
            { label: "Test Suites", desc: "Organize and group test scenarios." },
            { label: "Test Plans", desc: "Strategic testing blueprints." },
            { label: "Traceability", desc: "End-to-end requirement mapping." },
            { label: "Test Data Management", desc: "Centralized data control." },
            { label: "Dynamic Reports", desc: "Real-time actionable insights." },
            { label: "Live Logs & Debugging", desc: "Instant issue identification." },
            { label: "Manual Test Operations", desc: "Track manual executions." },
            { label: "Smart Bug Raiser", desc: "Automated defect logging." }
          ]
        },


        {
          id: "devicelabs",
          label: "Device Labs",
          header: "Enterprise Device Lab",
          intro: "Deploy your applications with absolute confidence by testing securely across thousands of real devices, browsers, and platforms. Leverage deep performance diagnostics and real-time live debugging to ensure a flawless experience for every single user, everywhere.",
          icon: Cpu,
          features: [
            { label: "Protean Device Farm", desc: "Extensive real device network." },
            { label: "Mobile Automation", desc: "Native and hybrid app testing." },
            { label: "Parallel Execution", desc: "Concurrent testing capabilities." },
            { label: "Geolocation Testing", desc: "Location-aware validation." },
            { label: "Interactive Debugging", desc: "Real-time remote access." },
            { label: "Network Throttling", desc: "Simulate bandwidth conditions." },
            { label: "Performance Tracking (App Profiling)", desc: "Deep application profiling." },
            { label: "Browser Testing", desc: "Cross-browser compatibility." },
            { label: "Cross Platform", desc: "Unified multi-platform support." },
          ]
        },
        {
          id: "nocode",
          label: "No Code Automation",
          header: "Autonomous Test Generation",
          intro: "Empower your entire organization with autonomous, intelligent test generation. Our advanced visual recorder and predictive self-healing locators seamlessly automate complex testing scenarios across Web, Mobile, API, and Desktop environments without writing a single line of code.",
          icon: Zap,
          features: [
            { label: "Recorder", desc: "Intelligent visual recording." },
            { label: "Scriptless Automation", desc: "No coding required." },
            { label: "Reusable Components", desc: "Modular test design." },
            { label: "AI Auto-Healing", desc: "Self-repairing test execution." },
            { label: "API Automation", desc: "Seamless API testing." },
            { label: "Desktop Automation", desc: "Desktop application support." },
            { label: "Smart Authentication", desc: "Handle complex logins." },
            { label: "Environment Management", desc: "Manage configurations." },
            { label: "Distributed Execution", desc: "Scale across nodes." }
          ]
        },
        {
          id: "analytics",
          label: "Analytics & Reporting",
          header: "Unified Analytics",
          intro: "Transform raw testing data into actionable, strategic intelligence. Our unified analytics engine provides highly customizable, real-time dashboards and automated reports that instantly identify bottlenecks and dramatically optimize your execution performance.",
          icon: Database,
          features: [
            { label: "Execution Analytics", desc: "Detailed run statistics." },
            { label: "Visual Dashboards", desc: "Interactive data visualization." },
            { label: "Execution History", desc: "Comprehensive historical logs." },
            { label: "Tree View Reporting", desc: "Hierarchical test results." },
            { label: "Real-Time Monitoring", desc: "Live operational insights." },
            { label: "Failure Analysis", desc: "Intelligent error categorization." },
            { label: "Customizable Reports", desc: "Tailored stakeholder updates." },
            { label: "Quality Trend Analysis", desc: "Long-term quality tracking." },
            { label: "Audit & Compliance Reporting", desc: "Regulatory readiness." },
            { label: "Quality Metrics", desc: "Standardized QA measurements." }
          ]
        },
        {
          id: "ai-capabilities",
          label: "AI Capabilities",
          header: "Next-Gen AI Intelligence",
          intro: "Harness the absolute cutting edge of artificial intelligence to supercharge your quality engineering. From smart natural language test generation to pixel-perfect visual validation and predictive failure analysis, our AI acts as a continuous force multiplier for your team.",
          icon: Zap,
          features: [
            { label: "AI Testing & Evaluation", desc: "Intelligent quality assessment." },
            { label: "GenAI Test Case Generation", desc: "Automated scenario creation." },
            { label: "AI Test Data Generator", desc: "Synthetic data provisioning." },
            { label: "AI X-Path Finder", desc: "Smart locator discovery." },
            { label: "Agentic AI Function Generator", desc: "Autonomous function building." },
            { label: "AI-Powered Auto Healing", desc: "Self-correcting test scripts." },
            { label: "MCP Automation", desc: "Machine Control Protocol support." },
            { label: "Agentic Automation", desc: "Goal-driven test execution." },
            { label: "AI SQL Query Agent", desc: "Automated database testing." },
            { label: "AI CAPTCHA Automation", desc: "Intelligent challenge resolution." },
            { label: "AI Report Summarization", desc: "Natural language insights." },
            { label: "AI System Validation", desc: "Comprehensive architecture checks." },
            { label: "Defect Insights", desc: "Root cause analysis." },
            { label: "Smart Recommendations", desc: "Proactive quality suggestions." }
          ]
        }
      ]
    }
  },
  {
    title: "Solutions",
    dropdownType: "tabbed",
    content: {
      tabs: [
        {
          id: "by-team",
          label: "By Team",
          header: "Empowering Every Team",
          intro: "We specifically engineer our platform to empower every single member of your software development lifecycle. Whether you are scaling QA automation, integrating CI/CD DevOps pipelines, or governing enterprise ecosystems, cliQTest provides the exact tools your team needs to succeed.",
          icon: Zap,
          features: [
            { label: "QA Teams", desc: "Automate complex scenarios and scale your testing." },
            { label: "Automation Engineers", desc: "Build robust frameworks with advanced AI." },
            { label: "DevOps Teams", desc: "Integrate seamlessly with CI/CD pipelines." },
            { label: "Product Teams", desc: "Ensure features meet quality benchmarks." },
            { label: "Enterprises", desc: "Govern your testing ecosystem at scale." }
          ]
        },
        {
          id: "by-use-case",
          label: "By Use Case",
          header: "Comprehensive Coverage",
          intro: "Achieve comprehensive, uncompromised quality coverage across your entire digital portfolio. From functional cross-browser automation and flawless mobile testing to deep API validation and instantaneous regression detection, we handle your most critical testing use cases.",
          icon: Cpu,
          features: [
            { label: "Web Testing", desc: "Automate cross-browser functional testing." },
            { label: "Mobile Testing", desc: "Ensure flawless mobile app experiences." },
            { label: "API Testing", desc: "Validate endpoints, data, and performance." },
            { label: "Desktop Testing", desc: "Test native Windows and macOS applications." },
            { label: "Regression Testing", desc: "Catch regressions instantly with AI visual validation." },
            { label: "Performance Testing", desc: "Analyze application stability under load." },
            { label: "AI Testing", desc: "Evaluate model accuracy and algorithm behavior." }
          ]
        },
        {
          id: "by-industry",
          label: "By Industry",
          header: "Tailored for Your Sector",
          intro: "Our enterprise platform is uniquely tailored to meet the strict demands of your specific sector. We ensure absolute regulatory compliance, rigorous data privacy, and unshakeable transaction reliability for critical industries including FinTech, Healthcare, Retail, and Telecom.",
          icon: Database,
          features: [
            { label: "FinTech", desc: "Ensure secure and compliant financial workflows." },
            { label: "Healthcare", desc: "Maintain HIPAA and data privacy compliance." },
            { label: "Retail", desc: "Ensure smooth customer journeys during peak times." },
            { label: "E-Commerce", desc: "Validate complex carts and user flows." },
            { label: "Telecom", desc: "Test massive networks and billing systems." },
            { label: "Banking", desc: "Secure core banking and transaction platforms." },
            { label: "Insurance", desc: "Automate policy and claims lifecycle testing." },
            { label: "Capital Markets", desc: "High-frequency trade platform validation." },
            { label: "Payments & Remittance", desc: "Secure global payment gateways." },
            { label: "Wealth Management", desc: "Validate investment and portfolio tools." },
            { label: "Enterprise CRM", desc: "Automate Salesforce and SAP testing." },
            { label: "Transportation & Mobility", desc: "Logistics and fleet management QA." },
            { label: "Railway & Reservation Systems", desc: "High-load booking system testing." },
            { label: "Financial Services", desc: "Broad financial application validation." },
            { label: "Public Sector & Government", desc: "Secure citizen and agency portals." },
            { label: "Logistics & Supply Chain", desc: "End-to-end supply chain tracking validation." }
          ]
        },
        {
          id: "success-stories",
          label: "Success Stories",
          header: "Proven Client Success",
          intro: "Discover how leading enterprises across the globe leverage cliQTest to modernize their quality engineering practices through intelligent automation and unified ecosystem capabilities.",
          icon: ShieldCheck,
          features: [
            { label: "Banking", desc: "Axis Bank, Bank of Maharashtra, & more." },
            { label: "FinTech & Payments", desc: "CRIS, Protean, NSDL Payments Bank." },
            { label: "Financial Services", desc: "Muscat Finance, L&T Finance." },
            { label: "Insurance & Pharma", desc: "Generali Central Life Insurance, FDC India." }
          ]
        }
      ]
    }
  },
  {
    title: "Company",
    dropdownType: "tabbed",
    content: {
      tabs: [
        {
          id: "about",
          label: "About Us",
          header: "Company Story",
          intro: "Discover the origins, core values, and ambitious vision that are driving cliQTest to completely redefine the software quality engineering landscape. We are committed to empowering teams globally with a platform that transforms complex testing into a seamless, intelligent, and scalable experience.",
          icon: Zap,
          features: [
            { label: "Our Story", desc: "Discover how we started and where we're going." },
            { label: "Mission", desc: "Our core purpose and aspirations." },
            { label: "Vision", desc: "Our vision for the future of testing." },
            { label: "Core Values", desc: "The principles that guide everything we do." }
          ]
        },
        {
          id: "why-cliqtest",
          label: "Why cliQTest?",
          header: "The cliQTest Advantage",
          intro: "Explore exactly how our AI-native, unified quality engineering platform delivers unparalleled enterprise-grade scalability and performance. By completely transforming traditional testing paradigms, we empower your development teams to dramatically accelerate their release cycles and time-to-market.",
          icon: Globe,
          features: [
            { label: "Unified Quality Engineering Platform", desc: "Centralized testing lifecycle." },
            { label: "AI-Native Automation", desc: "Intelligent, resilient testing." },
            { label: "Enterprise-Grade Scalability", desc: "Built for complex architectures." },
            { label: "Faster Time-to-Market", desc: "Accelerate your release cycles." },
            { label: "Cross-Platform Testing Ecosystem", desc: "Web, Mobile, and API testing." },
            { label: "Intelligent Insights & Reporting", desc: "Data-driven quality metrics." }
          ]
        },
        {
          id: "clients",
          label: "Clients",
          header: "Our Trusted Partners",
          intro: "See how leading global enterprises and innovative startups leverage our comprehensive platform to seamlessly achieve and exceed their quality goals. Read through our glowing testimonials from industry leaders who trust cliQTest every single day.",
          icon: Database,
          features: [
            { label: "Testimonials", desc: "What industry leaders say about us." }
          ]
        },
        {
          id: "partners-alliances",
          label: "Partners & Alliances",
          header: "Stronger Together",
          intro: "Learn about our strategic collaborations and deep technology integrations that create a stronger, more connected, and highly efficient testing ecosystem. We partner with the best in the industry to ensure our platform seamlessly plugs into your existing infrastructure and CI/CD pipelines.",
          icon: Zap,
          features: [
            { label: "Technology Partners", desc: "Integrations that power our platform." },
            // { label: "Strategic Alliances", desc: "Collaborations driving innovation." }
          ]
        }
      ]
    }
  },


  {
    title: "Integrations",
    dropdownType: "tabbed",
    content: {
      tabs: [
        {
          id: "integrations",
          label: "Integrations",
          header: "Seamless Enterprise Integrations",
          intro: "Connect cliQTest with your favorite tools and platforms to create a unified, automated, and highly efficient software development lifecycle.",
          icon: Zap,
          features: [
            { label: "CI/CD Integrations", desc: "Automate testing within your continuous integration pipelines." },
            { label: "Project & Workflow Integrations", desc: "Sync testing data with Jira, Asana, and more." },
            { label: "Device Lab Integrations", desc: "Connect with BrowserStack, Sauce Labs, and others." },
            { label: "TMT Integrations", desc: "Test Management Tool sync and bidirectional updates." },
            { label: "SBOM Integrations", desc: "Software Bill of Materials security and compliance tracking." },
            { label: "CBOM Integrations", desc: "Cloud Bill of Materials visibility and management." },
            { label: "SOC Room Integrations", desc: "Real-time alerts and security operations center sync." },
            { label: "Cloud & Infrastructure Integrations", desc: "AWS, Azure, and Google Cloud native deployments." },
            { label: "API & Automation Integrations", desc: "REST, GraphQL, and extensive webhook support." }
          ]
        }
      ]
    }
  },

  {
    title: "Resources",
    dropdownType: "tabbed",
    content: {
      tabs: [
        {
          id: "blogs",
          label: "Blogs",
          href: "/blogs",
          header: "Our Blog",
          intro: "Read our latest articles, insights, and updates on quality engineering and software testing.",
          features: []
        },
        {
          id: "docs",
          label: "Docs",
          href: "https://docs.cliqtest.com/",
          header: "Documentation",
          intro: "Explore our comprehensive documentation, guides, and API references to get the most out of cliQTest.",
          features: []
        }
      ]
    }
  }
];

export default function Navbar() {
  const pathname = usePathname();

  const { landingThemeMode, toggleLandingThemeMode } = useLandingModeStore();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("test-management");
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 w-full z-[100] bg-app-bg/95 backdrop-blur-md h-[72px] border-b border-app-border shadow-2xl px-8">
        <div className="max-w-7xl mx-auto w-full h-full flex justify-between items-center">

          {/* Left: Logo Section */}
          <div className="flex-1 flex justify-start">
            <Link href="/" onClick={() => setActiveMenu(null)} className="flex items-center gap-2 cursor-pointer group z-[110]">
              <div className="relative w-32 h-10 md:w-36 md:h-11 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logos/logo.png"
                  alt="cliQTest"
                  fill
                  sizes="144px"
                  className="object-cover scale-[1.2] object-center"
                  priority
          unoptimized
                />
              </div>
            </Link>
          </div>
          {/* Center: Main Navigation Group */}
          <div className="hidden lg:flex flex-[2] justify-center items-center gap-6">
            {menuItems.map((item) => {
              const hasDropdown = !!item.content;
              const titleSlug = item.title.toLowerCase().replace(/\s+/g, '-');
              let isActiveRoute = false;
              if (item.href) {
                isActiveRoute = pathname === item.href || pathname.startsWith(item.href + '/');
              } else if (item.content?.tabs?.some((t: NavTab) => t.href?.startsWith('/') && (pathname === t.href || pathname.startsWith(t.href + '/')))) {
                isActiveRoute = true;
              } else if (item.title === 'Integrations') {
                isActiveRoute = pathname === '/integrations' || pathname.startsWith('/integrations/');
              } else {
                isActiveRoute = pathname === `/${titleSlug}` || pathname.startsWith(`/${titleSlug}/`);
              }
              const isHighlighted = activeMenu === item.title || isActiveRoute;

              const ItemLabel = (
                <div className={`flex items-center gap-1 text-[15px] font-medium tracking-wide transition-colors ${isHighlighted ? 'text-[#6843B7]' : 'text-app-fg/70 hover:text-app-fg'
                  }`}>
                  {item.title}
                  {hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === item.title ? 'rotate-180' : ''}`} />}
                </div>
              );

              return (
                <div
                  key={item.title}
                  className="relative h-[72px] flex items-center cursor-pointer"
                  onClick={() => {
                    if (hasDropdown) {
                      if (activeMenu === item.title) {
                        setActiveMenu(null);
                      } else {
                        setActiveMenu(item.title);
                        const featureTabs = item.content?.tabs?.filter((t: NavTab) => !t.description);
                        if (featureTabs && featureTabs.length > 0) {
                          const matchingTab = featureTabs.find((t: NavTab) => {
                            const targetPath = t.href || (item.title === 'Integrations' && t.id === 'integrations' ? '/integrations' : `/${item.title.toLowerCase().replace(/\s+/g, '-')}/${t.id}`);
                            return pathname === targetPath || pathname.startsWith(targetPath + '/');
                          });
                          setActiveTab(matchingTab ? matchingTab.id : featureTabs[0].id);
                          setShowMoreFeatures(false);
                        }
                      }
                    } else {
                      // Direct link, close any open dropdown
                      setActiveMenu(null);
                    }
                  }}
                >
                  {item.href ? (
                    <Link href={item.href}>
                      {ItemLabel}
                    </Link>
                  ) : ItemLabel}

                  {/* Desktop Dropdown - Minimal Theme Matched */}
                  <AnimatePresence>
                    {hasDropdown && activeMenu === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed top-[72px] left-0 w-full z-[120]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="bg-app-bg border-app-border shadow-2xl overflow-hidden flex min-h-[350px]">

                          <div className="w-full flex px-8 max-w-[1600px] mx-auto">
                            {/* Left Column (Tabs) */}
                            <div className="w-[30%] py-10 px-0 flex flex-col border-r border-app-border">
                              {item.content?.tabs?.filter((t: NavTab) => !t.description).map((tab: NavTab) => {
                                const targetPath = tab.href || (item.title === 'Integrations' && tab.id === 'integrations' ? '/integrations' : `/${item.title.toLowerCase().replace(/\s+/g, '-')}/${tab.id}`);
                                const isCurrentRoute = pathname === targetPath || pathname.startsWith(targetPath + '/');
                                const isActive = activeTab === tab.id || (isCurrentRoute && activeTab === null); // if activeTab is null somehow, fallback
                                const isHighlighted = isActive || isCurrentRoute;
                                
                                return (
                                  <Link
                                    href={targetPath}
                                    key={tab.id}
                                    target={tab.href?.startsWith('http') ? '_blank' : undefined}
                                    rel={tab.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    onMouseEnter={() => { setActiveTab(tab.id); setShowMoreFeatures(false); }}
                                    onClick={() => setActiveMenu(null)}
                                    className={`group flex items-center justify-between px-10 py-[14px] transition-all duration-300 cursor-pointer border-l-[3px] ${
                                      isCurrentRoute
                                        ? 'bg-app-fg/5 border-[#6843B7] text-app-fg'
                                        : activeTab === tab.id
                                          ? 'bg-app-fg/5 border-transparent text-[#6843B7]'
                                          : 'text-app-fg/60 hover:bg-app-fg/5 hover:text-[#6843B7] border-transparent'
                                    }`}
                                  >
                                    <span className={`text-[15px] tracking-wide font-medium ${isCurrentRoute || activeTab === tab.id ? 'text-[#6843B7]' : 'text-app-fg/60 group-hover:text-[#6843B7]'}`}>{tab.label}</span>
                                    <ChevronRight size={16} className={`transition-transform duration-300 ${isCurrentRoute || activeTab === tab.id ? 'opacity-100 text-[#6843B7]' : 'opacity-100 text-app-fg/30 group-hover:text-[#6843B7]'}`} />
                                  </Link>
                                );
                              })}
                            </div>                        {/* Right Column (Content) */}
                            <div className="flex-1 py-10 px-16 bg-transparent">
                              <AnimatePresence mode="wait">
                                {item.content?.tabs?.filter((t: NavTab) => !t.description && t.id === activeTab).map((tab: NavTab) => (
                                  <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.15 }}
                                    className="w-full"
                                  >
                                    {tab.intro && (
                                      <p className="text-app-fg/70 text-base leading-relaxed mb-10">
                                        {tab.intro}
                                      </p>
                                    )}
                                    {tab.id === 'blogs' && (
                                      <div className="mb-4">
                                        <h3 className="text-[13px] font-semibold text-app-fg/50 uppercase tracking-widest mb-2">Featured Article</h3>
                                        <Link href={`/blogs/${blogsData[0].slug}`} onClick={() => setActiveMenu(null)} className="group flex gap-6 items-center p-4 -ml-4 rounded-md hover:bg-app-fg/5 transition-colors border border-transparent hover:border-app-border">
                                          <div className="relative w-48 h-32 rounded-md overflow-hidden shrink-0 border border-app-border/50">
                                            <Image src={blogsData[0].image} alt={blogsData[0].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                          </div>
                                        <div className="flex flex-col gap-2.5">
                                          <div className="flex items-center gap-2 text-[12px] text-[#6843B7] font-medium tracking-wide">
                                            <span className="uppercase">{blogsData[0].type}</span>
                                            <span className="w-1 h-1 rounded-full bg-app-fg/20" />
                                            <span className="text-app-fg/40">{blogsData[0].readTime}</span>
                                          </div>
                                          <h4 className="text-app-fg font-semibold text-lg leading-tight group-hover:text-[#6843B7] transition-colors line-clamp-2">{blogsData[0].title}</h4>
                                          <p className="text-app-fg/60 text-sm leading-relaxed line-clamp-2">{blogsData[0].excerpt}</p>
                                        </div>
                                      </Link>
                                      </div>
                                    )}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
                                      {tab.features && (
                                        <>
                                          {tab.features.slice(
                                            showMoreFeatures ? 8 : 0,
                                            showMoreFeatures ? undefined : 8
                                          ).map((feat: { label: string; desc: string }, idx: number) => {
                                            const targetPath = tab.href || (item.title === 'Integrations' && tab.id === 'integrations' ? '/integrations' : `/${item.title.toLowerCase().replace(/\s+/g, '-')}/${tab.id}`);
                                            const targetHash = feat.label.toLowerCase().replace(/\s+/g, '-');

                                            return (
                                              <Link
                                                href={`${targetPath}#${targetHash}`}
                                                onClick={(e) => {
                                                  setActiveMenu(null);
                                                  if (typeof window !== 'undefined' && window.location.pathname === targetPath) {
                                                    const el = document.getElementById(targetHash);
                                                    if (el) {
                                                      e.preventDefault();
                                                      const y = el.getBoundingClientRect().top + window.scrollY - 80;
                                                      window.scrollTo({top: y, behavior: 'smooth'});
                                                      window.history.pushState(null, '', `${targetPath}#${targetHash}`);
                                                    }
                                                  }
                                                }}
                                                key={idx}
                                                className="group/feat flex flex-col gap-1.5 py-2"
                                              >
                                                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff] font-semibold text-[15px] transition-colors">{feat.label}</h4>
                                                <p className="text-app-fg/50 text-[13px] leading-relaxed group-hover/feat:text-app-fg/70 transition-colors line-clamp-2">{feat.desc}</p>
                                              </Link>
                                            )
                                          })}

                                          {tab.features.length > 8 && !showMoreFeatures && (
                                            <button
                                              onClick={() => setShowMoreFeatures(true)}
                                              className="group/feat flex flex-col justify-center items-start gap-1.5 py-2 cursor-pointer h-full"
                                            >
                                              <h4 className="text-[#6843B7] font-semibold text-[15px] transition-colors group-hover/feat:text-app-fg">More <span className="group-hover/feat:translate-x-1 inline-block transition-transform">→</span></h4>
                                              <p className="text-app-fg/30 text-[13px] leading-relaxed group-hover/feat:text-app-fg/50 transition-colors">View remaining features</p>
                                            </button>
                                          )}

                                          {tab.features.length > 8 && showMoreFeatures && (
                                            <button
                                              onClick={() => setShowMoreFeatures(false)}
                                              className="group/feat flex flex-col justify-center items-start gap-1.5 py-2 cursor-pointer h-full"
                                            >
                                              <h4 className="text-[#6843B7] font-semibold text-[15px] transition-colors group-hover/feat:text-app-fg"><span className="group-hover/feat:-translate-x-1 inline-block transition-transform">←</span> Back</h4>
                                              <p className="text-app-fg/30 text-[13px] leading-relaxed group-hover/feat:text-app-fg/50 transition-colors">Return to previous</p>
                                            </button>
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </motion.div>
                                ))}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: Action Buttons & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {mounted && (
              <button
                onClick={toggleLandingThemeMode}
                className="hidden sm:flex items-center justify-center p-2 rounded-full border border-app-border bg-app-bg/60 text-app-fg hover:bg-app-bg/80 transition-all shadow-sm active:scale-95"
                title="Toggle Landing Theme"
              >
                {landingThemeMode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            <Link href="/book-a-demo" className="hidden sm:block">
              <button className="px-5 py-2 bg-[#6843B7] text-white text-[13px] font-medium rounded-sm hover:bg-[#6843B7] transition-all shadow-[0_10px_30px_rgba(104,67,183,0.3)]">
                Book a Demo
              </button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden text-app-fg p-3 bg-app-fg/5 rounded-md hover:bg-app-fg/10 transition-all z-[110] active:scale-90"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Menu Overlay - Solid, High-Fidelity Design */}
      <div className={`fixed inset-0 bg-app-bg z-[150] lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}>
        {/* Top Bar with Close Button */}
        <div className="absolute top-0 w-full h-[72px] px-6 flex justify-between items-center border-b border-app-border">
          <div className="relative w-28 h-8">
            <Image
              src="/logos/logo.png"
              alt="cliQTest"
              fill
              sizes="112px"
              className="object-cover scale-[1.2] object-center"
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-3 bg-app-fg/5 rounded-2xl text-app-fg active:scale-90 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => {
              const hasDropdown = !!item.content;
              const isExpanded = expandedItem === item.title;

              return (
                <div key={item.title} className="flex flex-col border-b border-app-border pb-4 last:border-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font medium text-app-fg hover:text-[#6843B7] transition-colors py-1 tracking-tight"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div
                      className="flex items-center justify-between py-1 cursor-pointer group"
                      onClick={() => setExpandedItem(isExpanded ? null : item.title)}
                    >
                      <span className={`text-2xl font medium transition-colors tracking-tight ${isExpanded ? 'text-[#6843B7]' : 'text-app-fg'}`}>{item.title}</span>
                      {hasDropdown && (
                        <div className={`p-2 rounded-md transition-all ${isExpanded ? 'bg-[#6843B7]/10 rotate-180' : 'bg-app-fg/5'}`}>
                          {isExpanded ? <Minus size={20} className="text-[#6843B7]" /> : <Plus size={20} className="text-app-fg/40" />}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Mobile Dropdown Expanded Accordion */}
                  {hasDropdown && isExpanded && (
                    <div className="flex flex-col gap-4 mt-4 ml-3 border-l-2 border-[#6843B7]/40 pl-5 animate-in slide-in-from-left-4 duration-300">
                      <button
                        onClick={() => setExpandedItem(null)}
                        className="flex items-center gap-1.5 text-[#6843B7] text-[10px] font medium uppercase tracking-widest mb-1"
                      >
                        <ChevronRight size={12} className="rotate-180" /> Back
                      </button>
                      {item.content?.tabs?.map((tab: NavTab) => {
                        const targetPath = tab.href || (item.title === 'Integrations' && tab.id === 'integrations' ? '/integrations' : `/${item.title.toLowerCase().replace(/\s+/g, '-')}/${tab.id}`);
                        const isCurrentRoute = pathname === targetPath || pathname.startsWith(targetPath + '/');
                        return (
                        <Link
                          key={tab.id}
                          href={targetPath}
                          target={tab.href?.startsWith('http') ? '_blank' : undefined}
                          rel={tab.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex flex-col gap-0.5 group active:opacity-70 ${isCurrentRoute ? 'bg-app-fg/5 border-l-2 border-[#6843B7] pl-3 -ml-3 py-1' : ''}`}
                        >
                          <span className={`text-[17px] font medium transition-colors tracking-tight ${isCurrentRoute ? 'text-[#6843B7]' : 'text-app-fg group-hover:text-[#6843B7]'}`}>{tab.label}</span>
                          <span className="text-[11px] text-app-fg/40 leading-relaxed font-normal pr-4 line-clamp-1">{tab.header || tab.description}</span>
                        </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-auto pt-10">
            <div className="flex items-center justify-between mb-8 border-t border-app-border pt-6">
              <span className="text-sm font-semibold text-app-fg tracking-tight">Theme Mode</span>
              {mounted && (
                <button
                  onClick={toggleLandingThemeMode}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-app-border bg-app-surface text-app-fg shadow-sm active:scale-95 transition-all"
                >
                  {landingThemeMode === 'dark' ? (
                    <>
                      <Sun size={16} />
                      <span className="text-xs font-medium">Light</span>
                    </>
                  ) : (
                    <>
                      <Moon size={16} />
                      <span className="text-xs font-medium">Dark</span>
                    </>
                  )}
                </button>
              )}
            </div>
            <Link href="/book-a-demo" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full py-2.5 bg-[#6843B7] text-white text-[13px] font medium rounded-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                Book a Demo
              </button>
            </Link>
            <div className="flex justify-between items-center mt-12 px-2">
              {/* <p className="text-app-fg/10 text-[10px] font medium tracking-[0.4em] uppercase">© 2026 cliQTest</p> */}
              <div className="flex gap-4">
                {/* <div className="w-8 h-px bg-app-fg/10" />
              <div className="w-2 h-px bg-app-fg/10" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
