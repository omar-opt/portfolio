/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
function ProjectImage({ src, alt }: { src?: string; alt: string }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setError(true)}
    />
  );
}

interface ProjectCardProps {
  work: {
    company: string;
    href: string;
    location: string;
    title: string;
    start: string;
    end: string;
    description: string;
    tech: string[];
    pic: string | StaticImageData;
  };
}

export function ProjectCard({ work }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-zinc-700/50 transition-colors duration-500 
        
      `}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      {/* Image */}
      <Link href={work.href} target="_blank" rel="noopener noreferrer">
        <Image src={work.pic} alt={work.company} />
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{work.company}</h3>
            <p className="text-xs text-muted-foreground">
              {work.title} • {work.location}
            </p>
            <p className="text-xs text-muted-foreground">
              {work.start} – {work.end}
            </p>
          </div>

          <Link
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${work.company}`}>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {work.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {work.tech.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-1  border-border rounded-md text-muted-foreground border-[#484848] border-2 flex gap-2 justify-center items-center bg-gradient-to-r from-[#454544] to-[#88888851] border-opacity-5">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
