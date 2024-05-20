"use client";
import Link from "next/link";
import { Logo } from "./Logo";
import { relative } from "path";
import { FiMenu } from "react-icons/fi";
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
  window.addEventListener("dblclick", handelclick);
  return (
    <div className="w-full px-6 lg:px-12 py-3 md:py-6 flex flex-row items-center justify-between">
      <Logo />
      <nav className="hidden w-1/2 md:flex md:flex-row justify-between ">
        <CostumLink href="/" title="Home" className="text-xl" />
        <CostumLink href="/about" title="About" className="text-xl" />
        <CostumLink href="/contact" title="Contact" className="text-xl" />
        <CostumLink href="/articles" title="Articls" className="text-xl" />
      </nav>
      <div className="md:hidden cursor-pointer" onClick={() => setIsit(!isit)}>
        {isit ? <GrClose size={35} /> : <RiMenu3Fill size={35} />}
      </div>
      {isit && <Houmberg />}
    </div>
  );
};
