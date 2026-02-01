import React from "react";

function Projects() {
  return (
    <section className="w-full sm:w-9/12 flex flex-col gap-6">
      <div className="w-full flex justify-center items-center relative">
        {" "}
        <div className="w-fit absolute bg-black h-full"></div>
        <div className="w-fit bg-gradient-to-r from-[#26262b] to-[#000000]  z-50  p-4 px-6 rounded-2xl border-white border-2 flex justify-center items-center ">
          <p className="heading-3 font-bold ">My Projects</p>
        </div>
        <div className="absolute w-full bg-gradient-radial from-[#ffffff79] to-[#2c2c2c82] h-[1px]"></div>
      </div>
      <div className="flex flex-wrap gap-4  ">
        {/* {DATA.skilles.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} Icon={skill.icon} />
          ))} */}
      </div>
    </section>
  );
}

export default Projects;
