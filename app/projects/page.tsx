import Link from "next/link";
import React from "react";
import CompPage from "../../components/projectComponent/CompPage";
import ProjectPage from "../../components/Project/ProjectPage";

function page() {
  return (
    <div className="w-full pt-10 flex flex-col gap-4 justify-center items-center">
      <Navi />
      <div className="overflow-hidden w-11/12  flex flex-col items-center justify-center">
        <CompPage />
        <ProjectPage />
      </div>
    </div>
  );
}

export default page;
const Navi = () => {
  return (
    <div className="place-self-center w-11/12 border-b  border-[#607b96ae] flex gap-8  pt-24 pb-4 p-2">
      <Link href={"#Project"} className="z-10">
        Project
      </Link>
      <Link href={"#Components"} className="z-10">
        Components
      </Link>
    </div>
  );
};
