// "use client ";
import Link from "next/link";
import { CostumLink } from "./CostumLink";
import { motion } from "framer-motion";

export const Houmberg = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 40, transition: { duration: 0.2 } }}
      exit={{ y: -100, transition: { duration: 0.4 } }}
      className="absolute  -top-1 left-0 z-50  w-screen h-screen bg-[#21222242] opacity-20 backdrop-blur-2xl"
    >
      <nav className="flex flex-col w-full h-full mt-2 justify-start items-start border-[#1E2D3D]  gap-y-5 divide-y divide-[#1E2D3D]">
        <Link href="/" className="text-[16px] w-full px-2 py-1 ">
          _home
        </Link>
        <Link href="/about" className="text-[16px] w-full  px-2 py-1">
          _about
        </Link>
        <Link href="/contact" className="text-[16px] w-full px-2 py-1">
          _contact
        </Link>
        <Link href="/articles" className="text-[16px] w-full px-2 py-1">
          _articls
        </Link>
      </nav>
    </motion.div>
  );
};
