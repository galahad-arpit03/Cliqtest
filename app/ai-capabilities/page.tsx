import React from 'react';
import AiHero from "@/components/ai-capabilities/AiHero";
import TestGeneration from "@/components/ai-capabilities/TestGeneration";
import SelfHealing from "@/components/ai-capabilities/SelfHealing";
import DefectInsights from "@/components/ai-capabilities/DefectInsights";
import SmartRecommendations from "@/components/ai-capabilities/SmartRecommendations";

export const metadata = {
  title: 'AI Capabilities | cliQTest',
  description: 'Leverage Generative AI to automate test creation, self-heal execution scripts, and gain intelligent defect insights.',
};

export default function AiCapabilitiesPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <AiHero />
      <TestGeneration />
      <SelfHealing />
      <DefectInsights />
      <SmartRecommendations />
    </div>
  );
}
