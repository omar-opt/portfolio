import React from "react";
import Myimg from "../components/Myimg";
import Lights from "../components/Lights";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full mt-10">
      <div className=" flex flex-col-reverse md:flex-row justify-between items-center gap-y-12 ">
        <div className="flex flex-row  md:ml-12 md:gap-x-5  justify-center">
          <div className="hidden md:block  h-72  rounded-xl  w-2 bg-slate-200"></div>
          <div className="flex flex-col justify-center items-center md:justify-start">
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
        <div>
          <Image
            src={"/pic.png"}
            priority={true}
            width={500}
            height={700}
            alt="My SVG image"
            className="z-11 object-contain rounded-full shadow-2xl"
          />
        </div>
      </div>

      <Lights />
    </div>
  );
}
