"use client";
import { atom, useAtom } from "jotai";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu3Fill } from "react-icons/ri";
const state = atom(true);
export const Houmberg = () => {
  // let isit = true;
  const [isit, SetIsit] = useAtom(state);
  const handleMenuClick = () => {
    SetIsit(!isit);
    console.log("heeeeeeer", isit);
  };


  return (
    <div className="md:hidden">
      {isit ? (
        <RiMenu3Fill
          size={35}
          className="relative md:hidden cursor-pointer"
          onClick={handleMenuClick}
        
        />
      ) : (
        <GrClose
          size={35}
          className="relative md:hidden cursor-pointer"
          onClick={handleMenuClick}
            // console.log(isit, "heeeeeeer");
            // // isit = !isit;
            // SetIsit(!isit);
          //   handleMenuClick
          // }}
        />
      )}
    </div>
  );
};
