"use client";
import React, { useEffect } from "react";
import Myimg from "../components/Myimg";
import Lights from "../components/Lights";
import Lottie from "lottie-react";
import laptop from "../public/laptop.json";

import { LampContainer } from "../components/ui/lamp";

import Image from "next/image";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";

import { FiArrowRight } from "react-icons/fi";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";
const skyls = [
  "web developer",
  "mobile app developer",
  "desktop app developer",
  "SAAS creater",
];
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
export default function Home() {
  const color = useMotionValue(COLOR[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(140% 100% at 50% 15%, #011627 65%, ${color})`;
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
    <motion.div className="w-full  flex flex-col text-center justify-center items-center h-screen ">
      {" "}
      <div className="w-full flex text-center pl-8 text-transparent bg-gradient-to-r bg-clip-text from-[#ffffff] from-10% via-[#5e5e5e] via-60% to-[#292929]  items-center justify-center text-5xl md:text-9xl">
        <Typewriter
          options={{
            strings: ["CHABIRA OMAR", "CHABIRA OMAR"],
            loop: true,
            autoStart: true,
            deleteSpeed: 4,
            wrapperClassName: "text-center",
          }}
        />
      </div>
      <p className="flex text-wrap w-2/4 md:text-xl text-xs text-center mt-10 justify-center items-center">
        {" "}
        web developer, mobile app developer, desktop app developer, SAAS creater
      </p>
      <p className="bottom-2 flex w-2/4 text-center mt-16 text-slate-500 md:p-20">
        I am a full stack devloper and specialized in frontend and designer ,
        Chekcout my project and bloges in my social media accounts and GitHub
      </p>
      <BackgroundBeams />
    </motion.div>
  );
}

{
  /* <motion.div
// initial={{ opacity: 0, y: 30 }}
// animate={{ opacity: 1, y: 0 }}
// transition={{ duration: 1 }}
// style={{
//   backgroundImage,
// }}
className=" place-content-center overflow-hidden  min-h-screen flex flex-col justify-center items-center "
>
<div className=" flex flex-col-reverse min-h-screen   md:flex-row justify-center md:gap-x-36 items-center">
  <div className="flex flex-row  md:ml-12 md:gap-x-5  justify-center items-center">
    <div className="hidden md:block  h-72  rounded-xl  w-2 bg-slate-200"></div>
    <div className="flex flex-col justify-center min-w-64 md:w-96 items-center md:items-start md:justify-start gap-y-10 sm:gap-y-4">
      <LampContainer>
        <p className="text-2xl  my-5">Hello,Im </p>
        <p className="text-[40px] my-2  text-nowrap ">OMAR CHABIRA</p>
        <div className="w-full text-[24px] mt-7 flex gap-x-2">
          <p>{">"}</p>
          <Typewriter
            options={{
              strings: [
                "web developer",
                "mobile app developer",
                "desktop app developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex flex-col gap-y-4 mt-10">
          <p className="text-[#607B96]">
            {"//"} find my profile on Github:
          </p>
          <Link href="https://github.com/omar-opt" className="z-10">
            https://github.com/omar-opt
          </Link>
        </div>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Download my CV
          <FiArrowRight className="transition-transform group-hover:rotate-90 group-active:-rotate-12" />
        </motion.button>
      </LampContainer>
    </div>
  </div>
  <Lottie animationData={laptop} loop={true} />
</div>

<Lights />
</motion.div> */
}
