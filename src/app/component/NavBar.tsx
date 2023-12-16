"use client";
import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { relative } from "path";
import { usePathname } from "next/navigation";
import { Github, Mail, Facebook, Linkedin } from "lucide-react";
const socials = [
  {
    icon: <Github size={28} />,
    href: "/",
  },
  {
    icon: <Facebook size={28} />,
    href: "/",
  },
  {
    icon: <Mail size={28} />,
    href: "/",
  },
  {
    icon: <Linkedin size={28} />,
    href: "/",
  },
];

const CostumLink = ({ href = "", title = "", className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`
      h-[1px] inline-block  bg-black absolute left-0 -bottom-0.5
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
    <header className="w-fulll px-20 py-6 font-medium flex flex-row items-center justify-between">
      <nav>
        <CostumLink href="/" title="Home" className="mr-4" />
        <CostumLink href="/about" title="About" className="mx-4" />
        <CostumLink href="/contact" title="Contact" className="mx-4" />
        <CostumLink href="/articles" title="Articls" className="ml-4" />
      </nav>
      <nav className="flex  items-center justify-between flex-row gap-x-8">
        {socials.map((s) => {
          return (
            <Link href={s.href} target={"_blank"} className="mr-4 mt-2">
              <span>{s.icon}</span>
            </Link>
          );
        })}
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo /> {/*placing the component in the midell of nav bar   */}
      </div>
    </header>
  );
};
