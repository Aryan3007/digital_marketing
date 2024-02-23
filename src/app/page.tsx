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
    </>
  );
}
