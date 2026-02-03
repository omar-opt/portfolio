import Image from "next/image";
import React from "react";
import pic from "../../public/pic.png";
function AboutMe() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10 mt-8 ">
      <div className="w-full sm:w-1/3 place-content-center  flex justify-center items-center ">
        <Image
          src={pic}
          alt="my image"
          width={300}
          height={300}
          className="border-gray-500 border-4 rounded-full "
        />
      </div>
      <div
        className="flex flex-col gap-y-2
       w-full sm:w-2/5 text-center sm:text-start">
        <p className="heading-2 ">About Me</p>

        <p className="text-wrap heading-3 ">
          Hello! I&apos;m Omar Chabira, a passionate web developer and designer
          based in Algeria. With over 2 years of experience in the digital
          landscape, I specialize in turning complex ideas into elegant,
          functional, and user-friendly web solutions. My journey in tech began
          with a deep fascination for how things work, which evolved into a
          passion for crafting seamless digital experiences from the ground up.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
