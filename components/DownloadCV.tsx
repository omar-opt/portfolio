"use client";
import { motion, useMotionTemplate } from "framer-motion";
import React from "react";

function DownlaodCV() {
  const backgroundImage = useMotionTemplate`radial-gradient(30% 40% at 50% 50%, #ffffff 20%, #f0f0f0 90%, #f0f0f0 100%)`;
  return (
    <motion.div
      style={{ backgroundImage }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3 }}
      className="hidden md:block py-3 sm:py-5 px-4 sm:px-8 rounded-3xl drop-shadow shadow-sm font-bold text-sm sm:text-xl
           text-black 
           shadow-slate-100 backdrop-blur-sm border hover:cursor-pointer z-10
           border-gray-200 
           ">
      Downlaod CV
    </motion.div>
  );
}

export default DownlaodCV;
