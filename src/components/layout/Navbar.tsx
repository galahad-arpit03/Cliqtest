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
  Minus
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
          label: "Overview", 
          title: "cliQTest – Empowering Innovation Through Smarter Testing Solutions",
          description: "cliQTest is an innovative platform which is designed in such way that whether you’re working on websites, mobile apps, or APIs, cliQTest provides a robust and user-friendly environment to conduct automated and manual testing with precision."
        },
        { 
          id: "nocode", 
          label: "No-Code Automation", 
          header: "No-Code Automation",
          features: [
            { label: "Record and Play", desc: "Effortlessly automate your tests with simple record-and-play functionality." },
            { label: "Auto Healing", desc: "Ensure flawless test execution with intelligent auto-healing capabilities." },
            { label: "Platform-Agnostic Test", desc: "Seamlessly automate testing across Web, Mobile, API, and Desktop." }
          ]
        },
        { 
          id: "devicelab", 
          label: "Device Lab", 
          header: "Device Lab",
          features: [
            { label: "Device and Platform Agnostic", desc: "Seamlessly test on real devices, browsers, and platforms for quality." },
            { label: "Comprehensive Testing Capabilities", desc: "Evaluate usability, gestures, UI/UX, and functionality seamlessly." },
            { label: "Developer Console Integration", desc: "Access live logs and debug insights directly through developer tools for efficient issue resolution." }
          ]
        },
        { 
          id: "data", 
          label: "Centralized Data Management", 
          header: "Centralized Data Management",
          features: [
            { label: "Requirement & Defect Management", desc: "Link test cases to requirements and defects for efficient traceability." },
            { label: "Test Case Repository", desc: "Centralized storage to create, manage, and organize test cases efficiently." },
            { label: "Test Documentation & Reporting", desc: "Generate detailed reports and maintain comprehensive documentation to ensure test process transparency." }
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

                {/* Desktop Dropdown - Professional Tabbed Layout */}
                {isInsights && activeMenu === "Insights" && (
                  <div className="fixed top-20 left-1/2 -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-2 duration-300 z-[120] w-[90vw] max-w-[1000px]">
                    <div className="bg-[#0A0E17]/98 border border-white/10 rounded-[32px] shadow-[0_40px_100px_-12px_rgba(0,0,0,1)] overflow-hidden flex min-h-[450px] backdrop-blur-3xl">
                      
                      {/* Dropdown Sidebar */}
                      <div className="w-[300px] p-8 flex flex-col gap-3 bg-white/[0.03] border-r border-white/5">
                        {item.content?.tabs?.map((tab: NavTab) => (
                          <Link 
                            href={tab.id === "overview" ? "/overview" : "/products/agentic-qa"}
                            key={tab.id}
                            className="block w-full"
                          >
                            <div
                              onMouseEnter={() => setActiveTab(tab.id)}
                              className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer group/tab ${
                                activeTab === tab.id 
                                ? 'bg-gradient-to-r from-[#00AEEF]/20 to-transparent border border-[#00AEEF]/30 text-white shadow-lg' 
                                : 'text-white/40 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              <span className="text-[15px] font-semibold tracking-wide">{tab.label}</span>
                              <ChevronRight size={16} className={`transition-transform duration-300 ${activeTab === tab.id ? 'translate-x-1 opacity-100 text-[#00AEEF]' : 'opacity-0'}`} />
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Dropdown Content */}
                      <div className="flex-1 p-12 flex flex-col relative overflow-hidden bg-gradient-to-br from-transparent to-[#00AEEF]/5">
                        {item.content?.tabs?.map((tab: NavTab) => (
                          <div 
                            key={tab.id} 
                            className={`transition-all duration-500 absolute inset-12 ${
                              activeTab === tab.id 
                              ? 'opacity-100 translate-y-0 pointer-events-auto' 
                              : 'opacity-0 translate-y-4 pointer-events-none'
                            }`}
                          >
                            {tab.id === "overview" ? (
                              <div className="flex flex-col h-full justify-center">
                                <h2 className="text-3xl font-black leading-tight mb-8 tracking-tighter text-white">
                                  <span className="text-[#00F2B0]">cliQTest</span>
                                  <span> – Empowering Innovation</span>
                                </h2>
                                <p className="text-white/50 text-[16px] leading-relaxed max-w-xl font-normal mb-8">
                                  {tab.description}
                                </p>
                                <Link 
                                  href="/overview" 
                                  className="text-[#00AEEF] hover:text-[#00F2B0] text-[15px] font-bold inline-flex items-center gap-2 transition-all group/more w-fit"
                                >
                                  Explore Overview <ChevronRight size={16} className="group-hover/more:translate-x-1 transition-transform" />
                                </Link>
                              </div>
                            ) : (
                              <div className="flex flex-col">
                                <h2 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4 inline-block">{tab.header}</h2>
                                <div className="grid grid-cols-1 gap-4">
                                  {tab.features?.map((feat: { label: string; desc: string }, idx: number) => (
                                    <div key={idx} className="group/feat p-4 flex flex-col gap-2 relative cursor-pointer hover:bg-white/[0.03] transition-all rounded-2xl border border-transparent hover:border-white/5">
                                      <div className="flex items-center justify-between">
                                        <span className="text-[#00F2B0] text-[10px] tracking-widest uppercase font-black">{feat.label}</span>
                                        <ChevronRight size={14} className="text-white/20 group-hover/feat:text-[#00AEEF] group-hover/feat:translate-x-1 transition-all" />
                                      </div>
                                      <p className="text-white/80 text-[15px] font-medium leading-tight">
                                        {feat.desc}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                <Link 
                                  href="/products/agentic-qa" 
                                  className="mt-10 text-[#00AEEF] hover:text-[#00F2B0] text-[15px] font-bold inline-flex items-center gap-2 transition-all group/more"
                                >
                                  Explore Solution <ChevronRight size={16} className="group-hover/more:translate-x-1 transition-transform" />
                                </Link>
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
                        href={tab.id === "overview" ? "/overview" : "/products/agentic-qa"}
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
