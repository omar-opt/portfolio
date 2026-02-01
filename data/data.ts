import { Icons } from "../components/icons";
import { FaJava, FaJs, FaReact, FaDocker, FaLinux } from "react-icons/fa";
import omedPic from "./projects/omed.png";
import delegeuPic from "./projects/delegeu.png";
import ihsanPic from "./projects/ihsan.png";
import akkadliPic from "./projects/akkadli.png";

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
      href: "https://omed.agency",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/omed.png",
      start: "July 2022",
      end: "October 2023",
      description:
        "Implemented the frontend including landing pages and dashboards with a focus on responsive design and performance.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Magic UI"],
      pic: omedPic,
    },
    {
      company: "Delegeu App",
      href: "https://delegeu.net",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/delegeu.png",
      start: "January 2023",
      end: "April 2024",
      description:
        "Built and maintained the frontend, including landing pages and dashboards, ensuring full responsiveness across devices.",
      tech: [
        "Next.js",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "Magic UI",
        "SQLite",
      ],
      pic: delegeuPic,
    },
    {
      company: "Ihsan",
      href: "https://ihsan.charity/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/ihsan.png",
      start: "April 2024",
      end: "January 2025",
      description:
        "Implemented the frontend for landing pages and internal dashboards with a strong emphasis on responsive and accessible design.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Magic UI"],
      pic: ihsanPic,
    },
    {
      company: "Akkadli",
      href: "https://akkadli.com",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/akkadli.png",
      start: "January 2025",
      end: "June 2025",
      description:
        "Developed the frontend including landing pages and dashboards, delivering a fully responsive and modern user experience.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Magic UI"],
      pic: akkadliPic,
    },
  ],
};
