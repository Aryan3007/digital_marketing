"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Create",
    },
    {
      text: "Your",
    },
    {
      text: "Digital",
    }, 
    {
      text: "Presence",
    },
    {
      text: "with",

    },
    {
      text: "Dev</>Hub.",
      className: "text-[#a756f7] dark:text-[#a756f7]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center my-12  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">

      </div>
    </div>
  );
}
