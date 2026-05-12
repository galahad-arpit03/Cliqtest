"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronDown, 
  ChevronRight
} from 'lucide-react';

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

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent h-24 px-12 flex justify-between items-center font-rubik">
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer group">
        <div className="relative w-36 h-11 overflow-hidden">
          <Image
            src="/logo/logo.png"
            alt="cliQTest"
            fill
            className="object-cover scale-[1.2] object-center transition-transform group-hover:scale-[1.25]"
            priority
          />
        </div>
      </Link>

      {/* Right Content Group */}
      <div className="flex items-center gap-12">
        {/* Navigation Items */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => {
            const isInsights = item.title === "Insights";
            
            const ItemLabel = (
              <div className={`flex items-center gap-1 text-[16px] font-normal transition-colors ${activeMenu === item.title ? 'text-white' : 'text-white/80 hover:text-white'}`}>
                {item.title}
                {isInsights && <ChevronDown size={15} className={`transition-transform duration-300 ${activeMenu === item.title ? 'rotate-180' : ''}`} />}
              </div>
            );

            return (
              <div
                key={item.title}
                className="relative h-16 flex items-center cursor-pointer"
                onMouseEnter={() => isInsights && setActiveMenu(item.title)}
                onMouseLeave={() => isInsights && setActiveMenu(null)}
              >
                {item.href ? (
                  <Link href={item.href}>
                    {ItemLabel}
                  </Link>
                ) : ItemLabel}

                {/* Dropdown Menu (Insights Tabbed Layout) */}
                {isInsights && activeMenu === "Insights" && (
                  <div className="fixed top-16 left-1/2 -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-1 duration-300 z-[100] w-[90vw] max-w-[950px]">
                    <div className="bg-[#0D121F] border border-white/5 rounded-[20px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden flex min-h-[420px] backdrop-blur-xl">
                      
                      {/* Left Sidebar: Tabs */}
                      <div className="w-[280px] p-6 flex flex-col gap-2 bg-black/40 border-r border-white/5">
                        {item.content?.tabs?.map((tab: any) => (
                          <div
                            key={tab.id}
                            onMouseEnter={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-between px-5 py-3.5 rounded-xl transition-all duration-200 cursor-pointer group/tab ${
                              activeTab === tab.id 
                              ? 'bg-[#1D253A] text-white shadow-md' 
                              : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <span className="text-[15px] font-medium">{tab.label}</span>
                            <ChevronRight size={16} className={`transition-transform duration-300 ${activeTab === tab.id ? 'translate-x-0.5 opacity-100' : 'opacity-0'}`} />
                          </div>
                        ))}
                      </div>

                      {/* Right Content Area */}
                      <div className="flex-1 p-10 flex flex-col relative overflow-hidden bg-gradient-to-br from-transparent to-[#00AEEF]/5">
                        {item.content?.tabs?.map((tab: any) => (
                          <div 
                            key={tab.id} 
                            className={`transition-all duration-300 absolute inset-10 ${
                              activeTab === tab.id 
                              ? 'opacity-100 translate-x-0 pointer-events-auto' 
                              : 'opacity-0 -translate-x-4 pointer-events-none'
                            }`}
                          >
                            {tab.id === "overview" ? (
                              <div className="flex flex-col h-full justify-center">
                                <h2 className="text-2xl font-bold leading-tight mb-6 tracking-tight">
                                  <span className="text-[#00F2B0]">cliQTest</span>
                                  <span className="text-white"> – {tab.title.split(' – ')[1] || tab.title}</span>
                                </h2>
                                <p className="text-white/60 text-[15px] leading-relaxed max-w-xl font-normal">
                                  {tab.description}
                                </p>
                              </div>
                            ) : (
                              <div className="flex flex-col">
                                <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block">{tab.header}</h2>
                                <div className="flex flex-col gap-1">
                                  {tab.features.map((feat: any, idx: number) => (
                                    <div key={idx} className="group/feat py-3 flex flex-col gap-1 relative cursor-pointer hover:bg-white/[0.03] transition-colors rounded-lg px-4 -mx-4">
                                      <div className="flex items-center justify-between">
                                        <span className="text-white/40 text-[11px] tracking-widest uppercase font-semibold">{feat.label}</span>
                                        <ChevronRight size={14} className="text-white/20 group-hover/feat:text-[#00AEEF] transition-colors" />
                                      </div>
                                      <p className="text-white text-[14px] font-semibold leading-tight">
                                        {feat.desc}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                <Link 
                                  href="/products/agentic-qa" 
                                  className="mt-6 text-[#00AEEF] hover:text-[#00F2B0] text-[14px] font-semibold inline-flex items-center gap-1 transition-colors"
                                >
                                  view more <ChevronRight size={14} />
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

        {/* Action Button */}
        <Link href="/book-a-demo">
          <button className="px-6 py-2 bg-[#00AEEF] text-white text-[14px] font-light rounded-full hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(0,174,239,0.3)] whitespace-nowrap">
            Book a Demo
          </button>
        </Link>
      </div>
    </nav>
  );
}
