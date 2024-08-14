import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className="fixed bottom-0 h-10 w-screen drop-shadow-2xl  border-t  border-[#607b96ae] flex justify-between items-center ">
      <div className="flex felx-row h-full items-center">
        <p className="text-[#607B96] border-r h-full text-center  flex px-4 border-[#607b96ae]  items-center">
          find me in :
        </p>
        <Link
          href={"/"}
          className="px-4 border-r h-full flex items-center border-[#607b96ae] justify-center"
        >
          <FaFacebookF size={22} color="#607B96" />
        </Link>
        <Link
          href={"/"}
          className="px-4 border-r h-full flex items-center border-[#607b96ae] justify-center"
        >
          <IoLogoWhatsapp size={22} color="#607B96" />
        </Link>
      </div>
      <Link
        href="/"
        className="px-4 border-l h-full flex items-center border-[#607b96ae] justify-center"
      >
        <FaGithub size={22} color="#607B96" />
        <p className="text-[#607B96] border-r h-full text-center  flex px-4 border-[#607b96ae]  items-center">
          omar-opt
        </p>
      </Link>
    </div>
  );
}

export default Footer;
