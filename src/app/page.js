"use client";
import StarryBackground from "../components/StarryBackground";
import AnimatedCursor from "../components/AnimatedCursor";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <StarryBackground />
      <AnimatedCursor />
      <div className={styles.heroText}>
        <h1>Welcome to Bhakthi’s Universe</h1>
        <p>Exploring Infinite Possibilities</p>
      </div>
    </div>
  );
}


