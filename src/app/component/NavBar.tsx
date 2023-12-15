"use client"
import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";


export const NavBar = () => {
  return (
    <header className="w-fulll px-20 py-6 font-medium flex flex-row items-center justify-between">
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contacts">Contacts</Link>
        <Link href="/articles">Articls</Link>
      </nav>
      <nav>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
        <Link href="/" target={"_blank"}>
          T
        </Link>
      </nav>
      <div >
        <Logo />
      </div>
    </header>
  );
};
