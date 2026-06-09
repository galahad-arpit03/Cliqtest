"use client";

import React from 'react';
import Hero from "@/components/landing/Hero/Hero";
import Logos from "@/components/landing/Logos/Logos";
import Platform from "@/components/landing/Platform/Platform";
import CloudFirst from "@/components/landing/CloudFirst/CloudFirst";
import MeetAgents from "@/components/landing/MeetAgents/MeetAgents";
import Resources from "@/components/landing/Resources/Resources";
import CustomerMarquee from "@/components/common/CustomerMarquee";
import SectionThemeWrapper from "@/admin/components/SectionThemeWrapper";

export default function LandingPage() {
  return (
    <div className="relative min-h-[800px] flex flex-col overflow-hidden bg-black transition-colors duration-500">
      <SectionThemeWrapper sectionId="hero" defaultTheme="dark">
        {(theme) => <Hero theme={theme} />}
      </SectionThemeWrapper>
      
      <SectionThemeWrapper sectionId="logos" defaultTheme="dark">
        {(theme) => <Logos theme={theme} />}
      </SectionThemeWrapper>
      
      <SectionThemeWrapper sectionId="platform" defaultTheme="dark">
        {(theme) => <Platform theme={theme} />}
      </SectionThemeWrapper>
      
      <SectionThemeWrapper sectionId="cloudFirst" defaultTheme="dark">
        {(theme) => <CloudFirst theme={theme} />}
      </SectionThemeWrapper>
      
      <SectionThemeWrapper sectionId="meetAgents" defaultTheme="dark">
        {(theme) => <MeetAgents theme={theme} />}
      </SectionThemeWrapper>
      
      <SectionThemeWrapper sectionId="customerMarquee" defaultTheme="dark">
        {(theme) => <CustomerMarquee theme={theme} />}
      </SectionThemeWrapper>
      
      <SectionThemeWrapper sectionId="resources" defaultTheme="dark">
        {(theme) => <Resources theme={theme} />}
      </SectionThemeWrapper>
      
      {/* Additional sections can be added here */}
    </div>
  );
}
