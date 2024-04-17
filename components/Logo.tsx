import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="text-white p-1 hover:bg-slate-700 hover:scale-110 focus:outline-none focus:ring focus:ring-[#0e1016d1]">
      <Link href="/" className="text-3xl">
        OM
      </Link>
    </div>
  );
};
