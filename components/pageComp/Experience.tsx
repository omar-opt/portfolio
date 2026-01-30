import React from "react";
import { DATA } from "../../data/data";
import WorkCard from "../WorkCard";
function Experience() {
  return (
    <div className="w-full sm:w-9/12 flex flex-col gap-6">
      <div>
        <p className="heading-2 ">Work Experience</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {DATA.work?.map((o, i) => (
          <WorkCard key={i} {...o} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
