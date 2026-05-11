import React from 'react';
import Hero from "@/components/landing/Hero/Hero";
import Logos from "@/components/landing/Logos/Logos";
import Platform from "@/components/landing/Platform/Platform";
import CloudFirst from "@/components/landing/CloudFirst/CloudFirst";
import MeetAgents from "@/components/landing/MeetAgents/MeetAgents";
import Testimonials from "@/components/landing/Testimonials/Testimonials";
import Resources from "@/components/landing/Resources/Resources";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#030303]">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      
      <Hero />
      <Logos />
      <Platform />
      <CloudFirst />
      <MeetAgents />
      <Testimonials />
      <Resources />
      
      {/* Additional sections can be added here */}
    </div>
  );
}
