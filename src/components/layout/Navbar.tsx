"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  Cpu
} from 'lucide-react';

interface Feature {
  label: string;
  desc: string;
}

interface NavTab {
  id: string;
  label: string;
  title?: string;
  description?: string;
  header?: string;
  features?: Feature[];
  icon?: React.ElementType;
}

const menuItems = [
  {
    title: "Platform",
    dropdownType: "tabbed",
    content: {
      tabs: [
        { 
          id: "overview", 
          label: "Platform Overview", 
          title: "Intelligent Testing Infrastructure",
          description: "cliQTest is an innovative platform designed to unify your testing ecosystem. Whether you’re working on websites, mobile apps, or APIs, cliQTest provides a robust, AI-powered environment to conduct automated testing with absolute precision.",
          icon: Globe
        },
        { 
          id: "nocode", 
          label: "No Code Automation", 
          header: "Autonomous Test Generation",
          icon: Zap,
          features: [
            { label: "Record and Play", desc: "Effortlessly automate your tests with our intelligent visual recorder." },
            { label: "Auto Healing", desc: "Ensure flawless execution with predictive self-healing locators." },
            { label: "Cross-Platform", desc: "Seamlessly automate testing across Web, Mobile, API, and Desktop." }
          ]
        },
        { 
          id: "test-management", 
          label: "Test Management", 
          header: "Centralized Quality Operations",
          icon: Globe,
          features: [
            { label: "Test Planning", desc: "Define, track, and manage your testing cycles with precision." },
            { label: "Requirement Traceability", desc: "Link tests to business requirements for full coverage." },
            { label: "Version Control", desc: "Manage test case versions and execution history." }
          ]
        },
        { 
          id: "devicelabs", 
          label: "Device Labs", 
          header: "Enterprise Device Lab",
          icon: Cpu,
          features: [
            { label: "Real Device Cloud", desc: "Test securely on thousands of real devices, browsers, and platforms." },
            { label: "Deep Diagnostics", desc: "Evaluate performance, memory, UI/UX, and native functionality." },
            { label: "Live Debugging", desc: "Access real-time logs and debug insights directly through our console." }
          ]
        },
        { 
          id: "analytics", 
          label: "Analytics & Reporting", 
          header: "Unified Analytics",
          icon: Database,
          features: [
            { label: "Custom Dashboards", desc: "Visualize key metrics and testing trends in real-time." },
            { label: "Actionable Insights", desc: "Identify bottlenecks and optimize test execution performance." },
            { label: "Automated Reporting", desc: "Generate and share comprehensive quality reports instantly." }
          ]
        },
        { 
          id: "ai-capabilities", 
          label: "AI Capabilities", 
          header: "Next-Gen AI Intelligence",
          icon: Zap,
          features: [
            { label: "Smart Test Generation", desc: "Automatically generate test cases from natural language." },
            { label: "Visual Validation", desc: "Detect UI discrepancies with pixel-perfect AI vision." },
            { label: "Predictive Analysis", desc: "Anticipate potential failures before they impact production." }
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
          id: "solutions-overview",
          label: "Solutions Overview",
          title: "Tailored for Your Teams",
          description: "Discover how cliQTest accelerates delivery for every role and industry, from developers and QA engineers to entire enterprises.",
          icon: Globe
        },
        {
          id: "by-team",
          label: "By Team",
          header: "Empowering Every Team",
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
          icon: Cpu,
          features: [
            { label: "Web Testing", desc: "Automate cross-browser functional testing." },
            { label: "Mobile Testing", desc: "Ensure flawless mobile app experiences." },
            { label: "API Testing", desc: "Validate endpoints, data, and performance." },
            { label: "Desktop Testing", desc: "Test native Windows and macOS applications." },
            { label: "Regression Testing", desc: "Catch regressions instantly with AI visual validation." },
            { label: "Performance Testing", desc: "Analyze application stability under load." }
          ]
        },
        {
          id: "by-industry",
          label: "By Industry",
          header: "Tailored for Your Sector",
          icon: Database,
          features: [
            { label: "FinTech", desc: "Ensure compliance, security, and transaction reliability." },
            { label: "Healthcare", desc: "Maintain data privacy and HIPAA regulatory compliance." },
            { label: "Retail", desc: "Ensure smooth customer journeys during peak times." },
            { label: "E-Commerce", desc: "Test complex user journeys and shopping carts reliably." },
            { label: "Telecom", desc: "Test network configurations and customer portals." }
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
          id: "company-overview",
          label: "Company Overview",
          title: "Our Mission",
          description: "We are redefining the future of software quality. Learn more about our vision, our leadership, and the values that drive us forward.",
          icon: Globe
        },
        {
          id: "about-us",
          label: "About Us",
          header: "Company Story",
          icon: Zap,
          features: [
            { label: "Our Story", desc: "Discover how we started and where we're going." },
            { label: "Mission & Vision", desc: "Our core purpose and future aspirations." },
            { label: "Core Values", desc: "The principles that guide everything we do." }
          ]
        },
        {
          id: "leadership",
          label: "Leadership",
          header: "Leadership Profiles",
          icon: Cpu,
          features: [
            { label: "Executive Team", desc: "Meet the people leading our vision." },
            { label: "Board of Directors", desc: "Our advisors and board members." },
            { label: "Investors", desc: "The partners backing our growth." }
          ]
        },
        {
          id: "clients",
          label: "Clients",
          header: "Our Trusted Partners",
          icon: Database,
          features: [
            { label: "Success Stories", desc: "How our clients achieve their goals." },
            { label: "Case Studies", desc: "In-depth looks at our enterprise solutions." },
            { label: "Testimonials", desc: "What industry leaders say about us." }
          ]
        }
      ]
    }
  },
  
  
  {
    title: "Integrations",
    href: "/integrations"
  },
  
  {
    title: "Resources",
    href: "https://docs.cliqtest.com/"
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
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
    <nav ref={navRef} className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled || isMobileMenuOpen 
      ? 'bg-black/95 backdrop-blur-md h-20 border-b border-white/5 shadow-2xl' 
      : 'bg-transparent h-24'
    } px-8`}>
      <div className="max-w-7xl mx-auto w-full h-full flex justify-between items-center">
      
      {/* Left: Logo Section */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group z-[110]">
          <div className="relative w-32 h-10 md:w-36 md:h-11 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo/logo.png"
              alt="cliQTest"
              fill
              className="object-cover scale-[1.2] object-center"
              priority
            />
          </div>
        </Link>
      </div>
      {/* Center: Main Navigation Group */}
      <div className="hidden lg:flex flex-[2] justify-center items-center gap-6">
          {menuItems.map((item) => {
            const hasDropdown = !!item.content;
            
            const ItemLabel = (
              <div className={`flex items-center gap-1 text-[15px] font-medium tracking-wide transition-colors ${
                activeMenu === item.title ? 'text-[#6843B7]' : 'text-white/70 hover:text-white'
              }`}>
                {item.title}
                {hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === item.title ? 'rotate-180' : ''}`} />}
              </div>
            );

            return (
              <div
                key={item.title}
                className="relative h-20 flex items-center cursor-pointer"
                onClick={() => {
                  if (hasDropdown) {
                    if (activeMenu === item.title) {
                      setActiveMenu(null);
                    } else {
                      setActiveMenu(item.title);
                      const featureTabs = item.content?.tabs?.filter((t: NavTab) => !t.description);
                      if (featureTabs && featureTabs.length > 0) {
                        setActiveTab(featureTabs[0].id);
                      }
                    }
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
                    className="fixed top-20 left-0 w-full z-[120]"
                  >
                    <div className="bg-[#030303]/95 backdrop-blur-xl  border-white/5 shadow-2xl overflow-hidden flex min-h-[350px]">
                      
                      <div className="w-full flex px-8 max-w-[1600px] mx-auto">
                        {/* Left Column (Tabs) */}
                        <div className="w-[30%] py-10 px-0 flex flex-col border-r border-white/5">
                          {item.content?.tabs?.filter((t: NavTab) => !t.description).map((tab: NavTab) => {
                            const isActive = activeTab === tab.id;
                            return (
                              <Link
                                href={`/${tab.id}`}
                                key={tab.id}
                                onMouseEnter={() => setActiveTab(tab.id)}
                                onClick={() => setActiveMenu(null)}
                                className={`flex items-center justify-between px-10 py-[14px] transition-all duration-300 cursor-pointer ${
                                  isActive 
                                  ? 'bg-white/5 border-l-[3px] border-[#6843B7] text-white' 
                                  : 'text-white/60 hover:text-white border-l-[3px] border-transparent'
                                }`}
                              >
                                <span className={`text-[15px] tracking-wide font-medium ${isActive ? 'text-[#6843B7]' : 'text-white/60'}`}>{tab.label}</span>
                                <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? 'opacity-100 text-[#6843B7]' : 'opacity-100 text-white/30'}`} />
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
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
                                  {tab.features?.map((feat: { label: string; desc: string }, idx: number) => (
                                    <Link href={`/${tab.id}#${feat.label.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setActiveMenu(null)} key={idx} className="group/feat flex flex-col gap-1.5 py-2">
                                      <h4 className="text-white/90 group-hover/feat:text-[#6843B7] font-medium text-[15px] transition-colors">{feat.label}</h4>
                                      <p className="text-white/50 text-[13px] leading-relaxed group-hover/feat:text-white/70 transition-colors line-clamp-2">{feat.desc}</p>
                                    </Link>
                                  ))}
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
          <Link href="/book-a-demo" className="hidden sm:block">
            <button className="px-8 py-3 bg-[#6843B7] text-white text-[13px] font medium rounded-sm hover:bg-[#6843B7] transition-all shadow-[0_10px_30px_rgba(104,67,183,0.3)] hover:scale-105 active:scale-95">
              Book a Demo
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-white p-3 bg-white/5 rounded-md hover:bg-white/10 transition-all z-[110] active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>

    {/* 3. Mobile Menu Overlay - Solid, High-Fidelity Design */}
    <div className={`fixed inset-0 bg-[#030303] z-[150] lg:hidden transition-all duration-500 ease-in-out ${
      isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
    }`}>
      {/* Top Bar with Close Button */}
      <div className="absolute top-0 w-full h-20 px-6 flex justify-between items-center border-b border-white/5">
        <div className="relative w-28 h-8">
          <Image
            src="/logo/logo.png"
            alt="cliQTest"
            fill
            className="object-cover scale-[1.2] object-center"
          />
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-3 bg-white/5 rounded-2xl text-white active:scale-90 transition-all"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => {
            const hasDropdown = !!item.content;
            const isExpanded = expandedItem === item.title;

            return (
              <div key={item.title} className="flex flex-col border-b border-white/5 pb-4 last:border-0">
                {item.href ? (
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font medium text-white hover:text-[#6843B7] transition-colors py-1 tracking-tight"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div 
                    className="flex items-center justify-between py-1 cursor-pointer group"
                    onClick={() => setExpandedItem(isExpanded ? null : item.title)}
                  >
                    <span className={`text-2xl font medium transition-colors tracking-tight ${isExpanded ? 'text-[#6843B7]' : 'text-white'}`}>{item.title}</span>
                    {hasDropdown && (
                      <div className={`p-2 rounded-md transition-all ${isExpanded ? 'bg-[#6843B7]/10 rotate-180' : 'bg-white/5'}`}>
                        {isExpanded ? <Minus size={20} className="text-[#6843B7]" /> : <Plus size={20} className="text-white/40" />}
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
                    {item.content?.tabs?.map((tab: NavTab) => (
                      <Link 
                        key={tab.id}
                        href={`/${tab.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex flex-col gap-0.5 group active:opacity-70"
                      >
                        <span className="text-[17px] font medium text-white group-hover:text-[#6843B7] transition-colors tracking-tight">{tab.label}</span>
                        <span className="text-[11px] text-white/40 leading-relaxed font-normal pr-4 line-clamp-1">{tab.header || tab.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-auto pt-10">
          <Link href="/book-a-demo" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full py-3 bg-[#6843B7] text-white text-[13px] font medium rounded-sm shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
              Book a Demo
            </button>
          </Link>
          <div className="flex justify-between items-center mt-12 px-2">
            {/* <p className="text-white/10 text-[10px] font medium tracking-[0.4em] uppercase">© 2026 cliQTest</p> */}
            <div className="flex gap-4">
              {/* <div className="w-8 h-px bg-white/10" />
              <div className="w-2 h-px bg-white/10" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
