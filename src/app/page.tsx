"use client";
import React from "react";
import Image from "next/image";
import Myimg from "./component/Myimg";
import SocialMedia from "./component/SocialMedia";
import Lights from "./component/Lights";

export default function Home() {
  return (
    <div className="h-full mt-10">
      <div className="flex flex-row justify-between items-center ">
      <div className="flex flex-row  ml-12 gap-x-5  justify-center">
        <div className="h-72  rounded-xl  w-2 bg-slate-200"></div>
        <div className="">
        <p className="text-2xl  my-5">Hello,My name is</p>
        <p className="text-5xl my-2 font-bold ">OMAR CHABIRA</p>
        <p className=" text-3xl mt-7 ">Web devloper &</p>
        <p className=" text-3xl  ">SAAS creater</p>
        <button className="w-36 h-9 bg-white hover:bg-[#4b8fb189] hover:shadow-2xl hover:text-white text-black  rounded-lg mt-8" >Download CV</button>
        </div>
      </div>
      <div>
        <Myimg />
      </div>
      </div>
      <div className="mx-24"> 
      <SocialMedia/>
      </div>
      <Lights/>
    </div>
  );
}
