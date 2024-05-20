// "use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      className="text-white p-4 rounded-full w-22 h-22"
      whileHover={{
        backgroundColor: ["", "#003fff33", "", "#003fff39"],
        scale: 1.3,
        transition: { duration: 1, repeat: 2 },
      }}
    >
      <Link href="/" className="text-3xl w-full h-full">
        OM
      </Link>
    </motion.div>
  );
};
