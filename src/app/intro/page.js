"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import styles from "./Intro.module.css";

export default function Intro() {
  const [time, setTime] = useState(null); // Start with null to prevent SSR mismatch

  useEffect(() => {
    setTime(new Date()); // Now the state is only set on the client

    // Animate Name Glow
    gsap.fromTo(
      ".glowing-name",
      { textShadow: "0px 0px 5px rgba(255, 255, 255, 0.5)" },
      { textShadow: "0px 0px 15px rgba(255, 255, 255, 1)", repeat: -1, yoyo: true, duration: 1 }
    );

    // Update Clock Every Second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const interstellarTime = time ? new Date(time.getTime() * 1.03).toLocaleTimeString() : "--:--:--";

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.starryBackground}></div>
  
      {/* Shooting Stars Effect */}
      <div className={styles.shootingStars}></div>
  
      {/* Text Board for Readability */}
      <div className={styles.textBoard}>
        {/* Glowing Name */}
        <h1 className="glowing-name">Bhakthi’s Universe</h1>
  
        {/* Animated Tagline */}
        <p className={styles.tagline}>
          Exploring the Infinite Possibilities of Technology & Creativity
        </p>
  
        {/* Cosmic Clock */}
        <div className={styles.clock}>
          <p>🕰 Local Time: {time ? time.toLocaleTimeString() : "--:--:--"}</p>
          <p>🌌 Interstellar Time: {interstellarTime}</p>
        </div>
  
        {/* Enter Button */}
        <Link href="/home">
          <button className={styles.enterButton}>Enter My Universe 🚀</button>
        </Link>
      </div>
    </div>
  );
}
