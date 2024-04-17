"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const CostumLink = ({ href = "", title = "", className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`
        h-[2px] inline-block bg-white  absolute left-0 -bottom-[4px]
        group-hover:w-full transiont-[width] ease duration-300
         ${usePathname() === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
