"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

const socials = [
  { icon: Github, href: "https://github.com/omar-opt", name: "GitHub" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/chabira.omarabdellahabdelaziz",
    name: "Facebook",
  },
  { icon: Mail, href: "mailto:omarchabira7@gmail.com", name: "Email" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/omar-chabira-6a83552a4/",
    name: "LinkedIn",
  },
];

function SocialMedia() {
  return (
    <nav className="flex items-center justify-center gap-1">
      {socials.map((s, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.2, y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <Link
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-400 hover:text-white transition-all duration-300 border border-transparent hover:border-zinc-600"
            aria-label={s.name}>
            <s.icon
              size={18}
              className="transition-transform group-hover:scale-110"
            />

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-zinc-700">
              {s.name}
            </span>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 -translate-x-1/2 z-50">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* Main container */}
        <div className="relative flex items-center gap-4 px-2 py-2 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 hover:border-zinc-700/50 transition-colors duration-300 shadow-2xl shadow-black/50">
          {/* Logo/Brand */}
          <div className="hidden sm:flex items-center gap-3 pl-3 pr-4 border-r border-zinc-800">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">OC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-zinc-200">
                Omar Chabira
              </span>
              <span className="text-[10px] text-zinc-500">Full-Stack Dev</span>
            </div>
          </div>

          {/* Social Icons */}
          <SocialMedia />

          {/* CTA Button */}
          <Link
            href="mailto:omarchabira7@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-300 border border-zinc-700 hover:border-zinc-600">
            <Mail size={14} />
            <span>Let&apos;s talk</span>
          </Link>
        </div>
      </div>

      {/* Mobile: Simple copyright */}
      <div className="md:hidden text-center mt-2">
        <span className="text-[10px] text-zinc-600">© 2024 Omar Chabira</span>
      </div>
    </motion.footer>
  );
}
