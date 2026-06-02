import React from 'react';
import type { Metadata } from 'next';
import NewsroomContent from '@/components/newsroom/NewsroomContent';
import NewsroomHero from '@/components/newsroom/NewsroomHero';

export const metadata: Metadata = {
  title: 'Newsroom',
  description: 'Product Announcements, Events & Webinars, and Media Coverage.',
};

export default function NewsroomPage() {
  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      <NewsroomHero />
      <NewsroomContent />
    </main>
  );
}
