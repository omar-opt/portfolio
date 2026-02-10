"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import GetInTouch from "../GetInTouch";
import DownlaodCV from "../DownloadCV";

function Hero() {
  return (
    <section className="relative w-full  flex items-center  justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 w-full  text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-zinc-300">
            Available for freelance work
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            Digital Experiences
          </span>
          <br />
          That Matter
        </motion.h1>

        {/* Subheadline with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-100 max-w-3xl mx-auto mb-4 h-16 md:h-20">
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer crafting scalable web applications...",
                "UI/UX Designer creating intuitive user experiences...",
                "Problem Solver turning complex challenges into elegant solutions...",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay: 50,
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-200 text-base md:text-lg max-w-2xl mx-auto mb-10">
          I specialize in building modern, responsive applications using React,
          Next.js, and TypeScript. From concept to deployment, I bring ideas to
          life with clean code and thoughtful design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <DownlaodCV />
          <GetInTouch />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
