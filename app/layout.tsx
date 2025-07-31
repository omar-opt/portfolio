import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import MouseAnimation from "../components/MouseAnimation";
import Footer from "../components/pageComp/Footer";
import { motion } from "framer-motion";
import favIcon from "../public/pic.png";
import NavBar from "../components/pageComp/NavBar";

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
        className={`${montserrat.variable} font-mont  place-content-center `}>
        <NavBar />
        <div
          className="mt-28
        ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
