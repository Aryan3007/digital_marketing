"use client"
import React, { useEffect, useRef } from "react";

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = event.clientX - 15 + "px";
        cursor.style.top = event.clientY - 15 + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="cursor" className="fixed flex justify-center items-center" ref={cursorRef}>
      <div className="dot h-2 rounded-full w-2 absolute dark:bg-white bg-black"></div>
      <div className="cur-outline h-12 w-12 dark:border-white border-black border-2 rounded-full bg-transparent"></div>
    </div>
  );
};

export default Cursor;
