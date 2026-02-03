import React from "react";
import SocialMedia from "../SocialMedia";

const Footer = () => {
  return (
    <div className="fixed bottom-4  bg-gradient-to-r from-[#26262b]/50 to-[#000000]/50 backdrop-blur-sm z-50  py-1.5 px-4 rounded-2xl border-white border-2 flex justify-center items-center ">
      {" "}
      {/* <LandingAnim /> */}
      <div className=" flex justify-center items-center ">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
