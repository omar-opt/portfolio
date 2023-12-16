"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const MotionLink = motion(Link);
// import { motion } from "framer-motion";
// const MotionLink = motion(Link);
export const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="../"
        className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: ["rgba(253,28,28,1)", "rgba(25,58,40,3)"],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        OM
      </MotionLink>
    </div>
  );
};
