import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ title, description, image, technologies, color, isReversed }) {
  return (
    <motion.div
      className={`${styles.card} ${isReversed ? styles.reverse : ""}`}
      whileHover={{ scale: 1.05, boxShadow: `0px 8px 30px ${color}` }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ borderColor: color }}
    >
      <div className={styles.imageContainer} style={{ borderColor: color }}>
        <Image src={image} alt={title} width={400} height={250} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title} style={{ color }}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.techStack}>
          {technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className={styles.tech}
              whileHover={{ scale: 1.1, backgroundColor: color, color: "#fff" }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 

 



