"use client";
import {
  useMotionValue,
  useMotionTemplate,
  animate,
  motion,
} from "framer-motion";
import React, { useEffect } from "react";
const COLOR = [
  "#26f7ec62",

  "#34ece3ab",
  "#4D5BCE",
  "#7a34ecab",
  "#9b86bdbd",
  "#13FFAA",
  "#1E67C6",
  "#CE84CF",
  "#DD335C",
];
function LandingAnim() {
  const color = useMotionValue(COLOR[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(100% 100% at 50% 15%, #011627 65%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLOR, {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="h-full w-screen place-content-center  overflow-hidden rounded-lg"
    ></motion.div>
  );
}

export default LandingAnim;
