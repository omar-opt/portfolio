"use client";

import SkillCard from "../SkillCard";
import { FaJava, FaJs, FaReact, FaDocker, FaLinux } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiKubernetes,
  SiC,
  SiAssemblyscript,
} from "react-icons/si";

const skills = [
  { name: "Java", Icon: FaJava },
  { name: "JavaScript", Icon: FaJs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Assembly", Icon: SiAssemblyscript },
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Docker", Icon: FaDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "C", Icon: SiC },
  { name: "Linux", Icon: FaLinux },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
            My Arsenal
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Technologies I Work With
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              Icon={skill.Icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
