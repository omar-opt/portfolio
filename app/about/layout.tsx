import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "../globals.css";

import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import MouseAnimation from "../../components/MouseAnimation";
import { NavBar } from "../../components/NavBar";
import SideBar from "../../components/SideBar";

const montserrat = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "OMAR Dev",
  description: "omar portfolio",
};

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex mt-10">
      {" "}
      <SideBar />
      <div className="ml-[233px]">{children}</div>
    </div>
  );
}
