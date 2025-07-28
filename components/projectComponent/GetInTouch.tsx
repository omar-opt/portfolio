"use client";
import { motion, useMotionTemplate } from "framer-motion";
import React from "react";

function GetInTouch() {
  const backgroundImage = useMotionTemplate`radial-gradient(30% 40% at 50% 50%, #2f2f2f 20%, #1A1A1A 90%, #1A1A1A 100%)`;
  return (
    <motion.div
      style={{ backgroundImage }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 13 }}
      className="py-3 sm:py-5 px-4 sm:px-8 rounded-3xl drop-shadow shadow-sm font-bold text-sm sm:text-xl
           text-white 
           shadow-slate-300 backdrop-blur-sm border hover:cursor-pointer z-10
           border-gray-700 
           ">
      Get in touch
    </motion.div>
  );
}

export default GetInTouch;
