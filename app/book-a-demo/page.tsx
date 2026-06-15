"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, QrCode, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLandingModeStore } from '@/store/themeStore';

export default function BookADemoPage() {
  const router = useRouter();
  const { landingThemeMode } = useLandingModeStore();
  const isLight = landingThemeMode === 'light';
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [viewDate, setViewDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [contactType, setContactType] = useState<'presales' | 'sales' | null>(null);

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

  const isTimeAvailable = (timeStr: string) => {
    if (!selectedDate || !isToday(selectedDate)) return true;
    const now = new Date();
    const [hours, minutes] = timeStr.split(':').map(Number);
    const slotTime = new Date();
    slotTime.setHours(hours, minutes, 0, 0);
    return slotTime > now;
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
    <main className={`min-h-screen pt-32 md:pt-40 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden transition-colors duration-500 ${isLight ? 'bg-[#FAFAFA]' : 'bg-app-bg'}`}>

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
            <button onClick={() => router.back()} className={`text-[#6843B7] hover:text-[#9e7be9] transition-colors text-sm font-medium mb-8 inline-flex items-center gap-2`}>
              ← Go Back
            </button>
            <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-6 block">Personalized Demo</span>
            <h1 className={`text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
              See the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Future of</span><br />
              Testing
            </h1>
            
            <div className="space-y-8 mt-12 mb-12">
              {[
                { title: "Personalized Walkthrough", desc: "A tailored session focused on your team's unique testing challenges." },
                { title: "Live Agent Interaction", desc: "Watch our specialized agents think, adapt, and execute in real-time." },
                { title: "Architecture Deep-Dive", desc: "Understand how our AI-native engine scales across your stack." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#6843B7] mt-2.5 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className={`font-semibold text-lg mb-1 transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>{item.title}</h4>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>{item.desc}</p>
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
              className={`border rounded-md p-8 md:p-12 shadow-2xl transition-colors duration-500 ${isLight ? 'bg-app-fg border-app-border' : 'bg-app-surface border-app-border'}`}
            >
              {/* Contact Type Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div 
                  onClick={() => setContactType(contactType === 'sales' ? null : 'sales')}
                  className={`p-5 rounded-md border cursor-pointer flex flex-col justify-between transition-all ${contactType === 'sales' ? 'bg-[#6843B7]/10 border-[#6843B7] shadow-[0_0_20px_rgba(104,67,183,0.15)]' : isLight ? 'bg-[#FAFAFA] border-app-border hover:border-app-bg/20' : 'bg-app-bg border-app-border hover:border-app-border-hover'}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className={`font-bold text-sm transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>Contact Sales</h4>
                      <div className={`w-4 h-4 rounded-sm flex items-center justify-center border ${contactType === 'sales' ? 'border-[#6843B7] bg-[#6843B7]' : isLight ? 'border-app-bg/30' : 'border-app-fg/30'}`}>
                        {contactType === 'sales' && <CheckCircle2 size={12} className="text-app-fg" />}
                      </div>
                    </div>
                    <div className={`text-xs space-y-2 mb-6 transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>
                      <p>Email: <a href="mailto:sales@apmosys.com" className="text-[#6843B7] hover:underline font-medium">sales@apmosys.com</a></p>
                      <p>Phone: <span className={`font-medium transition-colors duration-500 ${isLight ? 'text-app-fg-invert/90' : 'text-app-fg/90'}`}>+91-22-4122 2250 / 2251</span></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] text-[#6843B7] bg-[#6843B7]/10 px-2 py-1 rounded-sm border border-[#6843B7]/20 font-medium">#EnterpriseLicense</span>
                    <span className="text-[10px] text-[#6843B7] bg-[#6843B7]/10 px-2 py-1 rounded-sm border border-[#6843B7]/20 font-medium">#Quotation</span>
                  </div>
                </div>

                <div 
                  onClick={() => setContactType(contactType === 'presales' ? null : 'presales')}
                  className={`p-5 rounded-md border cursor-pointer flex flex-col justify-between transition-all ${contactType === 'presales' ? 'bg-[#6843B7]/10 border-[#6843B7] shadow-[0_0_20px_rgba(104,67,183,0.15)]' : isLight ? 'bg-[#FAFAFA] border-app-border hover:border-app-bg/20' : 'bg-app-bg border-app-border hover:border-app-border-hover'}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className={`font-bold text-sm transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>Contact Pre-Sales Team</h4>
                      <div className={`w-4 h-4 rounded-sm flex items-center justify-center border ${contactType === 'presales' ? 'border-[#6843B7] bg-[#6843B7]' : isLight ? 'border-app-bg/30' : 'border-app-fg/30'}`}>
                        {contactType === 'presales' && <CheckCircle2 size={12} className="text-app-fg" />}
                      </div>
                    </div>
                    <div className={`text-xs space-y-2 mb-6 transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>
                      <p>Phone: <span className={`font-medium transition-colors duration-500 ${isLight ? 'text-app-fg-invert/90' : 'text-app-fg/90'}`}>+91 89768 19122</span></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] text-[#6843B7] bg-[#6843B7]/10 px-2 py-1 rounded-sm border border-[#6843B7]/20 font-medium">#FeaturedOverview</span>
                    <span className="text-[10px] text-[#6843B7] bg-[#6843B7]/10 px-2 py-1 rounded-sm border border-[#6843B7]/20 font-medium">#TechnicalQnA</span>
                  </div>
                </div>
              </div>
              
              {/* Container for the Calendar/Form and its Overlay */}
              <div className="relative">
                {contactType === null && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <span className={`px-6 py-3 rounded-md font-medium border transition-colors duration-500 shadow-xl pointer-events-auto text-center ${isLight ? 'bg-app-fg/80 text-app-fg-invert border-app-border' : 'bg-app-bg/80 text-app-fg border-app-border'}`}>
                      Please select a contact option above to proceed
                    </span>
                  </div>
                )}
                
                <div className={`transition-all duration-500 ${contactType === null ? 'opacity-30 pointer-events-none filter blur-[2px]' : 'opacity-100'}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
                  
                  {/* Calendar Column */}
                <div>
                  <h3 className={`text-xl font-semibold mb-10 flex items-center gap-3 transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
                    <span className="w-8 h-8 rounded-sm bg-[#6843B7]/20 flex items-center justify-center text-[#6843B7] text-sm">1</span>
                    Select a Date
                  </h3>
                  
                  <div className="flex items-center justify-between mb-8">
                    <button onClick={handlePrevMonth} className={`p-2 rounded-md transition-colors ${isLight ? 'hover:bg-app-bg/5' : 'hover:bg-app-fg/5'}`}><ChevronLeft size={18} className={isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'} /></button>
                    <h4 className={`text-sm font-bold uppercase tracking-widest transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>{monthNames[currentMonth]} {currentYear}</h4>
                    <button onClick={handleNextMonth} className={`p-2 rounded-md transition-colors ${isLight ? 'hover:bg-app-bg/5' : 'hover:bg-app-fg/5'}`}><ChevronRight size={18} className={isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'} /></button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {days.map(day => (
                      <div key={day} className={`text-[10px] font-bold uppercase text-center mb-2 transition-colors duration-500 ${isLight ? 'text-app-fg-invert/40' : 'text-app-fg/40'}`}>{day[0]}</div>
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
                          ? 'bg-[#6843B7] text-app-fg shadow-lg shadow-[#6843B7]/20 scale-110' 
                          : date && isToday(date)
                            ? `border border-[#6843B7] text-[#6843B7] ${isLight ? 'bg-[#6843B7]/5' : 'bg-[#6843B7]/10'}`
                            : date && isAvailable(date)
                              ? `${isLight ? 'text-app-fg-invert hover:bg-app-bg/5' : 'text-app-fg hover:bg-app-fg/10'}`
                              : `${isLight ? 'text-zinc-300 pointer-events-none' : 'text-zinc-700 pointer-events-none'}`
                        }`}
                      >
                        {date?.getDate()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Column */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className={`text-xl font-semibold mb-4 flex items-center gap-3 transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
                    <span className="w-8 h-8 rounded-sm bg-[#6843B7]/20 flex items-center justify-center text-[#6843B7] text-sm">2</span>
                    Your Details
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>First Name</label>
                      <input required type="text" className={`w-full border rounded-sm px-4 py-3 text-sm focus:border-[#6843B7] outline-none transition-all ${isLight ? 'bg-[#FAFAFA] border-app-border text-app-fg-invert' : 'bg-app-bg border-app-border text-app-fg'}`} />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>Last Name</label>
                      <input required type="text" className={`w-full border rounded-sm px-4 py-3 text-sm focus:border-[#6843B7] outline-none transition-all ${isLight ? 'bg-[#FAFAFA] border-app-border text-app-fg-invert' : 'bg-app-bg border-app-border text-app-fg'}`} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>Work Email</label>
                    <input required type="email" className={`w-full border rounded-sm px-4 py-3 text-sm focus:border-[#6843B7] outline-none transition-all ${isLight ? 'bg-[#FAFAFA] border-app-border text-app-fg-invert' : 'bg-app-bg border-app-border text-app-fg'}`} />
                  </div>

                  <div className="space-y-2">
                    <label className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>Meeting Time</label>
                    <select required className={`w-full border rounded-sm px-4 py-3 text-sm focus:border-[#6843B7] outline-none appearance-none transition-all ${isLight ? 'bg-[#FAFAFA] border-app-border text-app-fg-invert' : 'bg-app-bg border-app-border text-app-fg'}`}>
                      <option value="">Select a slot</option>
                      {isTimeAvailable("10:00") && <option value="10:00">10:00 AM — 10:30 AM</option>}
                      {isTimeAvailable("14:00") && <option value="14:00">02:00 PM — 02:30 PM</option>}
                      {isTimeAvailable("16:30") && <option value="16:30">04:30 PM — 05:00 PM</option>}
                    </select>
                  </div>

 <button type="submit" className="w-full py-4 bg-[#6843B7] text-app-fg rounded-sm hover:bg-[#6843B7]/90 transition-all  text-[14px] mt-4 active:scale-95">
                    Confirm Booking
                  </button>
                </form>
                </div>
              </div>
              </div>
            </motion.div>
          ) : contactType === 'presales' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`border rounded-md p-16 md:p-20 text-center flex flex-col items-center transition-colors duration-500 ${isLight ? 'bg-app-fg border-app-border shadow-[0_0_40px_rgba(37,211,102,0.05)]' : 'bg-app-surface border-app-border shadow-[0_0_40px_rgba(37,211,102,0.15)]'}`}
            >
              <div className="w-48 h-48 bg-app-fg p-2 rounded-md flex items-center justify-center mx-auto mb-8 shadow-2xl relative group">
                <div className="relative w-full h-full">
                  <Image src="/qr/image.png" alt="WhatsApp QR Code" fill sizes="192px" className="object-contain" />
                </div>
                <div className="absolute inset-0 bg-app-bg/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                  <span className="text-app-fg text-xs font-bold bg-[#25D366] px-3 py-1 rounded-full">WhatsApp</span>
                </div>
              </div>
              <h2 className={`text-3xl font-bold mb-4 tracking-tight transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>Connect Immediately</h2>
              <p className={`max-w-sm mx-auto mb-10 leading-relaxed transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>
                Scan this QR code to instantly start a WhatsApp chat with our technical Pre-Sales team and get your questions answered right away.
              </p>
              <button 
                onClick={() => { setIsSubmitted(false); setContactType(null); }}
                className={`px-8 py-3 border text-[14px] rounded-sm transition-all ${isLight ? 'border-app-bg/20 text-app-fg-invert hover:bg-app-bg/5' : 'border-app-border-hover text-app-fg hover:bg-app-fg/5'}`}
              >
                Go Back
              </button>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`border rounded-md p-16 md:p-20 text-center transition-colors duration-500 ${isLight ? 'bg-app-fg border-app-border shadow-[0_0_40px_rgba(104,67,183,0.05)]' : 'bg-app-surface border-app-border shadow-[0_0_40px_rgba(104,67,183,0.15)]'}`}
            >
              <div className="w-20 h-20 bg-[#6843B7]/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(104,67,183,0.2)]">
                <CheckCircle2 size={40} className="text-[#6843B7]" />
              </div>
              <h2 className={`text-3xl font-bold mb-4 tracking-tight transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>Demo Scheduled!</h2>
              <p className={`max-w-sm mx-auto mb-10 leading-relaxed transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-fg/60'}`}>
                Check your inbox for the calendar invite and meeting link. We can&apos;t wait to show you cliQTest.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
 className={`px-8 py-3 border text-[14px] rounded-sm transition-all ${isLight ? 'border-app-bg/20 text-app-fg-invert hover:bg-app-bg/5' : 'border-app-border-hover text-app-fg hover:bg-app-fg/5'}`}
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
