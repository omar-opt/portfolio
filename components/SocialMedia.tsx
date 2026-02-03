import React from "react";
import { Github, Mail, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
const socials = [
  {
    icon: <Github size={25} />,
    href: "/",
    name: "Git hub",
  },
  {
    icon: <Facebook size={25} />,
    href: "/",
    name: "Facebook",
  },
  {
    icon: <Mail size={25} />,
    href: "/",
    name: "Mail",
  },
  {
    icon: <Linkedin size={25} />,
    href: "/",
    name: "Linkedin",
  },
];

function SocialMedia() {
  return (
    <nav className="flex  items-center justify-center gap-x-4  ">
      {socials.map((s, i) => {
        return (
          <div key={i} className="flex flex-col  items-center justify-center">
            <Link
              href={s.href}
              target={"_blank"}
              className="border border-0.5 rounded-full  p-2">
              <span>{s.icon}</span>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export default SocialMedia;
