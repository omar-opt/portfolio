import Link from "next/link";
import { Logo } from "./Logo";
import { relative } from "path";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { CostumLink } from "./CostumLink";
import { Houmberg } from "./Houmberg";

export const NavBar = () => {
  return (
    <div className="w-full px-6 lg:px-12 py-3 md:py-6 flex flex-row items-center justify-between">
      <Logo />
      <nav className="hidden w-1/2 md:flex md:flex-row justify-between ">
        <CostumLink href="/" title="Home" className="text-xl" />
        <CostumLink href="/about" title="About" className="text-xl" />
        <CostumLink href="/contact" title="Contact" className="text-xl" />
        <CostumLink href="/articles" title="Articls" className="text-xl" />
      </nav>
      <Houmberg />
    </div>
  );
};
