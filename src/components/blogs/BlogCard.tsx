"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
  type: string;
  title: string;
  excerpt: string;
  image: string;
}

export default function BlogCard({
  type,
  title,
  excerpt,
  image,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col bg-[#0A0A0A] border border-white/10 rounded-md overflow-hidden hover:border-white/20 transition-colors"
    >
      <div className="relative w-full h-[240px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            grayscale
            brightness-75
            opacity-80
            group-hover:grayscale-0
            group-hover:brightness-100
            group-hover:opacity-100
            group-hover:scale-105
            transition-all
            duration-700
            ease-out
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#6843B7]/20 border border-[#6843B7]/30 text-[#9e7be9] text-xs font-semibold">
          {type}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-white text-xl font-semibold mb-4 leading-snug group-hover:text-[#6843B7] transition-colors">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed flex-1">
          {excerpt}
        </p>

        <button className="mt-8 inline-flex items-center gap-2 text-[#6843B7] font-medium text-sm">
          Read Article →
        </button>
      </div>
    </motion.div>
  );
}