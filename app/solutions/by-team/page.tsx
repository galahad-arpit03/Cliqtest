import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ByTeam from '@/components/solutions/ByTeam';

export const metadata = {
  title: 'Solutions by Team | cliQTest',
  description: 'Precision Quality Engineering for Every Team Tier. Discover how cliQTest accelerates delivery for QA teams, automation engineers, DevOps, and beyond.',
};

export default function ByTeamPage() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#00F2B0]/30 selection:text-white">
      <ByTeam />
    </div>
  );
}
