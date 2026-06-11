"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedPosts, getRecentPosts, trendingTopics } from "@/data/blogs";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";

export default function FeaturedBlog({ isLight }: { isLight?: boolean }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTag = searchParams?.get('tag');

  const handleTagClick = (topic: string) => {
    if (currentTag === topic) {
      router.push('/blogs', { scroll: false });
    } else {
      router.push(`/blogs?tag=${encodeURIComponent(topic)}`, { scroll: false });
    }
    
    // Scroll to the grid section so the user can see the filtered results
    const gridEl = document.getElementById('blog-grid-section');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className={`py-12 px-4 md:px-8 transition-colors duration-500 ${isLight ? 'bg-app-fg' : 'bg-app-bg'}`}>
      <div className="max-w-7xl mx-auto">

        {/* Categories */}
        <div className={`flex flex-wrap gap-8 border-b pb-5 mb-12 text-sm transition-colors duration-500 ${isLight ? 'border-app-border' : 'border-app-border'}`}>
          <button className={`border-b-2 pb-2 transition-colors duration-500 ${isLight ? 'text-app-fg-invert border-[#6843B7]' : 'text-app-fg border-[#6843B7]'}`}>
            All Resources
          </button>
          <button className="text-app-muted hover:text-app-fg">
            Whitepaper
          </button>
          <button className="text-app-muted hover:text-app-fg">
            Case Study
          </button>
          <button className="text-app-muted hover:text-app-fg">
            Blog Post
          </button>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

          {/* Left Side */}
          <div>
            <h2 className={`text-3xl font-semibold mb-8 tracking-tight transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
              Latest Intelligence
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {getFeaturedPosts().map((post, index) => (
                <BlogCard key={index} {...post} isLight={isLight} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className={`border-l pl-8 transition-colors duration-500 ${isLight ? 'border-app-border' : 'border-app-border'}`}>

            <div className="mb-12">
              <h3 className={`text-lg font-semibold mb-6 tracking-wide transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
                TRENDING TOPICS
              </h3>

              <div className="flex flex-wrap gap-3">
                {trendingTopics.map((topic) => {
                  const isActive = currentTag === topic;
                  return (
                    <span
                      key={topic}
                      onClick={() => handleTagClick(topic)}
                      className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition-colors duration-300 ${
                        isActive 
                          ? "bg-[#6843B7] border-[#6843B7] text-white shadow-md" 
                          : "border-[#6843B7]/30 bg-[#6843B7]/5 text-[#6843B7] hover:bg-[#6843B7]/10"
                      }`}
                    >
                      #{topic}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-semibold mb-6 tracking-wide transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
                RECENTLY PUBLISHED
              </h3>

              <div className={`border rounded-md transition-colors duration-500 ${isLight ? 'bg-app-surface border-app-border' : 'bg-app-surface border-app-border'}`}>
                {getRecentPosts().map((post, index) => (
                  <Link
                    href={`/blogs/${post.slug}`}
                    key={index}
                    className={`p-6 block transition-colors ${isLight ? 'hover:bg-app-bg/5' : 'hover:bg-app-surface-hover'} ${
                      index !== getRecentPosts().length - 1
                        ? isLight ? "border-b border-app-border" : "border-b border-app-border"
                        : ""
                    }`}
                  >
                    <p className="text-[#6843B7] text-xs mb-3">
                      {post.date}
                    </p>

                    <h4 className={`font-medium leading-relaxed cursor-pointer transition-colors duration-500 ${isLight ? 'text-app-fg-invert hover:text-[#6843B7]' : 'text-app-fg hover:text-[#6843B7]'}`}>
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}