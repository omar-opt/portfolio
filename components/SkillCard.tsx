import React from "react";
import { FaJava, FaJs, FaReact, FaDocker, FaLinux } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiKubernetes,
  SiC,
  SiAssemblyscript,
} from "react-icons/si";

type props = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
};
export default function SkillCard({ name, Icon }: props) {
  return (
    <div className="rounded-xl p-1 px-2   border-[#484848] border-2 flex gap-2 justify-center items-center bg-gradient-to-r from-[#454544] to-[#88888851] border-opacity-5 ">
      <Icon className="skill-icon" />
      <h3>{name}</h3>
    </div>
  );
}
