"use client";
import Button from "./Buttons";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function DownloadCV() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "OMAR-CHABIRA-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="primary"
      icon={<Download size={18} />}
      onClick={handleDownload}
      delay={0.8}>
      Download CV
    </Button>
  );
}
