"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

interface BlogCardProps {
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  coverImage?: string | StaticImageData;
  category: string;
  readTime: string;
  publishedAt: string;
  icons: IconType[];
  challenge: string;
  solution: string;
  result: string;
  featured?: boolean;
}

export function BlogCard({
  slug,
  title,
  headline,
  excerpt,
  coverImage,
  category,
  readTime,
  publishedAt,
  icons,
  challenge,
  solution,
  result,
  featured = false,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-zinc-700/50 transition-colors duration-500 ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className={`relative ${featured ? "md:flex" : ""}`}>
        {/* Image Section */}
        {coverImage && (
          <div
            className={`relative overflow-hidden ${featured ? "md:w-1/2" : "aspect-[16/10]"}`}>
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                {category}
              </span>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
          </div>
        )}

        {/* Content Section */}
        <div
          className={`p-6 md:p-8 ${featured ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""}`}>
          {/* Icons */}
          <div className="flex items-center gap-3 mb-4">
            {icons.slice(0, 4).map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
                className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                <Icon size={18} />
              </motion.div>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-3">
            <span>{readTime}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span>
              {new Date(publishedAt).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-bold text-zinc-100 mb-3 group-hover:text-blue-400 transition-colors duration-300 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
            {title}
          </h3>

          {/* Headline */}
          <p
            className={`text-zinc-400 mb-4 leading-relaxed ${featured ? "text-base" : "text-sm line-clamp-2"}`}>
            {headline}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-zinc-800/30 border border-zinc-800/50">
              <p className="text-xs text-zinc-500 mb-1">Challenge</p>
              <p className="text-xs text-zinc-300 font-medium line-clamp-2">
                {challenge}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-zinc-800/30 border border-zinc-800/50">
              <p className="text-xs text-zinc-500 mb-1">Solution</p>
              <p className="text-xs text-zinc-300 font-medium line-clamp-2">
                {solution}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-zinc-800/30 border border-zinc-800/50">
              <p className="text-xs text-zinc-500 mb-1">Result</p>
              <p className="text-xs text-emerald-400 font-medium line-clamp-2">
                {result}
              </p>
            </div>
          </div>

          {/* Read More */}
          <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors group/link">
            <span> the full story comming soon</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover/link:translate-x-1 transition-transform">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
