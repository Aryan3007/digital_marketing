// import { PinContainer } from "@/components/ui/3d-pin";

// import Cursor from "@/components/ui/Cursor";
import AnimatedPinDemo from "@/app/home/AnimatedPinDemo";
import CardHoverEffectDemo from "@/app/home/CardHoverEffectDemo";
// import  HeroScrollDemo  from "@/pages/HeroScrollDemo";
// import HeroParallaxDemo from "@/pages/HeroParallaxDemo";
// import  InfiniteMovingCardsDemo  from "@/pages/InfiniteMovingCardsDemo";
import SparklesPreview from "@/app/home/SparklesPreview";
// import NavbarDemo from "@/pages/NavbarDemo";
import TypewriterEffectSmoothDemo from "@/app/home/TypewriterEffectSmoothDemo";
import ThreeDCardDemo from "./home/ThreeDCardDemo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Cursor/> */}

      <SparklesPreview />
      {/* <HeroParallaxDemo /> */}
      <AnimatedPinDemo />
      <CardHoverEffectDemo />
      {/* <InfiniteMovingCardsDemo/> */}
      <TypewriterEffectSmoothDemo />
      {/* <HeroScrollDemo/> */}
      {/* <AnimatedTooltipPreview/> */}
      <div className="flex flex-wrap gap-6 justify-center">

        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link style={{ color: '#7808d0' }} className="button dark:bg-white bg-black" href="/project">
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


    </>
  );
}
