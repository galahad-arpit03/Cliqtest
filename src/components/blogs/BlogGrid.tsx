"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";

import { blogsData } from "@/data/blogs";

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBlogs =
    activeFilter === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.type === activeFilter);

  const filters = [
    "All",
    "Whitepaper",
    "Case Study",
    "Blog Post",
  ];

  return (
    <section className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Latest Articles
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Explore whitepapers, case studies and technical insights
            from the cliQTest team.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm
                ${
                  activeFilter === filter
                    ? "bg-[#6843B7] border-[#6843B7] text-white"
                    : "bg-[#0A0A0A] border-white/10 text-white hover:border-white/20"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}