"use client";
import { motion, useMotionTemplate } from "framer-motion";
import React from "react";

function ButtonFir() {
  const backgroundImage = useMotionTemplate`radial-gradient(30% 40% at 50% 50%,  #FFDF9999 40%,#A36F0099 )`;

  return (
    <motion.div
      style={{ backgroundImage }}
      className="py-2 px-4 rounded-lg drop-shadow shadow-sm shadow-slate-300 backdrop-blur-sm border hover:cursor-pointer z-10 border-[#A36F0099] bg-gradient-radial(140% 100% at 50% 15%, #011627 65%,white) "
    >
      إبدأ التجربة المجانية
    </motion.div>
  );
}

export default ButtonFir;
