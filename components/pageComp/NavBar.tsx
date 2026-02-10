"use client";
import React, { useState, useEffect } from "react";
import { FlickeringGrid } from "../ui/FlickeringGrid";

function NavBar() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight / 8);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="top-0 w-full absolute left-0 overflow-hidden ">
      <div
        className="w-full justify-center items-center top-0 h-12 md:h-16 absolute z-0
       bg-gradient-to-b from-slate-400 to-cyan-500 bg-opacity-25 blur-xl backdrop-blur-lg "></div>
      <FlickeringGrid
        className="w-full relative inset-0 z-0 "
        squareSize={1}
        gridGap={6}
        color="#fff"
        maxOpacity={0.5}
        flickerChance={0.5}
        height={height}
        width={2000}
      />
    </div>
  );
}

export default NavBar;
