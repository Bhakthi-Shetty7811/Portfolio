"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function AnimatedCursor() {
  const pathname = usePathname(); // Detects current page

  useEffect(() => {
    console.log(`AnimatedCursor mounted on: ${pathname}`);

    const stars = [];

    for (let i = 0; i < 30; i++) {
      let star = document.createElement("div");
      star.classList.add("star");
      document.body.appendChild(star);
      stars.push(star);
    }

    const moveCursor = (e) => {
      gsap.to(stars, {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.02,
        duration: 0.3,
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      console.log(`Cleaning up cursor effect on: ${pathname}`);
      document.removeEventListener("mousemove", moveCursor);
      stars.forEach((star) => star.remove());
    };
  }, [pathname]);

  return null;
}


