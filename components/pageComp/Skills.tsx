import SkillCard from "../SkillCard";
import React from "react";

import { DATA } from "../../data/data";

export default function Skills() {
  return (
    <section className="w-full sm:w-9/12 flex flex-col gap-6">
      <div>
        <p className="heading-2 ">My Skills</p>
      </div>
      <div className="flex flex-wrap gap-4  ">
        {DATA.skilles.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} Icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}
