"use client";

import React from "react";
import { motion } from "framer-motion";

type SkillCardProps = {
  name: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  index?: number;
};

export default function SkillCard({ name, Icon, index = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />

      {/* Card */}
      <div className="relative flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-600 transition-colors duration-300 backdrop-blur-sm">
        {/* Icon container */}
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-300">
          <Icon
            className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300"
            size={20}
          />
        </div>

        {/* Name */}
        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
          {name}
        </span>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}
