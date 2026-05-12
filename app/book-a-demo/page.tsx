"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BookADemoPage() {
  const [selectedDate, setSelectedDate] = useState(12);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [
    null, null, null, null, null, 1, 2,
    3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30
  ];

  return (
    <main className="min-h-screen bg-[#030303] pt-32 pb-20 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* Left Column: Logo & Calendar */}
        <div className="flex flex-col gap-12 lg:pr-12 items-center lg:items-start">
          <div className="flex flex-col items-center">
             <div className="relative w-[450px] h-32 overflow-hidden flex items-center justify-center">
                <Image 
                  src="/logo/logo.png"
                  alt="cliQTest"
                  fill
                  className="object-contain scale-[1.5]"
                />
             </div>
             <p className="text-white/80 text-lg tracking-[0.2em] uppercase font-medium mt-2 text-center w-full">
               Turning Clicks into Confidence
             </p>
          </div>

          <div className="bg-zinc-900/20 rounded-[40px] p-12 border border-white/5">
            <h2 className="text-white text-3xl font-medium mb-12">Meet with us</h2>
            
            {/* Calendar Mockup */}
            <div className="w-full">
              <div className="flex items-center justify-between mb-10 px-4">
                <button className="text-white/40 hover:text-white transition-colors">
                  <ChevronLeft size={24} />
                </button>
                <h3 className="text-white text-xl font-medium uppercase tracking-widest">May 2026</h3>
                <button className="text-white/40 hover:text-white transition-colors">
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-y-10 text-center">
                {days.map(day => (
                  <div key={day} className="text-white font-bold text-sm mb-4">{day}</div>
                ))}
                {dates.map((date, i) => (
                  <button 
                    key={i}
                    onClick={() => date && setSelectedDate(date)}
                    className={`text-lg font-bold transition-all py-2 rounded-xl relative ${
                      date === null ? 'invisible' : ''
                    } ${
                      selectedDate === date 
                      ? 'text-[#00AEEF] scale-110' 
                      : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {date}
                    {selectedDate === date && (
                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00AEEF] rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Scheduling Form */}
        <div className="bg-zinc-900/10 rounded-[40px] p-12 border border-white/5">
          <form className="flex flex-col gap-10">
            <div>
              <label className="text-white/80 text-sm font-medium mb-4 block">Meeting duration</label>
              <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00AEEF] transition-colors appearance-none cursor-pointer">
                <option>15 mins</option>
                <option>30 mins</option>
                <option>45 mins</option>
                <option>60 mins</option>
              </select>
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium block">What time works best?</label>
              <p className="text-white/20 text-xs mt-1 mb-4">Choose from Calender</p>
              
              <label className="text-white/80 text-sm font-medium mb-4 block">Select a time <span className="text-red-500">*</span></label>
              <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white/40 focus:outline-none focus:border-[#00AEEF] transition-colors appearance-none cursor-pointer">
                <option>Select a time</option>
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-white/80 text-sm font-medium mb-4 block">First Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Enter your first name"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00AEEF] transition-colors placeholder:text-white/10"
                />
              </div>
              <div>
                <label className="text-white/80 text-sm font-medium mb-4 block">Last Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Enter your last name"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00AEEF] transition-colors placeholder:text-white/10"
                />
              </div>
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium mb-4 block">Company Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                placeholder="Enter your company email"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00AEEF] transition-colors placeholder:text-white/10"
              />
            </div>

            <div>
              <label className="text-white/80 text-sm font-medium mb-4 block">Company Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                placeholder="Enter your company name"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00AEEF] transition-colors placeholder:text-white/10"
              />
            </div>

            <button className="w-full py-4 bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-[#2563eb] transition-colors shadow-lg shadow-blue-500/20 mt-4">
              Submit
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
