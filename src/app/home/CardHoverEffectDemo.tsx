/* eslint-disable react/no-unescaped-entities */
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mt-44 mx-auto px-8">
      <h1 className="text-center my-12 text-3xl">Tech Stack I Work With</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Next JS",
    logo: <SiNextdotjs size={60} color="#FFFFFF" />
  },
  {
    title: "React JS",
    logo: <FaReact size={60} color="#64d5f4" />
  },
  {
    title: "Node JS",
    logo: <FaNodeJs size={60} color="#84c86e" />
  },
  {
    title: "Express JS",
    logo: <SiExpress size={60} color="#FFFFFF" />
  },
  {
    title: "MongoDB",
    logo: <SiMongodb size={60} color="#2F7301" />
  },
  {
    title: "Firebase",
    logo: <IoLogoFirebase size={60} color="#FF8E43" />
  },
  {
    title: "HTML",
    logo: <FaHtml5 size={60} color="#B83737" />
  },
  {
    title: "Tailwind",
    logo: <SiTailwindcss size={60} color="#59BBF8" />
  },
  {
    title: "CSS",
    logo: <FaCss3Alt size={60} color="#2A86FF" />
  },
  {
    title: "Javascript",
    logo: <IoLogoJavascript size={60} color="#FFE137" />
  },
  {
    title: "Framer Motion",
    logo: <TbBrandFramerMotion size={60} color="#AA3FF7" />
  },
  {
    title: "React Native",
    logo: <TbBrandReactNative size={60} color="#64d5f4" />
  },
];

