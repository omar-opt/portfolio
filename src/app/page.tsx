"use client";
import React from "react";
import Image from "next/image";
import pro from "./pic.png";

export default function Home() {
  return (
    <div>
      <Image
        src={pro}
        width={220}
        height={270}
        alt="My SVG image"
        className="flex items-centr m-24"
      />
      <p className="ml-28 text-2xl text-slate-200 -mt-20">OMAR CHABIRA</p>
      <p className="ml-28 text-xl text-slate-300">Web devloper </p>
    </div>
  );
}
