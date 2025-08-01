import Link from "next/link";
import React from "react";
import CompPage from "../../components/projectComponent/CompPage";
import ProjectPage from "../../components/Project/ProjectPage";
import ButtonFir from "../../components/projectComponent/ButtonFir";
import ButtonSec from "../../components/projectComponent/ButtonSec";

function page() {
  return (
    <div className="w-full pt-10 top-0 flex flex-col gap-4  justify-center items-center">
      <Navi />
      <div className=" w-11/12 flex flex-col items-center justify-center bg-gray-800">

      <ButtonFir />
      <ButtonSec />

      </div>
    </div>
  );
}

export default page;
const Navi = () => {
  return (
    <div className="w-11/12 border-b  border-[#607b96ae] flex gap-8 pb-4 p-2">
      <Link href={"#Project"} className="z-10">
        Project
      </Link>
      <Link href={"#Components"} className="z-10">
        Components
      </Link>
    </div>
  );
};
