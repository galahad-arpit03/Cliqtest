"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronDown, 
  ChevronRight,
  Zap, 
  Bot, 
  Activity, 
  Layers, 
  Monitor 
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
          title: "Autonomous No-Code Automation",
          description: "Leverage AI-driven agents to automate complex workflows without writing a single line of code. Our platform adapts to UI changes in real-time."
        },
        { 
          id: "devicelab", 
          label: "Device Lab", 
          title: "Enterprise Global Device Cloud",
          description: "Access thousands of real iOS and Android devices, browsers, and OS versions for comprehensive cross-platform testing at scale."
        },
        { 
          id: "data", 
          label: "Centralized Data Management", 
          title: "Intelligent Test Data Orchestration",
          description: "Manage, generate, and mask test data across environments with centralized controls and deep integration into your CI/CD pipelines."
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
    href: "#"
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0C10] border-b border-white/5 h-16 px-12 flex justify-between items-center font-rubik">
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer group">
        <div className="relative w-32 h-9.5 overflow-hidden">
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
      <div className="flex items-center gap-10">
        {/* Navigation Items */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const isInsights = item.title === "Insights";
            
            const ItemLabel = (
              <div className={`flex items-center gap-1 text-[15px] font-normal transition-colors ${activeMenu === item.title ? 'text-white' : 'text-white/80 hover:text-white'}`}>
                {item.title}
                {isInsights && <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === item.title ? 'rotate-180' : ''}`} />}
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
                  <div className="fixed top-16 left-1/2 -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-2 duration-200 z-[100] w-[95vw] max-w-[1200px]">
                    <div className="bg-[#0D121F] border border-white/5 rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden flex min-h-[500px]">
                      
                      {/* Left Sidebar: Tabs */}
                      <div className="w-[380px] p-8 flex flex-col gap-4 bg-black/20">
                        {item.content?.tabs?.map((tab: any) => (
                          <div
                            key={tab.id}
                            onMouseEnter={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-between px-6 py-5 rounded-2xl transition-all duration-300 cursor-pointer group/tab ${
                              activeTab === tab.id 
                              ? 'bg-[#1D253A] text-white shadow-lg' 
                              : 'text-white/60 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <span className="text-lg font-medium">{tab.label}</span>
                            <ChevronRight size={20} className={`transition-transform duration-300 ${activeTab === tab.id ? 'translate-x-1' : 'opacity-40'}`} />
                          </div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="w-[2px] bg-gradient-to-b from-[#00AEEF]/40 via-[#00AEEF] to-[#00AEEF]/40 my-10" />

                      {/* Right Content Area */}
                      <div className="flex-1 p-16 flex flex-col justify-center">
                        {item.content?.tabs?.map((tab: any) => (
                          <div 
                            key={tab.id} 
                            className={`transition-all duration-500 absolute pr-20 ${
                              activeTab === tab.id 
                              ? 'opacity-100 translate-y-0 relative' 
                              : 'opacity-0 translate-y-4 pointer-events-none'
                            }`}
                          >
                            <h2 className="text-4xl font-bold leading-tight mb-10 tracking-tight">
                              <span className="text-[#00F2B0]">cliQTest</span>
                              <span className="text-white"> – {tab.title.split(' – ')[1] || tab.title}</span>
                            </h2>
                            <p className="text-white/50 text-xl leading-relaxed max-w-2xl font-light">
                              {tab.description}
                            </p>
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
