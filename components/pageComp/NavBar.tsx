import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="fixed top-2 w-full z-50 p-1 left-0 ">
      <div className="container mx-auto bg-slate-400 bg-opacity-5 backdrop-blur-sm rounded-2xl py-4 sm:h-24 flex flex-row justify-between items-center px-5 sm:px-10">
        <div>ICON</div>
        <div className="flex flex-row justify-center items-center gap-x-4">
          <Link href="">Project</Link>
          <Link href="">Experience</Link>
          <Link href="">Contacts</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
