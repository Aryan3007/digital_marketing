/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
    return (
        <section>
            <div className="mx-auto dark:bg-gray-900 max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <Image
                            
                                height={1000}
                                width={1000}
                                alt=""
                                src="https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center  bg-gray-300">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-300"></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h1 className="bg-gradient-to-r to-green-700 via-blue-500 from-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                                Unlocking Innovation:
                                <span className="sm:block">
                                    {" "}
                                    MERN Stack Mastery & React Native Expertise{" "}
                                </span>
                            </h1>

                            <p className="mt-4 text-gray-600">
                                As a MERN Stack developer and React Native app creator, I
                                specialize in crafting innovative solutions that redefine user
                                experiences. With a passion for excellence and a commitment to
                                pushing boundaries, I thrive on building seamless and scalable
                                applications that drive transformative change. Let's shape the
                                future together
                            </p>

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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
