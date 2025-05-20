"use client";
import React, { useEffect, useRef } from "react";
import styles from "../../styles/Certificates.module.css";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Certificates() {

  const pathname = usePathname();
    const cursorRef = useRef(null);
    const cursorContainerRef = useRef(null);
  
    useEffect(() => {
      console.log(`AnimatedCursor mounted on: ${pathname}`);
  
      const stars = [];
  
      // Creating star elements and appending them inside the cursor container
      for (let i = 0; i < 30; i++) {
        let star = document.createElement("div");
        star.classList.add(styles.star);
        cursorContainerRef.current.appendChild(star);
        stars.push(star);
      }
  
      const moveCursor = (e) => {
        gsap.to(stars, {
          x: e.clientX,
          y: e.clientY,
          stagger: 0.02,
          duration: 0.3,
        });
  
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power2.out",
        });
      };
  
      document.addEventListener("mousemove", moveCursor);
  
      return () => {
        console.log(`Cleaning up cursor effect on: ${pathname}`);
        document.removeEventListener("mousemove", moveCursor);
        stars.forEach((star) => star.remove());
      };
    }, [pathname]);
  

  const certificates = [
    { title: "Azure Cloud Services", date: "2025", issuer: "Microsoft" },
    { title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift", date: "2025", issuer: "IBM" },
  ];

  return (
    <div className={styles.container}>
      <div ref={cursorContainerRef} className={styles.cursorContainer}>
        <div ref={cursorRef} className={styles.customCursor}></div>
      </div>
      <h1 className={styles.title}>Certificates</h1>
      <div className={styles.certGrid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.certCard}>
            <h2>{cert.title}</h2>
            <p><strong>Issued By:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}