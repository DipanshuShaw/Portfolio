"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particle from "@/components/ui/particles";

export default function Particles() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl ">
      <span className="z-20 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center  text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Dipasnhu Shaw
      </span>
      <Particle
        className="absolute inset-0"
        quantity={400}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
