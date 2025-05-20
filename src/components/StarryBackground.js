"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function StarryBackground() {
  useEffect(() => {
    const stars = [];

    for (let i = 0; i < 100; i++) {
      let star = document.createElement("div");
      star.classList.add("star-bg");
      document.body.appendChild(star);
      stars.push(star);
    }

    gsap.to(stars, {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      repeat: -1,
      duration: 3,
      ease: "sine.inOut",
      stagger: 0.1,
    });

    return () => {
      stars.forEach((star) => star.remove());
    };
  }, []);

  return <></>;
}