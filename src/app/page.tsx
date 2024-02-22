// import { PinContainer } from "@/components/ui/3d-pin";
// import Navbar from "@/components/ui/Navbar";
import { CardHoverEffectDemo } from "@/pages/CardHoverEffectDemo";
// import { AnimatedTooltipPreview } from "@/pages/AnimatedTooltipPreview";
import { HeroParallaxDemo } from "@/pages/HeroParallaxDemo";
import { NavbarDemo } from "@/pages/NavbarDemo";
import { TypewriterEffectSmoothDemo } from "@/pages/TypewriterEffectSmoothDemo";

export default function Home() {
  return (
    <>
      <div className="w-full fixed z-50">
        {/* <Navbar /> */}
        <NavbarDemo />
      </div>
      <HeroParallaxDemo />
      <CardHoverEffectDemo />
      <TypewriterEffectSmoothDemo />
      {/* <AnimatedTooltipPreview/> */}
    </>
  );
}
