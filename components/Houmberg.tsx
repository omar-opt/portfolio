// "use client ";
import { CostumLink } from "./CostumLink";
import { motion } from "framer-motion";

export const Houmberg = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 40, transition: { duration: 0.2 } }}
      exit={{ y: -100, transition: { duration: 0.4 } }}
      className="absolute  top-14 left-0 z-50  w-screen h-screen bg-black/30  backdrop-blur-2xl"
    >
      <nav className="flex flex-col mt-44 justify-center items-center gap-y-16 ">
        <CostumLink href="/" title="Home" className="text-2xl" />
        <CostumLink href="/about" title="About" className="text-2xl" />
        <CostumLink href="/contact" title="Contact" className="text-2xl" />
        <CostumLink href="/articles" title="Articls" className="text-2xl" />
      </nav>
    </motion.div>
  );
};
