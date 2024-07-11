import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar";

const montserrat = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "OMAR Dev",
  description: "omar portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`${montserrat.variable} font-mont`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
