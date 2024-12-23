"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

import Particle from "@/components/ui/particles";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "I",
  },
  {
    text: "am",
  },
  {
    text: "a",
  },
  {
    text: "Web",
  },
  {
    text: "Developer.",
    className: "bg-gradient-to-b to-purple-700 from-blue-700 dark:text-transparent bg-clip-text text-transparent",
  },
];

export default function Particles() {
  const { resolvedTheme } = useTheme();
  const color = "#00aaff";
  // const [color, setColor] = useState("#00aaff");




  useEffect(() => {
    // setColor(resolvedTheme === "dark" ? "#ff0000" : "#00eeff");
  }, [resolvedTheme]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl ">
      <span className="z-20 pointer-events-none whitespace-pre-wrap  bg-gradient-to-b via-purple-700  from-blue-700 to-gray-300/80 bg-clip-text dark:to-slate-900/10 text-center  text-8xl font-semibold leading-none text-transparent">
        Dipasnhu Shaw
      </span>
      <span className="z-20 pointer-events-none kanit whitespace-pre-wrap  text-slate-400 text-center  text-5xl leading-none text-transparent">
        <TypewriterEffectSmooth words={words} cursorClassName={`bg-blue-600`} />
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
