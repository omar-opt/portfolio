import React from 'react'

import { Github, Mail, Facebook, Linkedin } from "lucide-react";
import Link from 'next/link';
const socials = [
    {
      icon: <Github size={28} />,
      href: "/",
    },
    {
      icon: <Facebook size={28} />,
      href: "/",
    },
    {
      icon: <Mail size={28} />,
      href: "/",
    },
    {
      icon: <Linkedin size={28} />,
      href: "/",
    },
  ];
  
function SocialMedia() {
  return (
<nav className="flex  items-center  flex-row gap-x-10"> 
 {socials.map((s) => {
  return (
    <Link href={s.href} target={"_blank"} className="mr-4 mt-2">
      <span>{s.icon}</span>
    </Link>
  );
})}
</nav>
  )
}

export default SocialMedia