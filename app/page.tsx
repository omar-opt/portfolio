"use client";
import React from "react";
import Myimg from "../components/Myimg";
import Lights from "../components/Lights";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
export default function Home() {
  const skyls = [
    "web developer",
    "mobile app developer",
    "desktop app developer",
    "SAAS creater",
  ];
  return (
    <div className="h-full overflow-y-hidden  mt-10">
      <div className=" flex flex-col-reverse min-h-screen   md:flex-row justify-center items-center gap-y-12 ">
        <div className="flex flex-row  md:ml-12 md:gap-x-5  justify-center items-center">
          <div className="hidden md:block  h-72  rounded-xl  w-2 bg-slate-200"></div>
          <div className="flex flex-col justify-center min-w-64 md:w-96 items-center md:items-start md:justify-start">
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
              <Link href="https://github.com/omar-opt">
                https://github.com/omar-opt
              </Link>
            </div>
            <button className="w-36 h-9 bg-white hover:bg-[#4b8fb189] hover:shadow-2xl hover:text-white text-black  rounded-lg mt-8">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <Lights />
    </div>
  );
}
