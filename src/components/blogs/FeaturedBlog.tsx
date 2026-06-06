"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedPosts, getRecentPosts, trendingTopics } from "@/data/blogs";

export default function FeaturedBlog() {
  return (
    <section className="bg-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Categories */}
        <div className="flex flex-wrap gap-8 border-b border-white/10 pb-5 mb-12 text-sm">
          <button className="text-white border-b-2 border-[#6843B7] pb-2">
            All Resources
          </button>
          <button className="text-zinc-500 hover:text-white">
            Whitepaper
          </button>
          <button className="text-zinc-500 hover:text-white">
            Case Study
          </button>
          <button className="text-zinc-500 hover:text-white">
            Blog Post
          </button>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

          {/* Left Side */}
          <div>
            <h2 className="text-white text-3xl font-semibold mb-8 tracking-tight">
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
                  <div className="relative h-[260px] rounded-md overflow-hidden border border-white/10">
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

                      <span className="text-zinc-500 text-xs">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-white text-2xl font-semibold mb-4">
                      {post.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="border-l border-white/10 pl-8">

            <div className="mb-12">
              <h3 className="text-white text-lg font-semibold mb-6 tracking-wide">
                TRENDING TOPICS
              </h3>

              <div className="flex flex-wrap gap-3">
                {trendingTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 rounded-full bg-[#0A0A0A] border border-white/10 text-zinc-300 text-sm cursor-pointer"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-6 tracking-wide">
                RECENTLY PUBLISHED
              </h3>

              <div className="bg-[#0A0A0A] border border-white/10 rounded-md">
                {getRecentPosts().map((post, index) => (
                  <Link
                    href={`/blogs/${post.slug}`}
                    key={index}
                    className={`p-6 block hover:bg-[#111111] transition-colors ${
                      index !== getRecentPosts().length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <p className="text-[#6843B7] text-xs mb-3">
                      {post.date}
                    </p>

                    <h4 className="text-white font-medium leading-relaxed cursor-pointer">
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