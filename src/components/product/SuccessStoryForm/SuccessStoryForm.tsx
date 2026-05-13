"use client";

import React from 'react';

export default function SuccessStoryForm() {
  return (
    <section className="relative bg-[#330066] py-32 px-12 overflow-hidden">
      {/* Background Gradient / Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4c0099] to-[#1a0033] -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side Content */}
        <div>
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-10 leading-[1.1]">
            The Power of Agentic AI, <br />
            Your Success Story
          </h2>
          <p className="text-white/80 text-xl md:text-2xl font-medium max-w-xl leading-relaxed">
            Discover the future of automation with the Functionize Agentic Platform. Schedule a demo today.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="bg-white rounded-[32px] p-10 md:p-12 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider">First name<span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-zinc-100 border-none rounded-lg p-4 text-zinc-900 focus:ring-2 focus:ring-[#00AEEF] outline-none" required />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider">Last name<span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-zinc-100 border-none rounded-lg p-4 text-zinc-900 focus:ring-2 focus:ring-[#00AEEF] outline-none" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider">Business Email<span className="text-red-500">*</span></label>
              <input type="email" className="w-full bg-zinc-100 border-none rounded-lg p-4 text-zinc-900 focus:ring-2 focus:ring-[#00AEEF] outline-none" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider">Job Role<span className="text-red-500">*</span></label>
                <select className="w-full bg-zinc-100 border-none rounded-lg p-4 text-zinc-900 focus:ring-2 focus:ring-[#00AEEF] outline-none appearance-none" required>
                  <option value="">Please Select</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider">Company Revenue<span className="text-red-500">*</span></label>
                <select className="w-full bg-zinc-100 border-none rounded-lg p-4 text-zinc-900 focus:ring-2 focus:ring-[#00AEEF] outline-none appearance-none" required>
                  <option value="">Please Select</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider block">
                Which areas of your application landscape would benefit most from AI-based testing? (Select all that apply)<span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Web Browser', 'API', 'Database', 'Native Mobile', 'Load', 'Performance', 'Mobile Web & Safari'].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-zinc-300 text-[#00AEEF] focus:ring-[#00AEEF]" />
                    <span className="text-zinc-700 text-sm font-medium group-hover:text-black transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider">Are you using any test automation tools today?<span className="text-red-500">*</span></label>
              <select className="w-full bg-zinc-100 border-none rounded-lg p-4 text-zinc-900 focus:ring-2 focus:ring-[#00AEEF] outline-none appearance-none" required>
                <option value="">Please Select</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider">What is the size of your QA or testing team?<span className="text-red-500">*</span></label>
              <select className="w-full bg-zinc-100 border-none rounded-lg p-4 text-zinc-900 focus:ring-2 focus:ring-[#00AEEF] outline-none appearance-none" required>
                <option value="">Please Select</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-zinc-500 uppercase tracking-wider">What testing challenges are you hoping to solve with AI test automation?</label>
              <textarea className="w-full bg-zinc-100 border-none rounded-lg p-4 text-zinc-900 focus:ring-2 focus:ring-[#00AEEF] outline-none min-h-[100px] resize-none" />
            </div>

            <div className="pt-4 flex justify-end">
              <button type="submit" className="bg-[#00AEEF] text-white font-bold py-4 px-12 rounded-full hover:bg-[#0091c7] transition-colors uppercase tracking-widest text-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
