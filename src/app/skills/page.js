"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Skills.module.css";
import gsap from "gsap";

const Skills = () => {
  const cursorRef = useRef(null);
  const cursorContainerRef = useRef(null);

  useEffect(() => {
    console.log("AnimatedCursor mounted");

    if (!cursorContainerRef.current) return;

    const stars = [];

    // Create star elements and append them to cursorContainer
    for (let i = 0; i < 30; i++) {
      let star = document.createElement("div");
      star.classList.add(styles.star);
      cursorContainerRef.current.appendChild(star);
      stars.push(star);
    }

    const moveCursor = (e) => {
      if (!cursorRef.current) return;

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
      console.log("Cleaning up cursor effect");
      document.removeEventListener("mousemove", moveCursor);
      stars.forEach((star) => star.remove());
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Animated Cursor Container */}
      <div ref={cursorContainerRef} className={styles.cursorContainer}>
        <div ref={cursorRef} className={styles.customCursor}></div>
      </div>

      {/* Skills Section */}
      <motion.div
        className={styles.skillsContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Skills
        </motion.h1>

        <motion.div
          className={styles.skillsGrid}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className={styles.skillCategory}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05, boxShadow: `0px 6px 25px ${category.color}` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ borderColor: category.color }}
            >
              <h2 className={styles.skillTitle} style={{ color: category.color }}>{category.title}</h2>
              <div className={styles.skillsList}>
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className={styles.skillBox}
                    whileHover={{ scale: 1.1, backgroundColor: category.color, color: "#fff" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const skillsData = [
  { title: "Programming Languages", skills: ["Python", "Java", "C++"], color: "#FF4B91" },
  { title: "Software Development", skills: ["OOP", "API Development", "Distributed Systems"], color: "#FFA41B" },
  { title: "Cloud & DevOps", skills: ["Microsoft Azure", "Docker", "Kubernetes", "CI/CD Pipelines"], color: "#36D1DC" },
  { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"], color: "#9B51E0" },
  { title: "Security & Reliability", skills: ["Basic Cloud Security", "System Performance Optimization"], color: "#FF4B91" },
  { title: "Soft Skills", skills: ["Problem-Solving", "Teamwork", "Adaptability"], color: "#FFA41B" },
];

export default Skills;
