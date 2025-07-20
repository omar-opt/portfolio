"use client";
import { motion, useMotionTemplate } from "framer-motion";
import React from "react";

function ButtonFir() {
  const backgroundImage = useMotionTemplate`radial-gradient(30% 40% at 50% 50%, #2f2f2f 20%, #1A1A1A 90%, #1A1A1A 100%)`;
  return (
    <motion.div
      style={{ backgroundImage }}
      className="py-6 px-10 rounded-2xl drop-shadow shadow-sm font-bold text-xl
                 text-white 
                 shadow-slate-300 backdrop-blur-sm border hover:cursor-pointer z-10
                 border-gray-700 
                 ">
      Get in touch
    </motion.div>
  );
}

export default ButtonFir;
