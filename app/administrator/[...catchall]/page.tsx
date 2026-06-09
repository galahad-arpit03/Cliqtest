import React from "react";
import { Hammer } from "lucide-react";

export default function AdminPlaceholderPage({ params }: { params: { catchall: string[] } }) {
  const path = params.catchall.join("/");
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="w-16 h-16 bg-[#6843B7]/10 rounded-full flex items-center justify-center mb-6 border border-[#6843B7]/20">
        <Hammer className="w-8 h-8 text-[#6843B7]" />
      </div>
      
      <h1 className="text-2xl md:text-3xl font-heading font-bold text-[#FAFAFA] mb-3 tracking-tight">
        Module Under Construction
      </h1>
      
      <p className="text-[#7A7A7A] max-w-md text-[15px] leading-relaxed mb-8">
        The administrative interface for <span className="text-[#FAFAFA] font-mono px-1.5 py-0.5 bg-[#1A1A1A] rounded">/{path}</span> is currently being built. 
        You will soon be able to manage this section's content from here.
      </p>
      
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2A2A2A]">
        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
        <span className="text-xs font-medium text-[#A0A0A0] uppercase tracking-wider">
          Coming Soon
        </span>
      </div>
    </div>
  );
}
