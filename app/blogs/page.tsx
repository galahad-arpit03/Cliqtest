import React from 'react';
import BlogsHero from "@/components/blogs/BlogsHero";
import FeaturedBlog from "@/components/blogs/FeaturedBlog";
import BlogGrid from "@/components/blogs/BlogGrid";
import NewsletterCTA from "@/components/blogs/NewsletterCTA";
import PageThemeMenu from '@/components/common/PageThemeMenu';

export const metadata = {
  keywords: ["cliQTest", "automated testing", "QA platform", "software testing"],
  title: 'Blog | cliQTest',
  description: 'Latest insights, tutorials, and updates from the cliQTest team.',
};

export default function BlogsPage() {
  return (
    <PageThemeMenu 
      sections={[
        <BlogsHero key="hero" />,
        <FeaturedBlog key="featured" />,
        <BlogGrid key="grid" />,
        <NewsletterCTA key="cta" />
      ]}
    />
  );
}