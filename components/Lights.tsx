"use client";
import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useTime } from "framer-motion";
import { randomBytes } from "crypto";

function Lights() {
  const [hori, setHori] = useState(0);
  const [ver, setVer] = useState(0);
  let a = 1;
  let b = 1;
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 22000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  // const rotateX = useTransform(
  //   time,
  //   [0, 8000], // For every 4 seconds...
  //   [1, 90], // ...rotate 360deg
  //   { clamp: false }
  // );

  return (
    <div className="overflow-hidden">
      <motion.div
        className="w-40 md:w-[444px] h-96  absolute top-10 md:top-40 left-2  sm:left-24"
        style={{ rotate }}
      >
        <motion.div
          style={{}}
          whileHover={{
            scale: 1.2,
            transition: { duration: 2 },
          }}
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: 1,
            // x: [10, 0, 100, 10, 0],
            transition: { duration: 8, loop: true },
          }}
          className=" w-64 h-64 rounded-full bg-[#56ffcc] z-0 blur-[40px] bg-opacity-25 top-12 left-0 "
        ></motion.div>
      </motion.div>
      <motion.div
        className="w-40 h-40 rounded-full   md:w-[444px]  md:h-96  absolute top-[444px] left-24 sm:left-[55%]"
        style={{ rotate }}
      >
        <motion.div className="w-52 h-52  md:w-64 md:h-64  rounded-full bg-[#4e62f8] z-0 blur-[30px] bg-opacity-25 top-[52%] left-[36%]"></motion.div>
      </motion.div>
      <div className="absolute w-40 h-44 rounded-full bg-[#56a2ff] z-0 blur-[100px] bg-opacity-30 left-6 md:left-[85%]  top-44"></div>
      <div className="absolute w-24 h-24 rounded-full bg-[#2c6087c5] z-0 blur-[60px] bottom-1 left-32 bg-opacity-40"></div>
    </div>
  );
}

export default Lights;
