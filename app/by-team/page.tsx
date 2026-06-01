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
    <>
      <Navbar />
      <main className="flex-1 bg-black pt-20">
        <ByTeam />
      </main>
      <Footer />
    </>
  );
}
