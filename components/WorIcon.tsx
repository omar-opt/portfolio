const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "mongodb",
  "postgresql",
  "firebase",
  "vercel",
  "jest",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];
import React from "react";
import IconCloud from "./ui/IconCloud";

function WorIcon() {
  return (
    <div className="relative flex w-10/12 max-w-[32rem]  drop-shadow-xl bg-[#272629]  border-white shadow-white items-center  bg-opacity-45 px-10 justify-center overflow-hidden    p-4 rounded-full ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default WorIcon;
