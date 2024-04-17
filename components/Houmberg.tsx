"use client";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu3Fill } from "react-icons/ri";

export const Houmberg = () => {
  const [isit, setIsit] = useState(true);
  return (
    <div className="md:hidden cursor-pointer" onClick={() => setIsit(!isit)}>
      {isit ? <RiMenu3Fill size={35} /> : <GrClose size={35} />}
    </div>
  );
};
