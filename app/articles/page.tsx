import React from "react";
import ComponentCard from "../../components/ComponentCard";
import Mouse from "../../components/projectComponent/Mouse";
import LandingAnim from "../../components/projectComponent/LandingAnim";
import Typing from "../../components/projectComponent/Typing";
import ButtonFir from "../../components/projectComponent/ButtonFir";
import ButtonSec from "../../components/projectComponent/ButtonSec";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-4xl md:mt-10">Components</h1>
        <div className=" w-full h-1 rounded-2xl bg-white mt-1"></div>
      </div>
      <div className="w-full  p-10 flex flex-wrap justify-center sm:justify-start items-center sm:items-start gap-6  ">
        <div className="w-[200px] h-[200px] border border-emerald-400 rounded-lg p-2">
          <LandingAnim />
        </div>
        <div className="w-[200px] h-[200px] border border-emerald-400 rounded-lg p-2">
          <Typing />
        </div>
        <div className="w-[200px] h-[200px] border border-emerald-400 rounded-lg p-2 flex justify-center items-center">
          <ButtonFir />
        </div>
        <div className="w-[200px] h-[200px] border border-emerald-400 rounded-lg p-2 flex justify-center items-center">
          <ButtonSec />
        </div>
      </div>
    </div>
  );
}

export default page;
