// import React from "react";

// import { motion } from "framer-motion";
// import { BlogCard } from "../BlogCard";
// import { BLOGS } from "@/data/blog";

// function Solve() {
//   return (
//     <section className="w-full sm:w-9/12 flex flex-col gap-6 mb-10">
//       <div className="w-full flex justify-center items-center relative my-8">
//         {" "}
//         <div className="w-fit absolute bg-black h-full"></div>
//         <div className="w-fit bg-gradient-to-r from-[#26262b] to-[#000000]  z-50  p-4 px-6 rounded-2xl border-white border-2 flex justify-center items-center ">
//           <p className="heading-3 font-bold ">I Solve This</p>
//         </div>
//         <div className="absolute w-full bg-gradient-radial from-[#ffffff79] to-[#2c2c2c82] h-[1px]"></div>
//       </div>
//       <div className="flex flex-col justify-center items-center">
//         {" "}
//         <div className="flex flex-col justify-center items-center gap-4">
//           <p className="text-lg  text-center sm:text-2xl font-bold ">
//             I like solving probelms with code{" "}
//           </p>
//           <p className="sm:text-lg text-center">
//             I like solving problems with code, especially real-world problems.
//             It was a great and eye-opening experience working with different
//             tools. These challenges helped me grow as a developer.
//           </p>
//         </div>
//       </div>
//       {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
//         {DATA.work.map((obj) => (
//           <ProjectCard work={obj} key={obj.company} />
//         ))}
//       </div> */}
//     </section>
//   );
// }

// export default Solve;
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
          I Solve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            This
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
