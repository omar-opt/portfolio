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
  { icon: Mail, href: "mailto:omarchabira7@gmil.com", name: "Mail" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/omar-chabira-6a83552a4/",
    name: "LinkedIn",
  },
];

function SocialMedia() {
  return (
    <nav className="flex items-center justify-center gap-2 ">
      {socials.map((s, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.5, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <Link
            href={s.href}
            target="_blank"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
            <s.icon size={22} />
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}

export default SocialMedia;
