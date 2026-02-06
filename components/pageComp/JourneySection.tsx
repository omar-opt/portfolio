"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink, Briefcase } from "lucide-react";
import { DATA } from "@/data/data";

interface WorkCardProps {
  company: string;
  href: string;

  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
  tech: string[];
  pic: any;
  index?: number;
  isLast?: boolean;
}

function WorkCard({
  company,
  href,

  location,
  title,
  logoUrl,
  start,
  end,
  description,
  tech,
  pic,
  index = 0,
  isLast = false,
}: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-6 md:gap-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] md:left-[23px] top-14 w-px h-[calc(100%-2rem)] bg-gradient-to-b from-zinc-700 to-zinc-800" />
      )}

      {/* Timeline Dot */}
      <div className="relative flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center z-10 relative">
          <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-zinc-400" />
        </motion.div>

        {/* Pulse animation for current job */}
        {isLast && (
          <div className="absolute inset-5 rounded-full bg-blue-500/20 animate-ping" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-12">
        <div className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />

          <div className="relative">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="relative w-12 h-12 rounded-xl bg-zinc-800 overflow-hidden flex-shrink-0 border border-zinc-700">
                  <Image
                    src={logoUrl}
                    alt={company}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {title}
                  </h3>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
                    <span className="font-medium">{company}</span>
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </div>
              </div>

              {/* Date Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm text-zinc-400">
                <Calendar size={14} />
                <span>{start}</span>
                <span className="text-zinc-600">→</span>
                <span>{end}</span>
              </div>
            </div>

            {/* Location & Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                <MapPin size={14} />
                <span>{location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed mb-4">{description}</p>

            {/* Tech Stack */}
            {tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Journey Section
export function JourneySection() {
  const { work } = DATA;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
            My Journey
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Where I&apos;ve Worked
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            From my first frontend role to shipping production apps — every
            experience sharpened my skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {work.map((job, index) => (
            <WorkCard
              key={job.company}
              {...job}
              index={index}
              isLast={index === work.length - 1}
            />
          ))}
        </div>

        {/* Future hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mt-4 ml-1">
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-zinc-700 flex items-center justify-center">
            <span className="text-zinc-600 text-lg">?</span>
          </div>
          <p className="text-zinc-600 text-sm">Your company could be here...</p>
        </motion.div>
      </div>
    </section>
  );
}

export default JourneySection;
