"use client";
import React from "react";

import Typewriter from "typewriter-effect";
import GetInTouch from "../projectComponent/GetInTouch";
import DownlaodCV from "../projectComponent/DownloadCV";

function Hero() {
  return (
    <div className="w-full px-5 sm:w-11/12 flex flex-col justify-center items-center mt-8 md:mt-24 ">
      <div className=" w-full text-center ">
        <p className="text-2xl md:text-6xl font-bold">
          Where Code Meets Creativity: Full-Stack Development & Design
          <br />
        </p>
        <div className="mt-4 sm:mt-8 text-lg md:text-3xl font-bold text-slate-200 px-5  md:px-44">
          <Typewriter
            options={{
              strings: [
                "I design and build beautiful, responsive, and user-centric websites and applications that solve real-world problems.",
              ],
              autoStart: true,
              loop: false,
              deleteSpeed: Infinity,
              delay: 50,
            }}
          />
        </div>
      </div>
      <div className="w-full flex justify-center md:gap-8 items-center mt-6 sm:mt-16">
        <DownlaodCV />
        <GetInTouch />
      </div>
    </div>
  );
}

export default Hero;
