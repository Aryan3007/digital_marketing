"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";

export default function AnimatedPinDemo() {
    return (
        <>
            <h1 className="text-center my-12 text-3xl">What We Are Offering</h1>
            <div className="flex flex-wrap gap-12 justify-center">

                <div className="h-full flex items-center justify-center ">
                    <PinContainer
                        title="Animated UI Designes"
                        href="https://twitter.com/mannupaaji"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-80 h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Animated UI
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Customizable Tailwind CSS and Framer Motion Components.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                </div> <div className="h-full  flex items-center justify-center ">
                    <PinContainer
                        title="Full Stack MERN Websites"
                        href="https://twitter.com/mannupaaji"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-80 h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Web Development
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Customizable Tailwind CSS and Framer Motion Components.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                </div> <div className="h-full  flex items-center justify-center ">
                    <PinContainer
                        title="React native Apps"
                        href="https://twitter.com/mannupaaji"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-80 h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                App Development
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Customizable Tailwind CSS and Framer Motion Components.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                </div>







            </div>
        </>

    );
}
