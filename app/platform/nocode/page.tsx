import React from 'react';
import NoCodeHero from '@/components/nocode/NoCodeHero';
import RecorderFeature from '@/components/nocode/RecorderFeature';
import ScriptlessFeature from '@/components/nocode/ScriptlessFeature';
import AdvancedFeatures from '@/components/nocode/AdvancedFeatures';

export const metadata = {
  title: 'No-Code Automation | cliQTest',
  description: 'Intelligent Recorder, Scriptless Automation, Reusable Components, and Auto-Healing',
};

export default function NoCodePage() {
  return (
    <>
      <NoCodeHero />
      <div className="bg-[#000000] text-white pt-20 w-full px-8 md:px-16 lg:px-32 xl:px-16 pb-8 text-left z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
          Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">No-Code Engine</span>
        </h2>
        <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
          Democratize your testing efforts with AI-powered scriptless automation, intelligent recorders, and self-healing tests.
        </p>
      </div>
      <div className="bg-[#000000] flex flex-col gap-8 pb-8 pt-4">
        <RecorderFeature />
        <ScriptlessFeature />
      </div>
      <AdvancedFeatures />
    </>
  );
}
