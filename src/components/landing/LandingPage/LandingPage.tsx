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
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-black">
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
