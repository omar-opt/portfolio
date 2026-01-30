import { Icons } from "../components/icons";
import { FaJava, FaJs, FaReact, FaDocker, FaLinux } from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiKubernetes,
  SiC,
  SiAssemblyscript,
} from "react-icons/si";

export const DATA = {
  skilles: [
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Assembly (NASM)", icon: SiAssemblyscript },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React Native", icon: FaReact },
    { name: "C", icon: SiC },
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Kali Linux", icon: FaLinux },
  ],

  contact: {
    email: "omarchabira7@gmail.com",
    tel: "+213556265830",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/omar-opt",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "omarchabira7@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "OMED",
      href: "https://OMED.AGENCY",
      badges: [],
      location: "Remote",
      title: "Front end",
      logoUrl: "/omed.png",
      start: "Julay 2022 ",
      end: "Oct 2023",
      description: "emplemnt the frontend",
    },
    {
      company: "Delegeu app",
      badges: [],
      href: "https://delegeu.net",
      location: "Remote",
      title: "front end",
      logoUrl: "/delegeu.png",
      start: "January 2023",
      end: "April 2024",
      description: "emplemnt the frontend",
    },
    {
      company: "Ihsan ",
      href: "https://ihsan.charity/",
      badges: [],
      location: "remote",
      title: "front end",
      logoUrl: "/ihsan.png",
      start: "April 2024",
      end: "January 2025",
      description: "emplemnt the frontend",
    },
    {
      company: "akkadli",
      href: "https://akkadli.com",
      badges: [],
      location: "remote",
      title: "front end",
      logoUrl: "/akkadli.png",
      start: "January 2025",
      end: "Jun 2025",
      description: "emplemnt the frontend",
    },
  ],
};
