"use client";
import Link from "next/link";

import { relative } from "path";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { CostumLink } from "./CostumLink";
import { Houmberg } from "./Houmberg";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu3Fill } from "react-icons/ri";

export const NavBar = () => {
  const [isit, setIsit] = useState(false);
  const handelclick = () => {
    setIsit(!isit);
  };
  // window.addEventListener("dblclick", handelclick);
  return (
    <div className="w-full bg-[#011627] fixed z-50 drop-shadow-xl top-0 lg:pl-10  flex flex-row items-center justify-between  border-b border-[#1E2D3D]  ">
      <div>
        <p className="text-lg text-[#607B96] w-44 p-1">chabira_omar</p>
      </div>
      <div className="hidden  md:flex flex-row items-center justify-between w-full">
        <nav className="hidden w-1/2 md:flex md:flex-row  ">
          <CostumLink
            href="/"
            title="_home"
            className="text-[16PX] text-[#607B96] border p-1.5 w-36 flex  items-center justify-center border-[#1E2D3D]"
          />
          <CostumLink
            href="/about"
            title="_about"
            className="text-[16PX] text-[#607B96] border p-1.5 w-36 flex  items-center justify-center border-[#1E2D3D] "
          />

          <CostumLink
            href="/articles"
            title="_articls"
            className="text-[16PX] text-[#607B96] border p-1.5 w-36 flex  items-center justify-center border-[#1E2D3D]"
          />
        </nav>
        <CostumLink
          href="/contact"
          title="_contact_me"
          className="text-[16px] text-[#607B96] border p-1.5 w-36 flex  items-center justify-center border-[#1E2D3D]"
        />
      </div>
      <div className="md:hidden cursor-pointer" onClick={() => setIsit(!isit)}>
        {isit ? (
          <GrClose size={35} color="#607B96" />
        ) : (
          <RxHamburgerMenu size={35} color="#607B96" />
        )}
      </div>
      {isit && <Houmberg />}
    </div>
  );
};
