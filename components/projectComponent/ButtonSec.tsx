"use client";
import { motion, useMotionTemplate } from "framer-motion";
import React, { useState } from "react";

function ButtonSec() {
  const backgroundImage = useMotionTemplate`radial-gradient(30% 40% at 50% 50%,  #FFDF9999 40%,#A36F0099 )`;
  const [hover, setHover] = useState();
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      animate={{}}
      //  style={{ hover?  backgroundImage : "" }}
      className={`w-20 h-10 text-center   place-content-center transition-colors hover:cursor-pointer group relative z-10 border-[#A36F0099] hover:{setHover(true)}`}
    >
      button
      <span className="absolute h-0.5 w-0 duration-100 transition-all bg-white group-hover:w-full left-0  "></span>
      <span className="absolute h-0 w-0.5 delay-100 duration-100 transition-all bg-white group-hover:h-full right-0  "></span>
      <span className="absolute h-0.5 w-0 delay-200 mt-2 duration-100 bg-white transition-all group-hover:w-full top-10 right-0 "></span>
      <span className="absolute h-0 w-0.5 duration-100 bg-white group-hover:h-full left-0  transition-all delay-300  "></span>
    </motion.div>
  );
}

export default ButtonSec;
