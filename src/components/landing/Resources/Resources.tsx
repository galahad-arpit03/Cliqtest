"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogsData } from '@/data/blogs';
import BlogCard from '@/components/blogs/BlogCard';


export default function Resources({ isLight }: { isLight?: boolean }) {
  return (
    <section className={`w-full py-24 overflow-hidden relative transition-colors duration-500 ${isLight ? 'bg-[#FAFAFA] theme-light' : 'bg-app-bg'}`}>
      {/* Background Decor */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6843B7]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00F2B0]/5 blur-[120px] rounded-full pointer-events-none z-0" /> */}

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           
            <h2 className={`text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
              Latest Insights & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Knowledge Base</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/blogs" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-medium transition-colors border bg-app-fg/10 text-app-fg hover:bg-app-fg/20 border-app-border">
              View All Blogs
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.slice(0, 3).map((blog, idx) => (
            <BlogCard key={idx} {...blog} isLight={isLight} />
          ))}
        </div>

      </div>
    </section>
  );
}
