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

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link style={{ color: '#7808d0' }} className="button" href="/project">
            <span className="button__icon-wrapper">
              <svg
                width="10"
                className="button__icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024"
                ></path>
              </svg>

              <svg
                className="button__icon-svg  button__icon-svg--copy"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                fill="none"
                viewBox="0 0 14 15"
              >
                <path
                  fill="currentColor"
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024"
                ></path>
              </svg>
            </span>
            Explore Projects
          </Link>
        </div>



      </div>
    </div>
  );
}
