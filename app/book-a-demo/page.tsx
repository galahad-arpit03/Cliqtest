"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function BookADemoPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2026, 4, 13));
  const [viewDate, setViewDate] = useState(new Date(2026, 4, 1));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();
  
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const calendarDates = [];
  for (let i = 0; i < firstDay; i++) calendarDates.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDates.push(new Date(currentYear, currentMonth, d));

  const handlePrevMonth = () => setViewDate(new Date(currentYear, currentMonth - 1, 1));
  const handleNextMonth = () => setViewDate(new Date(currentYear, currentMonth + 1, 1));

  const isSelected = (date: Date) => {
    return selectedDate?.toDateString() === date.toDateString();
  };

  const isAvailable = (date: Date) => {
    if (currentYear === 2026 && currentMonth === 4) {
      return date.getDate() >= 13;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <main className="min-h-screen bg-[#030303] pt-32 md:pt-36 pb-20 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Expanded Premium Background Gradients */}
      <div className="absolute top-1/4 left-0 md:left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-500/15 rounded-full blur-[100px] md:blur-[140px] -z-10" />
      <div className="absolute bottom-1/4 right-0 md:right-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-400/15 rounded-full blur-[100px] md:blur-[140px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[160px] -z-10" />
 
      {/* Outer Border Frame */}
      <div className="max-w-[1200px] mx-auto border-[8px] md:border-[12px] border-zinc-900/50 rounded-[24px] md:rounded-[32px] bg-black/60 backdrop-blur-xl p-5 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative z-10 min-h-[600px] flex items-center">
        
        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start w-full">
            
            {/* Left Column: Calendar Section */}
            <div className="flex flex-col items-start w-full relative">
              <div className="absolute inset-0 bg-blue-500/5 blur-[80px] -z-10" />
              
              <div className="w-full">
                <h2 className="text-white text-2xl font-normal mb-10">Meet with us</h2>
                
                <div className="flex items-center justify-between max-w-[320px] mb-10 px-2">
                  <button 
                    onClick={handlePrevMonth}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h3 className="text-base font-normal tracking-wide uppercase">
                    {monthNames[currentMonth]} {currentYear}
                  </h3>
                  <button 
                    onClick={handleNextMonth}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-y-12 text-center">
                  {days.map(day => (
                    <div key={day} className="text-white text-xs font-bold mb-2">{day}</div>
                  ))}
                  {calendarDates.map((date, i) => (
                    <button 
                      key={i}
                      disabled={!date}
                      onClick={() => date && setSelectedDate(date)}
                      className={`text-sm font-semibold transition-all py-1 ${
                        !date ? 'invisible' : ''
                      } ${
                        date && isAvailable(date)
                        ? 'text-[#3B82F6] hover:text-blue-300' 
                        : 'text-white/60 hover:text-white'
                      } ${
                        date && isSelected(date) ? 'scale-125 brightness-150 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''
                      }`}
                    >
                      {date?.getDate()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form Section */}
            <div className="w-full relative">
              <div className="absolute inset-0 bg-cyan-500/5 blur-[80px] -z-10" />
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-lg ml-auto">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium text-white/90">Meeting duration</label>
                  <div className="relative">
                    <select className="w-full bg-black/40 border border-white/20 rounded-md px-3 py-2.5 text-xs text-white appearance-none cursor-pointer focus:border-[#3B82F6] outline-none transition-colors" required>
                      <option value="15">15 mins</option>
                      <option value="30">30 mins</option>
                      <option value="60">60 mins</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ChevronRight size={12} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium text-white/90">What time works best?</label>
                  <span className="text-[10px] text-white/40 -mt-1.5">Choose from calender</span>
                  <label className="text-[12px] font-medium text-white/90 mt-1">Select a time <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full bg-black/40 border border-white/20 rounded-md px-3 py-2.5 text-xs text-white appearance-none cursor-pointer focus:border-[#3B82F6] outline-none transition-colors" required>
                      <option value="">Select a time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ChevronRight size={12} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-white/90">First Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Enter your first name"
                      className="w-full bg-black/40 border border-white/20 rounded-md px-3 py-2.5 text-xs text-white placeholder:text-white/20 focus:border-[#3B82F6] outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-white/90">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Enter your last name"
                      className="w-full bg-black/40 border border-white/20 rounded-md px-3 py-2.5 text-xs text-white placeholder:text-white/20 focus:border-[#3B82F6] outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium text-white/90">Company Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    placeholder="Enter your company email"
                    className="w-full bg-black/40 border border-white/20 rounded-md px-3 py-2.5 text-xs text-white placeholder:text-white/20 focus:border-[#3B82F6] outline-none transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium text-white/90">Company Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Enter your company name"
                    className="w-full bg-black/40 border border-white/20 rounded-md px-3 py-2.5 text-xs text-white placeholder:text-white/20 focus:border-[#3B82F6] outline-none transition-colors"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#3B82F6] hover:bg-blue-600 text-white font-bold py-3.5 text-xs rounded-md transition-all shadow-lg shadow-blue-500/20 mt-4 active:scale-95"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-20 text-center animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 size={40} className="text-[#3B82F6]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Request Sent Successfully!</h2>
            <p className="text-white/60 max-w-md mx-auto mb-10">
              Thank you for your interest in cliQTest. Our team will reach out to you within 24 hours to confirm your demo.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-zinc-800 text-white text-sm font-bold rounded-full hover:bg-zinc-700 transition-all"
            >
              Back to Form
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
