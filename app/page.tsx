"use client";
import React from "react";
import Myimg from "../components/Myimg";
import Lights from "../components/Lights";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-full mt-10">
      <div className=" flex flex-col-reverse md:flex-row justify-between items-center gap-y-12 ">
        <div className="flex flex-row  md:ml-12 md:gap-x-5  justify-center">
          <div className="hidden md:block  h-72  rounded-xl  w-2 bg-slate-200"></div>
          <div className="flex flex-col justify-center min-w-44 items-center md:items-start md:justify-start">
            <p className="text-2xl  my-5">Hello,My name is</p>
            <p className="text-[40px] my-2 font-bold text-nowrap ">
              OMAR CHABIRA
            </p>
            <p className=" text-3xl mt-7 ">Web devloper &</p>
            <p className=" text-3xl  ">SAAS creater</p>
            <button className="w-36 h-9 bg-white hover:bg-[#4b8fb189] hover:shadow-2xl hover:text-white text-black  rounded-lg mt-8">
              Download CV
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, transition: { duration: 2 }, y: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/pic.png"}
            priority={true}
            width={500}
            height={700}
            alt="My SVG image"
            className="z-11 object-contain rounded-full shadow-2xl"
          />
        </motion.div>
      </div>

      <Lights />
    </div>
  );
}
