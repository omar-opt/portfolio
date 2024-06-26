// "use client";
import React from "react";
import { motion } from "framer-motion";

function Lights() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{
          opacity: 1,
          x: 656,
          y: 67,
          transition: { duration: 5, delay: 2 },
        }}
        className="absolute w-48 h-44 rounded-full bg-[#3d82b689] z-0 blur-[50px] bg-opacity-40 top-12 left-0 "
      ></motion.div>
      <div className="hidden md:absolute w-64 h-60 rounded-full bg-[#2c6087c5] z-0 blur-[100px] bg-opacity-25 top-[52%] left-[36%]"></div>
      <div className="absolute w-40 h-44 rounded-full bg-[#2c6087c5] z-0 blur-[100px] bg-opacity-30 left-6 md:left-[85%]  top-44"></div>
      <div className="absolute w-24 h-24 rounded-full bg-[#2c6087c5] z-0 blur-[60px] bottom-1 left-32 bg-opacity-40"></div>
    </div>
  );
}

export default Lights;
