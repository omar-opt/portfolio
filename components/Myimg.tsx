"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Myimg() {
  <div>
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, transition: { duration: 2 }, y: 0 }}
      viewport={{ once: true }}
    >
      <Image
        src={"/pic.png"}
        priority={true}
        width={500}
        height={700}
        alt="My SVG image"
        className="z-11 object-contain rounded-full shadow-2xl"
      />
    </motion.div>
  </div>;
}

//  default Myimg;
