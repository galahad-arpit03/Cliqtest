"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookADemoPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [viewDate, setViewDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
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
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
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
    <main className="min-h-screen bg-[#050505] pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Dynamic Background Gradients */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] bg-[#6843B7]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] bg-[#00F2B0]/5 blur-[160px] rounded-full" />
      </div> */}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
        
        {/* Left Side: Sticky Intro & Value Prop */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-6 block">Personalized Demo</span>
            <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              See the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Future of</span><br />
              Testing
            </h1>
            
            <div className="space-y-8 mt-12">
              {[
                { title: "Personalized Walkthrough", desc: "A tailored session focused on your team's unique testing challenges." },
                { title: "Live Agent Interaction", desc: "Watch our specialized agents think, adapt, and execute in real-time." },
                { title: "Architecture Deep-Dive", desc: "Understand how our AI-native engine scales across your stack." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#6843B7] mt-2.5 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Right Side: Interactive Booking Interface */}
        <div className="lg:w-2/3">
          {!isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-12 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Calendar Column */}
                <div>
                  <h3 className="text-white text-xl font-semibold mb-10 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-sm bg-[#6843B7]/20 flex items-center justify-center text-[#6843B7] text-sm">1</span>
                    Select a Date
                  </h3>
                  
                  <div className="flex items-center justify-between mb-8">
                    <button onClick={handlePrevMonth} className="p-2 hover:bg-white/5 rounded-md transition-colors"><ChevronLeft size={18} className="text-white/60" /></button>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest">{monthNames[currentMonth]} {currentYear}</h4>
                    <button onClick={handleNextMonth} className="p-2 hover:bg-white/5 rounded-md transition-colors"><ChevronRight size={18} className="text-white/60" /></button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {days.map(day => (
                      <div key={day} className="text-white/40 text-[10px] font-bold uppercase text-center mb-2">{day[0]}</div>
                    ))}
                    {calendarDates.map((date, i) => (
                      <button 
                        key={i}
                        disabled={!date}
                        onClick={() => date && setSelectedDate(date)}
 className={`aspect-square rounded-sm flex items-center justify-center text-xs transition-all ${
                          !date ? 'invisible' : ''
                        } ${
                          date && isSelected(date) 
                          ? 'bg-[#6843B7] text-white shadow-lg shadow-[#6843B7]/20 scale-110' 
                          : date && isToday(date)
                            ? 'border border-[#6843B7] text-[#6843B7] bg-[#6843B7]/10'
                            : date && isAvailable(date)
                              ? 'text-white hover:bg-white/10'
                              : 'text-zinc-700 pointer-events-none'
                        }`}
                      >
                        {date?.getDate()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Column */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-sm bg-[#6843B7]/20 flex items-center justify-center text-[#6843B7] text-sm">2</span>
                    Your Details
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">First Name</label>
                      <input required type="text" className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-[#6843B7] outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Last Name</label>
                      <input required type="text" className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-[#6843B7] outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Work Email</label>
                    <input required type="email" className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-[#6843B7] outline-none transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Meeting Time</label>
                    <select required className="w-full bg-[#050505] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:border-[#6843B7] outline-none appearance-none transition-all">
                      <option value="">Select a slot</option>
                      <option value="10:00">10:00 AM — 10:30 AM</option>
                      <option value="14:00">02:00 PM — 02:30 PM</option>
                      <option value="16:30">04:30 PM — 05:00 PM</option>
                    </select>
                  </div>

 <button type="submit" className="w-full py-4 bg-[#6843B7] text-white rounded-sm hover:bg-[#6843B7]/90 transition-all  text-[14px] mt-4 active:scale-95">
                    Confirm Booking
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-md p-16 md:p-20 text-center shadow-[0_0_40px_rgba(104,67,183,0.15)]"
            >
              <div className="w-20 h-20 bg-[#6843B7]/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(104,67,183,0.2)]">
                <CheckCircle2 size={40} className="text-[#6843B7]" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Demo Scheduled!</h2>
              <p className="text-white/60 max-w-sm mx-auto mb-10 leading-relaxed">
                Check your inbox for the calendar invite and meeting link. We can&apos;t wait to show you cliQTest.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
 className="px-8 py-3 border border-white/20 text-white text-[14px] rounded-sm hover:bg-white/5 transition-all"
              >
                Schedule Another
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
