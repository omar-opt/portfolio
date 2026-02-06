"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Particles } from "../ui/Particles";

export function ParticlesPage() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  return (
    <Particles
      className="fixed inset-0 z-0 w-full"
      quantity={400}
      ease={100}
      color={color}
      refresh
    />
  );
}
