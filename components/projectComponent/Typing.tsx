"use client";
import React from "react";

import Typewriter from "typewriter-effect";
function Typing() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {" "}
      <Typewriter
        options={{
          strings: ["bla bla bla bla b", "do do do", "cd do cd"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default Typing;
