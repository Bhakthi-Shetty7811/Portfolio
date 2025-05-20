"use client";
import StarryBackground from "@/components/StarryBackground";
import AnimatedCursor from "@/components/AnimatedCursor";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <StarryBackground />
      <AnimatedCursor />
      <div className={styles.container}>
        <div className={styles.heroText}>
          <h1 style={{ fontSize: '3.5rem' }}>Welcome to Bhakthi’s Universe</h1>
          <p className={styles.cursiveText}>Exploring Infinite Possibilities</p>
        </div>
      </div>
    </div>
  );
}


