import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// import "../globals.css";
import { NavBar } from "../../components/NavBar";

const montserrat = Montserrat({
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
  return <div className="flex ">{children}</div>;
}
