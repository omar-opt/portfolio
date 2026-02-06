"use client";
import Button from "./Buttons";
import { motion } from "framer-motion";

import { Download, Mail } from "lucide-react";
import React from "react";
export default function GetInTouch() {
  return (
    <Button
      variant="secondary"
      icon={<Mail size={18} />}
      href="mailto:omarchabira7@gmail.com"
      delay={1}>
      Get in touch
    </Button>
  );
}
