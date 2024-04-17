import React from "react";
import { Github, Mail, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
const socials = [
  {
    icon: <Github size={35} />,
    href: "/",
    name: "Git hub",
  },
  {
    icon: <Facebook size={35} />,
    href: "/",
    name: "Facebook",
  },
  {
    icon: <Mail size={35} />,
    href: "/",
    name: "Mail",
  },
  {
    icon: <Linkedin size={35} />,
    href: "/",
    name: "Linkedin",
  },
];

function SocialMedia() {
  return (
    <nav className="flex flex-col items-center justify-between w-full mx-6  md:flex-row gap-y-10 md:gap-x-10">
      {socials.map((s, i) => {
        return (
          <div
            key={i}
            className="flex flex-col  items-center justify-start  w-11/12 h-44 border border-0.5 rounded-lg border-[#a9a9a9] backdrop-blur-3xl gap-y-8 "
          >
            <div className="absolute w-44 h-44 rounded-full bg-[#198CFF] z-0 blur-[100px] bg-opacity-25 top-12 left-[25%] "></div>

            <Link
              href={s.href}
              target={"_blank"}
              className="border border-0.5 rounded-full mt-6 p-4"
            >
              <span>{s.icon}</span>
            </Link>
            <div>{s.name}</div>
          </div>
        );
      })}
    </nav>
  );
}

export default SocialMedia;
