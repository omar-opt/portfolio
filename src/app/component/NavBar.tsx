"use client";
import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { relative } from "path";
import { usePathname } from "next/navigation";
const CostumLink = ({ href = "", title = "", className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`
      h-[2px] inline-block bg-white  absolute left-0 -bottom-[4px]
      group-hover:w-full transiont-[width] ease duration-300
       ${usePathname() === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
export const NavBar = () => {
  return (
    <header className="w-fulll px-20 py-6 
   flex flex-row items-center justify-between">
      <div className="">
        <Logo /> {/*placing the component in the midell of nav bar   */}
      </div>
      <nav className="w-2/4 flex flex-row justify-between  ">
        <CostumLink href="/" title="Home" className="text-xl" />
        <CostumLink href="/about" title="About" className="text-xl" />
        <CostumLink href="/contact" title="Contact" className="text-xl" />
        <CostumLink href="/articles" title="Articls" className="text-xl" />
      </nav>
      
    </header>
  );
};
