"use client";
import { atom, useAtom } from "jotai";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu3Fill } from "react-icons/ri";
const state = atom(false);
export const Houmberg = () => {
  // let isit = true;
  const [isit, SetIsit] = useAtom(state);

  return (
    <div className="">
      {isit ? (
        <RiMenu3Fill
          size={35}
          className="relative md:hidden cursor-pointer"
          onClick={() => {
            // isit = !isit;
            SetIsit(!isit);
            console.log("heeeeeeer", isit);
          }}
        />
      ) : (
        <GrClose
          size={35}
          className="relative md:hidden cursor-pointer"
          onClick={() => {
            console.log(isit, "heeeeeeer");
            // isit = !isit;
            SetIsit(!isit);
          }}
        />
      )}
    </div>
  );
};
