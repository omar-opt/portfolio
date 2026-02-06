"use client";

import { motion } from "framer-motion";
import React from "react";
import { Download, Mail } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  delay?: number;
}

export default function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  href,
  delay = 3,
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden";

  const variants = {
    primary: "bg-white text-zinc-950 hover:bg-zinc-100",
    secondary:
      "bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800",
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]}`}>
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Icon */}
      {icon && (
        <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      )}

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="relative">
      {content}
    </button>
  );
}

// // Download CV Button
// export default function DownloadCV() {
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/CV.pdf";
//     link.download = "OMAR-CHABIRA-CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <Button
//       variant="primary"
//       icon={<Download size={18} />}
//       onClick={handleDownload}
//       delay={0.8}>
//       Download CV
//     </Button>
//   );
// }

// // Get In Touch Button
// export default function GetInTouch() {
//   return (
//     <Button
//       variant="secondary"
//       icon={<Mail size={18} />}
//       href="mailto:omarchabira7@gmail.com"
//       delay={1}>
//       Get in touch
//     </Button>
//   );
// }
