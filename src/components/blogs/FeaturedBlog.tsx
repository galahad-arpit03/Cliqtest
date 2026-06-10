"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedPosts, getRecentPosts, trendingTopics } from "@/data/blogs";

export default function FeaturedBlog({ isLight }: { isLight?: boolean }) {
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`relative h-[260px] rounded-md overflow-hidden border transition-colors duration-500 ${isLight ? 'border-app-border' : 'border-app-border'}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <Link href={`/blogs/${post.slug}`} className="mt-5 block group-hover:opacity-90 transition-opacity">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[#9e7be9] text-xs uppercase tracking-[0.15em]">
                        {post.type}
                      </span>

                      <span className="text-app-muted text-xs">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className={`text-2xl font-semibold mb-4 transition-colors duration-500 ${isLight ? 'text-app-fg-invert group-hover:text-[#6843B7]' : 'text-app-fg'}`}>
                      {post.title}
                    </h3>

                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-muted'}`}>
                      {post.excerpt}
                    </p>
                  </Link>
                </motion.div>
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
                {trendingTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 rounded-full border border-[#6843B7]/30 bg-[#6843B7]/5 text-[#6843B7] text-sm cursor-pointer hover:bg-[#6843B7]/10 transition-colors duration-300"
                  >
                    #{topic}
                  </span>
                ))}
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