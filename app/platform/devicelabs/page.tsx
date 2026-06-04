import React from 'react';
import DeviceLabHero from '@/components/devicelabs/DeviceLabHero';
import DeviceLabFeatures from '@/components/devicelabs/DeviceLabFeatures';

export const metadata = {
  title: "Device Lab | cliQTest",
  description: "Validate applications on actual iOS and Android devices, and ensure cross-browser compatibility.",
};

export default function DeviceLabsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <DeviceLabHero />
      <DeviceLabFeatures />
    </div>
  );
}
