// import { PinContainer } from "@/components/ui/3d-pin";
import Navbar from "@/components/ui/Navbar";
// import Cursor from "@/components/ui/Cursor";
import { AnimatedPinDemo } from "@/pages/AnimatedPinDemo";
import CardHoverEffectDemo from "@/pages/CardHoverEffectDemo";
// import { AnimatedTooltipPreview } from "@/pages/AnimatedTooltipPreview";
import HeroParallaxDemo from "@/pages/HeroParallaxDemo";
import { InfiniteMovingCardsDemo } from "@/pages/InfiniteMovingCardsDemo";
import { SparklesPreview } from "@/pages/SparklesPreview";
// import NavbarDemo from "@/pages/NavbarDemo";
import TypewriterEffectSmoothDemo from "@/pages/TypewriterEffectSmoothDemo";

export default function Home() {
  return (
    <>
      {/* <Cursor/> */}
      <div className="w-full fixed z-[90]">
        <Navbar />
        {/* <NavbarDemo /> */}
      </div>
      <SparklesPreview/>
      <HeroParallaxDemo />
      <AnimatedPinDemo />
      <CardHoverEffectDemo />
      <InfiniteMovingCardsDemo/>
      <TypewriterEffectSmoothDemo />
      {/* <AnimatedTooltipPreview/> */}
    </>
  );
}
