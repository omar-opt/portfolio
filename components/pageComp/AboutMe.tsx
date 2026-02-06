"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import pic from "../../public/pic.png";
import { MapPin, Code2, Palette, Rocket } from "lucide-react";

function AboutMe() {
  const highlights = [
    { icon: Code2, label: "Clean Code", desc: "TypeScript & React" },
    { icon: Palette, label: "UI/UX Design", desc: "User-centered" },
    { icon: Rocket, label: "Performance", desc: "Optimized & Fast" },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-2/5 flex justify-center">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-110" />

            {/* Image Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-zinc-800">
                <Image
                  src={pic}
                  alt="Omar Chabira"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-zinc-300 font-medium">
                  Open to work
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-3/5">
            {/* Section Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                Get to know me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Crafting Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Experiences
              </span>
            </h2>

            {/* Location */}
            <div className="flex items-center gap-2 text-zinc-400 mb-6">
              <MapPin size={16} />
              <span className="text-sm">Based in Algeria,</span>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-zinc-200 leading-relaxed mb-8">
              <p>
                I&apos;m{" "}
                <span className="text-zinc-100 font-semibold">
                  Omar Chabira
                </span>
                , a passionate full-stack developer and designer with over 2
                years of experience transforming complex ideas into elegant,
                functional web solutions.
              </p>
              <p>
                My journey began with a simple curiosity about how things work,
                which evolved into a deep passion for crafting seamless digital
                experiences. I specialize in the React ecosystem, modern UI
                design, and building products that make a real difference in
                people&apos;s lives.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-400 mb-2" />
                  <div className="text-sm font-medium text-zinc-200">
                    {item.label}
                  </div>
                  <div className="text-xs text-zinc-500">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
