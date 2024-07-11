"use client";
import { useEffect, useState } from "react";
import { easeIn, motion, transform } from "framer-motion";

function MouseAnimation() {
  const [mousePlace, setMousePlace] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mousePostion = (e: any) => {
      console.log("sss", e);
      setMousePlace({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousePostion);
    return;
    window.removeEventListener("mousemove", mousePostion);
  }, []);

  return (
    <motion.div
      className="hidden sm:block w-10 h-10 rounded-full bg-[#67f8cc] absolute  blur-md"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: 1.2,
        rotate: 360,

        x: mousePlace.x - 16,
        y: mousePlace.y - 16,
        transition: { duration: 0, ease: "easeIn" },
      }}
    ></motion.div>
  );
}

export default MouseAnimation;
