"use client";

import { useEffect } from "react";

export default function BackgroundEffect() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Get the viewport dimensions
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate percentages for the cursor position
      const xPercent = (clientX / width) * 100;
      const yPercent = (clientY / height) * 100;

      // Update the background gradient based on cursor position
      document.body.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #1A1A1A, #000000)`;
    };

    // Attach the mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; // This component does not render anything.
}
