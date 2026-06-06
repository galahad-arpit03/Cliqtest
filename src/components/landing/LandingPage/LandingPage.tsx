import React from 'react';
import Hero from "@/components/landing/Hero/Hero";
import Logos from "@/components/landing/Logos/Logos";
import Platform from "@/components/landing/Platform/Platform";
import CloudFirst from "@/components/landing/CloudFirst/CloudFirst";
import MeetAgents from "@/components/landing/MeetAgents/MeetAgents";
import Resources from "@/components/landing/Resources/Resources";
import CustomerMarquee from "@/components/common/CustomerMarquee";

export default function LandingPage() {
  return (
    <div className="relative min-h-[800px] flex flex-col overflow-hidden bg-black">
      <Hero />
      <Logos />
      <Platform />
      <CloudFirst />
      <MeetAgents />
      <CustomerMarquee />
      <Resources />
      
      {/* Additional sections can be added here */}
    </div>
  );
}
