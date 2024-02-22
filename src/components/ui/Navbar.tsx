"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            x-data={{ isOpen: false }}
            className="relative bg-black h-full items-center shadow "
        >
            <div className="container px-12 py-4 mx-auto md:flex md:justify-between items-center md:items-center">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold text-white">{`Dev</>Hub`}</h1>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            x-cloak="true"
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-100  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    x-cloak="true"
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
                        } md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                >
                    <div className="flex flex-col font-bold md:flex-row md:mx-6">
                        <a
                            className="my-2 text-gray-300 transition-colors duration-300 transform  hover:text-[#a756f7]  md:mx-4 md:my-0"
                            href="#"
                        >
                            Home
                        </a>
                        <Link
                            className="my-2 text-gray-300 transition-colors duration-300 transform hover:text-[#a756f7]  md:mx-4 md:my-0"
                            href="/projects"
                        >
                            Projects
                        </Link>
                        <a
                            className="my-2 text-gray-300 transition-colors duration-300 transform  hover:text-[#a756f7]  md:mx-4 md:my-0"
                            href="#"
                        >
                            About
                        </a>
                        <a
                            className="my-2 text-gray-300 transition-colors duration-300 transform  hover:text-[#a756f7] md:mx-4 md:my-0"
                            href="#"
                        >
                            Contact
                        </a>
                        <a
                            className="my-2 text-gray-300 transition-colors duration-300 transform  hover:text-[#a756f7]  md:mx-4 md:my-0"
                            href="#"
                        >
                            About
                        </a>
                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
