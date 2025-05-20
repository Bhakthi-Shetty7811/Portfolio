"use client";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/Projects.module.css";
import { motion } from "framer-motion";


export default function Projects() {
  
  const projectList = [
    { 
      title: "Dermavision", 
      description: "An AI-powered skincare analysis web app using EfficientNetB0 for skin condition classification. Designed a RESTful API for real-time image processing and personalized recommendations.",
      image: "/projects/dermavision.jpg", 
      technologies: ["Python", "Flask", "MySQL", "CNN", "EfficientNetB0", "OpenCV", "React"],
      color: "#FF4B91" 
    },
    { 
      title: "Artisage", 
      description: "An artist recruitment platform built with Next.js and Firebase, providing seamless artist discovery, collaboration, and booking management.",
      image: "/projects/artisage.jpg", 
      technologies: ["Next.js", "Firebase", "Node.js", "Tailwind CSS"],
      color: "#FFA41B"
    },
    { 
      title: "Student Attendance Tracker", 
      description: "Automated attendance tracking system using facial recognition. Integrated Firebase for cloud storage and Flask for backend processing.",
      image: "/projects/student-tracker.jpg", 
      technologies: ["Python", "Flask", "Firebase", "Face Recognition", "OpenCV"],
      color: "#36D1DC"
    },
    { 
      title: "Cloud-Based URL Shortener", 
      description: "A scalable web application for shortening URLs, supporting analytics, custom slugs, and cloud-based storage.",
      image: "/projects/url-shortener.jpg", 
      technologies: ["MongoDB", "Express", "React", "Node.js", "Cloud Functions"],
      color: "#9B51E0"
    }
  ];

  return (
    <div className={styles.container}>
      <motion.h1 
        className={styles.heading} 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Featured Work
      </motion.h1>

      <div className={styles.list}>
        {projectList.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
          >
            <ProjectCard {...project} isReversed={index % 2 !== 0} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

