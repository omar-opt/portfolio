"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import type { StaticImageData } from "next/image";
import { BlogCard } from "../BlogCard";
import { BLOGS } from "@/data/blog";

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

export function Solve() {
  const { featured, posts } = BLOGS;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Case{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Study
          </span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Real problems. Real solutions. Stories of how code solved complex
          challenges in my life and work.
        </p>
      </motion.div>

      {/* Featured Post */}
      <div className="mb-8">
        <BlogCard
          slug={featured.slug}
          title={featured.title}
          headline={featured.headline}
          excerpt={featured.excerpt}
          coverImage={featured.coverImage}
          category={featured.category}
          readTime={featured.readTime}
          publishedAt={featured.publishedAt}
          icons={featured.icons}
          challenge="10 heirs, Islamic law, $0 budget"
          solution="Python + GIS algorithm"
          result="$0 cost, zero disputes"
          featured={true}
        />
      </div>

      {/* All Posts Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            headline={post.headline}
            excerpt={post.excerpt}
            coverImage={post.coverImage}
            category={post.category}
            readTime={post.readTime}
            publishedAt={post.publishedAt}
            icons={post.cardData.icons}
            challenge={post.cardData.challenge}
            solution={post.cardData.solution}
            result={post.cardData.result}
          />
        ))}
      </div> */}
    </section>
  );
}

export default Solve;
