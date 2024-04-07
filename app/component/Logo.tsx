"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";


// const  Component = React.forwardRef((props,ref) => {
//   return (
//     <div className="flex items-center justify-center mt-2">
//       <Link
//         href ="/"
//         className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl"
//         >
//         OM
//       </Link>
//     </div>
//   );
// })
// export const Logo = motion(Component);
const MotionLink = motion(Link) ;
export  const Logo=()=> {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink href ="/"
        className="w-16 h-16 text-white flex items-center justify-center text-3xl hover:bg-slate-700 hover:scale-110 focus:outline-none focus:ring focus:ring-[#0e1016d1]"
        whileHover={{scale:1.5}}
        >
        OM
      </MotionLink>
    </div>
  );
};
