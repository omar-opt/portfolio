"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFolder } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
function SideBar() {
  const path = usePathname();
  return (
    <div className="w-[233px] fixed h-full border-r border-[#1E2D3D] flex flex-col gap-y-4  px-6 py-4">
      <Link href={"/about/bio"} className="flex  items-center gap-x-2  ">
        <FaCaretRight size={22} />
        <div className="flex items-center gap-2">
          <FaFolder size={18} color="#E99287" />
          <p>bio</p>
        </div>
      </Link>
      <Link href={"/about/interests"} className="flex  items-center gap-x-2 ">
        <FaCaretRight size={22} />
        <div className="flex items-center gap-2">
          <FaFolder size={18} color="#43D9AD" />
          <p>interests</p>
        </div>
      </Link>
      <Link href={"/about/education"} className="flex  items-center gap-x-2 ">
        <FaCaretRight size={22} />
        <div className="flex items-center gap-2">
          <FaFolder size={18} color="#3A49A4" />
          <p>education</p>
        </div>
      </Link>
    </div>
  );
}

export default SideBar;
