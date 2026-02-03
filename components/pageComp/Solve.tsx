import React from "react";

function Solve() {
  return (
    <section className="w-full sm:w-9/12 flex flex-col gap-6">
      <div className="w-full flex justify-center items-center relative my-8">
        {" "}
        <div className="w-fit absolute bg-black h-full"></div>
        <div className="w-fit bg-gradient-to-r from-[#26262b] to-[#000000]  z-50  p-4 px-6 rounded-2xl border-white border-2 flex justify-center items-center ">
          <p className="heading-3 font-bold ">I Solve This</p>
        </div>
        <div className="absolute w-full bg-gradient-radial from-[#ffffff79] to-[#2c2c2c82] h-[1px]"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {" "}
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-lg  text-center sm:text-2xl font-bold ">
            I like solving probelms with code{" "}
          </p>
          <p className="sm:text-lg text-center">
            I like solving problems with code, especially real-world problems.
            It was a great and eye-opening experience working with different
            tools. These challenges helped me grow as a developer.
          </p>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
        {DATA.work.map((obj) => (
          <ProjectCard work={obj} key={obj.company} />
        ))}
      </div> */}
    </section>
  );
}

export default Solve;
