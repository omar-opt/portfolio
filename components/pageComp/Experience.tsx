import React from "react";
import { DATA } from "../../data/data";
import WorkCard from "../WorkCard";
interface data {
  company: string;
  href: string;
  badges: never[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}
function Experience() {
  return (
    <div className="w-9/12">
      <div>
        <p className="heading-2 ">Work Experience</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {DATA.work.map((o: data, i) => (
          <WorkCard props={o} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
