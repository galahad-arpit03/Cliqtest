"use client";

import React, { useState, useEffect } from 'react';
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
    title: "Home",
    href: "/"
  },
  {
    title: "Insights",
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
          label: "No-Code Automation", 
          header: "Autonomous Test Generation",
          icon: Zap,
          features: [
            { label: "Record and Play", desc: "Effortlessly automate your tests with our intelligent visual recorder." },
            { label: "Auto Healing", desc: "Ensure flawless execution with predictive self-healing locators." },
            { label: "Cross-Platform", desc: "Seamlessly automate testing across Web, Mobile, API, and Desktop." }
          ]
        },
        { 
          id: "devicelab", 
          label: "Real Device Cloud", 
          header: "Enterprise Device Lab",
          icon: Cpu,
          features: [
            { label: "Vast Matrix", desc: "Test securely on thousands of real devices, browsers, and platforms." },
            { label: "Deep Diagnostics", desc: "Evaluate performance, memory, UI/UX, and native functionality." },
            { label: "Live Debugging", desc: "Access real-time logs and debug insights directly through our console." }
          ]
        },
        { 
          id: "data", 
          label: "Unified Analytics", 
          header: "Centralized Intelligence",
          icon: Database,
          features: [
            { label: "Traceability", desc: "Link executions to requirements for end-to-end visibility." },
            { label: "Smart Repository", desc: "AI-organized centralized storage for optimal test case management." },
            { label: "Reporting", desc: "Generate actionable insights and automated quality trend analysis." }
          ]
        }
      ]
    }
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Docs",
    href: "https://docs.cliqtest.com/"
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled || isMobileMenuOpen 
      ? 'bg-black/95 backdrop-blur-md h-20 border-b border-white/5 shadow-2xl' 
      : 'bg-transparent h-24'
    } px-6 md:px-12 flex justify-between items-center font-rubik`}>
      
      {/* Logo Section */}
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

      {/* 2. Main Navigation Group */}
      <div className="flex items-center gap-4 md:gap-10">
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => {
            const isInsights = item.title === "Insights";
            
            const ItemLabel = (
              <div className={`flex items-center gap-1 text-[15px] font-medium tracking-wide transition-colors ${
                activeMenu === item.title ? 'text-[#00AEEF]' : 'text-white/70 hover:text-white'
              }`}>
                {item.title}
                {isInsights && <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === item.title ? 'rotate-180' : ''}`} />}
              </div>
            );

            return (
              <div
                key={item.title}
                className="relative h-20 flex items-center cursor-pointer"
                onMouseEnter={() => isInsights && setActiveMenu(item.title)}
                onMouseLeave={() => isInsights && setActiveMenu(null)}
              >
                {item.href ? (
                  <Link href={item.href}>
                    {ItemLabel}
                  </Link>
                ) : ItemLabel}

                {/* Desktop Dropdown - Premium AI Vibe */}
                {isInsights && activeMenu === "Insights" && (
                  <div className="fixed top-20 left-1/2 -translate-x-1/2 pt-4 animate-in fade-in slide-in-from-top-4 duration-300 z-[120] w-[90vw] max-w-[1050px]">
                    <div className="bg-[#050505]/95 border border-white/10 rounded-[32px] shadow-[0_0_80px_rgba(0,174,239,0.15)] overflow-hidden flex min-h-[480px] backdrop-blur-3xl relative">
                      
                      {/* Ambient Glow */}
                      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00AEEF]/20 blur-[120px] pointer-events-none" />
                      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00F2B0]/10 blur-[120px] pointer-events-none" />
                      
                      {/* Dropdown Sidebar */}
                      <div className="w-[320px] p-6 flex flex-col gap-2 bg-white/[0.02] border-r border-white/5 relative z-10">
                        <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-4 ml-4 mt-2">Platform Capabilities</h4>
                        {item.content?.tabs?.map((tab: NavTab) => {
                          const Icon = tab.icon;
                          const isActive = activeTab === tab.id;
                          return (
                            <Link 
                              href="/overview"
                              key={tab.id}
                              className="block w-full"
                            >
                              <div
                                onMouseEnter={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 cursor-pointer group/tab relative ${
                                  isActive 
                                  ? 'bg-white/5 border border-white/10 text-white shadow-lg' 
                                  : 'text-white/50 hover:text-white hover:bg-white/[0.03] border border-transparent'
                                }`}
                              >
                                {/* Active Indicator line */}
                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#00AEEF] to-[#00F2B0] rounded-r-full shadow-[0_0_10px_#00AEEF] transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                                
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-[#00AEEF]/10 text-[#00AEEF]' : 'bg-white/5 group-hover/tab:bg-white/10 text-white/50 group-hover/tab:text-white'}`}>
                                  {Icon && <Icon size={18} />}
                                </div>
                                
                                <div className="flex-1">
                                  <span className={`block text-[14px] font-bold tracking-wide ${isActive ? 'text-white' : 'text-white/70'}`}>{tab.label}</span>
                                </div>
                                <ChevronRight size={14} className={`transition-transform duration-300 ${isActive ? 'translate-x-1 opacity-100 text-[#00AEEF]' : 'opacity-0'}`} />
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Dropdown Content */}
                      <div className="flex-1 p-12 relative overflow-hidden flex items-center">
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
                        
                        {item.content?.tabs?.map((tab: NavTab) => (
                          <div 
                            key={tab.id} 
                            className={`transition-all duration-500 absolute inset-12 z-10 flex flex-col justify-center ${
                              activeTab === tab.id 
                              ? 'opacity-100 translate-y-0 pointer-events-auto' 
                              : 'opacity-0 translate-y-8 pointer-events-none'
                            }`}
                          >
                            {tab.id === "overview" ? (
                              <div className="max-w-2xl">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/30 text-[#00AEEF] text-[10px] font-black uppercase tracking-widest mb-6">Platform Core</span>
                                <h2 className="text-3xl md:text-4xl font-black leading-[1.1] mb-6 tracking-tight text-white">
                                  {tab.title}
                                </h2>
                                <p className="text-[#8b92b2] text-[16px] leading-relaxed mb-10 font-medium">
                                  {tab.description}
                                </p>
                                <Link 
                                  href="/overview" 
                                  className="px-6 py-3 bg-white text-black font-bold text-[13px] rounded-full hover:bg-zinc-200 transition-all inline-flex items-center gap-2 group/btn"
                                >
                                  Explore Platform <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                              </div>
                            ) : (
                              <div className="w-full">
                                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-10 tracking-tight">{tab.header}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                  {tab.features?.map((feat: { label: string; desc: string }, idx: number) => (
                                    <div key={idx} className="group/feat flex gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                                      <div className="mt-1 flex-shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-[#00F2B0] group-hover/feat:shadow-[0_0_10px_#00F2B0] transition-all" />
                                      </div>
                                      <div>
                                        <h4 className="text-white font-bold text-[15px] mb-2">{feat.label}</h4>
                                        <p className="text-[#8b92b2] text-[13px] leading-relaxed">
                                          {feat.desc}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-10 pt-8 border-t border-white/5">
                                  <Link 
                                    href="/overview" 
                                    className="text-[#00AEEF] hover:text-[#00F2B0] text-[14px] font-bold inline-flex items-center gap-2 transition-all group/more uppercase tracking-wider"
                                  >
                                    Explore Platform <ChevronRight size={16} className="group-hover/more:translate-x-1 transition-transform" />
                                  </Link>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/book-a-demo" className="hidden sm:block">
            <button className="px-8 py-3 bg-[#00AEEF] text-white text-[13px] font-bold rounded-full hover:bg-[#0092E6] transition-all shadow-[0_10px_30px_rgba(0,174,239,0.3)] hover:scale-105 active:scale-95">
              Book a Demo
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-white p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all z-[110] active:scale-90"
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

      <div className="flex flex-col h-full pt-28 px-10 pb-12 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {menuItems.map((item) => {
            const isInsights = item.title === "Insights";
            const isExpanded = expandedItem === item.title;

            return (
              <div key={item.title} className="flex flex-col border-b border-white/5 pb-6 last:border-0">
                {item.href ? (
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-white hover:text-[#00AEEF] transition-colors py-1 tracking-tight"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div 
                    className="flex items-center justify-between py-1 cursor-pointer group"
                    onClick={() => setExpandedItem(isExpanded ? null : item.title)}
                  >
                    <span className={`text-3xl font-bold transition-colors tracking-tight ${isExpanded ? 'text-[#00AEEF]' : 'text-white'}`}>{item.title}</span>
                    {isInsights && (
                      <div className={`p-2 rounded-xl transition-all ${isExpanded ? 'bg-[#00AEEF]/10 rotate-180' : 'bg-white/5'}`}>
                        {isExpanded ? <Minus size={20} className="text-[#00AEEF]" /> : <Plus size={20} className="text-white/40" />}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Mobile Insights Expanded Accordion */}
                {isInsights && isExpanded && (
                  <div className="flex flex-col gap-6 mt-6 ml-4 border-l-2 border-[#00AEEF]/40 pl-6 animate-in slide-in-from-left-4 duration-300">
                    <button 
                      onClick={() => setExpandedItem(null)}
                      className="flex items-center gap-2 text-[#00AEEF] text-xs font-bold uppercase tracking-widest mb-2"
                    >
                      <ChevronRight size={14} className="rotate-180" /> Back
                    </button>
                    {item.content?.tabs?.map((tab: NavTab) => (
                      <Link 
                        key={tab.id}
                        href="/overview"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex flex-col gap-1 group active:opacity-70"
                      >
                        <span className="text-xl font-bold text-white group-hover:text-[#00AEEF] transition-colors tracking-tight">{tab.label}</span>
                        <span className="text-xs text-white/30 leading-relaxed font-normal pr-4 line-clamp-1">{tab.header || tab.description}</span>
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
            <button className="w-full py-4 bg-[#00AEEF] text-white text-base font-bold rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
              Book a Demo
            </button>
          </Link>
          <div className="flex justify-between items-center mt-12 px-2">
            <p className="text-white/10 text-[10px] font-bold tracking-[0.4em] uppercase">© 2026 Cliqtest</p>
            <div className="flex gap-4">
              <div className="w-8 h-px bg-white/10" />
              <div className="w-2 h-px bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
