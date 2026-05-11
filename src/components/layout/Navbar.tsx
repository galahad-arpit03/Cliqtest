"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Overview");

  const categories = [
    { 
      id: "Overview", 
      name: "Overview",
      content: {
        title: "cliQTest – Empowering Innovation Through Smarter Testing Solutions",
        description: "cliQTest is an innovative platform which is designed in such way that whether you're working on websites, mobile apps, or APIs, cliQTest provides a robust and user-friendly environment to conduct automated and manual testing with precision.",
        items: []
      }
    },
    { 
      id: "No-Code Automation", 
      name: "No-Code Automation",
      content: {
        title: "No-Code Automation",
        items: [
          { subtitle: "Record and Play", text: "Effortlessly automate your tests with simple record-and-play functionality." },
          { subtitle: "Auto Healing", text: "Ensure flawless test execution with intelligent auto-healing capabilities." },
          { subtitle: "Platform-Agnostic Test", text: "Seamlessly automate testing across Web, Mobile, API, and Desktop." }
        ]
      }
    },
    { 
      id: "Device Lab", 
      name: "Device Lab",
      content: {
        title: "Device Lab",
        items: [
          { subtitle: "Device and Platform Agnostic", text: "Seamlessly test on real devices, browsers, and platforms for quality." },
          { subtitle: "Comprehensive Testing Capabilities", text: "Evaluate usability, gestures, UI/UX, and functionality seamlessly." },
          { subtitle: "Developer Console Integration", text: "Access live logs and debug insights directly through developer tools for efficient issue resolution." }
        ]
      }
    },
    { 
      id: "Centralized Data Management", 
      name: "Centralized Data Management",
      content: {
        title: "Centralized Data Management",
        items: [
          { subtitle: "Requirement & Defect Management", text: "Link test cases to requirements and defects for efficient traceability." },
          { subtitle: "Test Case Repository", text: "Centralized storage to create, manage, and organize test cases efficiently." },
          { subtitle: "Test Documentation & Reporting", text: "Generate detailed reports and maintain comprehensive documentation to ensure test process transparency." }
        ]
      }
    }
  ];

  const activeContent = categories.find(c => c.id === activeCategory)?.content;

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0B1A] px-6 h-16 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="relative w-32 h-9.5 overflow-hidden">
          <Image
            src="/logo/logo.png"
            alt="cliQTest"
            fill
            className="object-cover scale-[1.2] object-center"
            priority
          />
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-zinc-300 h-full font-rubik">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        
        {/* Insights Dropdown Trigger */}
        <div 
          className="group h-full flex items-center cursor-pointer"
          onMouseEnter={() => setIsInsightsOpen(true)}
          onMouseLeave={() => {
            setIsInsightsOpen(false);
            setActiveCategory("Overview");
          }}
        >
          <div className="flex items-center gap-1 hover:text-white transition-colors">
            <span>Insights</span>
            <ChevronDown size={16} className={`text-zinc-500 group-hover:text-white transition-all ${isInsightsOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Mega Menu */}
          {isInsightsOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[1100px] max-w-[95vw] h-[450px] bg-[#0A0B1E] border border-white/10 border-t-0 rounded-b-2xl shadow-2xl overflow-hidden p-10 flex gap-12 animate-in fade-in slide-in-from-top-2 duration-200">
              {/* Left Section: List */}
              <div className="w-[320px] flex flex-col gap-1">
                {categories.map((item) => (
                  <div 
                    key={item.id} 
                    onMouseEnter={() => setActiveCategory(item.id)}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer group/item ${activeCategory === item.id ? 'bg-white/5 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                  >
                    <span className="font-medium text-[16px]">{item.name}</span>
                    <ChevronRight size={18} className={`${activeCategory === item.id ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                  </div>
                ))}
              </div>

              {/* Separator */}
              <div className="w-[1px] bg-blue-500/30 self-stretch my-2" />

              {/* Right Section: Content */}
              <div className="flex-1 overflow-y-auto">
                <h2 className="text-[28px] font-bold mb-6 leading-tight text-white tracking-tight font-sans">
                  {activeCategory === "Overview" ? (
                    <>
                      <span className="text-blue-400">cliQTest</span>
                      <span> – Empowering Innovation Through Smarter Testing Solutions</span>
                    </>
                  ) : activeContent?.title}
                </h2>
                
                {activeCategory === "Overview" ? (
                  <p className="text-zinc-400 leading-relaxed text-[17px] max-w-[600px] font-sans">
                    {activeContent?.description}
                  </p>
                ) : (
                  <div className="space-y-5 font-sans">
                    {activeContent?.items.map((item, idx) => (
                      <div key={idx} className="group/detail cursor-pointer">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-zinc-500 text-[13px] uppercase tracking-wider font-semibold group-hover/detail:text-zinc-300 transition-colors">
                            {item.subtitle}
                          </h4>
                          <ChevronRight size={16} className="text-zinc-600 opacity-0 group-hover/detail:opacity-100 group-hover/detail:translate-x-1 transition-all" />
                        </div>
                        <p className="text-white text-[17px] font-medium leading-tight">
                          {item.text}
                        </p>
                        <div className="h-[1px] w-full bg-white/5 mt-4 group-hover/detail:bg-white/10 transition-colors" />
                      </div>
                    ))}
                    <button className="text-blue-400 hover:text-blue-300 font-semibold text-[15px] mt-2 inline-flex items-center gap-1.5 transition-colors border-b border-transparent hover:border-blue-400/30 pb-0.5">
                      view more
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Docs</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-6 py-2.5 rounded-xl border border-white/40 text-white font-medium text-sm hover:bg-white/10 transition-all font-rubik">
          Book Demo
        </button>
      </div>
    </nav>
  );
}
