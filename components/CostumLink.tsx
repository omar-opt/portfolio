// "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const CostumLink = ({ href = "", title = "", className = "" }) => {
  return (
    <Link
      href={href}
      className={`${className} relative group hover:text-white    ${
        usePathname() === href ? "text-white" : ""
      }  `}
    >
      {title}
      <span
        className={`
        h-[2px] inline-block bg-[#FEA55F]  absolute left-0 -bottom-[2px]
        group-hover:w-full transiont-[width] ease duration-300
         ${usePathname() === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
