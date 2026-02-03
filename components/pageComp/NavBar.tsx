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
      <FlickeringGrid
        className="w-full relative inset-0 z-0 "
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={height}
        width={2000}
      />
    </div>
  );
}

export default NavBar;
