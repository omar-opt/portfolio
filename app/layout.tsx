import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "../components/pageComp/Footer";
import { motion } from "framer-motion";
import favIcon from "../public/pic.png";
import NavBar from "../components/pageComp/NavBar";
import { ParticlesPage } from "@/components/pageComp/ParticlesPage";
const montserrat = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "OMAR Dev",
  description: "omar portfolio",
  icons: {
    shortcut: favIcon.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={`${montserrat.variable}  flex flex-col font-mont mx-auto min-h-screen bg-background  max-w-7xl  py-12 sm:py-24 px-6`}>
        <NavBar />
        <div
          className="mt-28
        ">
          {children}
        </div>
        <ParticlesPage />
      </body>
    </html>
  );
}
