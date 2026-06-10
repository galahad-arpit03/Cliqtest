"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  slug: string;
  type: string;
  title: string;
  excerpt: string;
  image: string;
  isLight?: boolean;
}

export default function BlogCard({
  slug,
  type,
  title,
  excerpt,
  image,
  isLight,
}: BlogCardProps) {
  return (
    <Link href={`/blogs/${slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`group flex flex-col h-full border rounded-md overflow-hidden transition-colors duration-500 hover:border-[#6843B7]/50 ${isLight ? 'bg-app-surface border-app-border' : 'bg-app-surface border-app-border'}`}
      >
      <div className="relative w-full h-[240px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent transition-colors duration-500 ${isLight ? 'from-zinc-50' : 'from-app-surface'}`} />

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#6843B7]/20 border border-[#6843B7]/30 text-[#9e7be9] text-xs font-semibold">
          {type}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className={`text-xl font-semibold mb-4 leading-snug transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
          {title}
        </h3>

        <p className={`text-sm leading-relaxed flex-1 transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-muted'}`}>
          {excerpt}
        </p>

        <button className="mt-8 inline-flex items-center gap-2 text-[#6843B7] font-medium text-sm group-hover:text-[#9e7be9] transition-colors">
          Read Article →
        </button>
      </div>
      </motion.div>
    </Link>
  );
}