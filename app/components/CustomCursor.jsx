"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateInputMode = () => setIsTouchDevice(mediaQuery.matches);

    updateInputMode();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateInputMode);
      return () => mediaQuery.removeEventListener("change", updateInputMode);
    }

    mediaQuery.addListener(updateInputMode);
    return () => mediaQuery.removeListener(updateInputMode);
  }, []);

  useEffect(() => {
    if (isTouchDevice) {
      return undefined;
    }

    const move = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${event.clientX - 8}px, ${event.clientY - 8}px)`;
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] h-4 w-4 rounded-full bg-[#c8f04a] mix-blend-difference transition-transform duration-75 ease-linear"
    />
  );
}
