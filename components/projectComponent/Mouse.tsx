"use client";
import { useEffect, useState } from "react";
import { easeIn, motion, transform } from "framer-motion";

function Mouse() {
  const [mousePlace, setMousePlace] = useState({
    x: 0,
    y: 0,
  });
  const [borderPlace, setborderPlace] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mousePostion = (e: any) => {
      // console.log("sss", e);
      setTimeout(() => {
        setMousePlace({ x: e.clientX, y: e.clientY });
      }, 50);
      setborderPlace({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousePostion);
    return;
    window.removeEventListener("mousemove", mousePostion);
  }, []);

  return (
    <>
      <motion.div
        className="w-10 h-10 rounded-full  border border-[#67f8cc] flex items-center  justify-center "
        // initial={{ opacity: 0 }}
        animate={{
          x: mousePlace.x - 20,
          y: mousePlace.y - 60,
          transition: { duration: 0 },
        }}
      ></motion.div>
      <motion.div
        animate={{
          x: borderPlace.x - 4,
          y: borderPlace.y - 44,
          // x: mousePlace.x - 4,
          // y: mousePlace.y - 44,
          transition: { duration: 0 },
        }}
        className="w-2 h-2   rounded-full bg-[#67f8cc]"
      ></motion.div>
    </>
  );
}

export default Mouse;
