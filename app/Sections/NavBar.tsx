import Link from "next/link";
import { Logo } from "../component/Logo";
import { relative } from "path";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { CostumLink } from "../component/CostumLink";
import { Houmberg } from "../component/Houmberg";

export const NavBar = () => {
  return (
    <header
      className="w-fulll px-6 lg:px-12 py-3 md:py-6 
   flex flex-row items-center justify-between"
    >
      <div className="">
        <Logo />
      </div>
      <nav className="hidden w-1/2 md:flex flex-row justify-between ">
        <CostumLink href="/" title="Home" className="text-xl" />
        <CostumLink href="/about" title="About" className="text-xl" />
         <CostumLink href="/contact" title="Contact" className="text-xl" /> 
        <CostumLink href="/articles" title="Articls" className="text-xl" />
      </nav>
      <Houmberg />
    </header>
  );
};
