"use client";
import styles from "../../styles/About.module.css";

export default function About() {


  return (
    <div className={styles.container}>

      {/* Left Side - Content Section */}
      <div className={styles.content}>
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.intro}>
          Hi, I'm <span className={styles.highlight}>Bhakthi</span>, a space-loving tech enthusiast who enjoys creating unique digital experiences.
          I blend creativity with code to build futuristic applications.
        </p>

        {/* OBJECTIVE SECTION */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Objective</h2>
          <p className={styles.text}>
            Final-year Information Technology student with a strong foundation in 
            <span className={styles.highlight}> software development, cloud computing, and DevOps</span>. 
            Passionate about building efficient and scalable applications, I am seeking an opportunity to apply my technical skills and grow as a 
            <span className={styles.highlight}> Software Engineer</span> specializing in distributed systems and infrastructure.
          </p>
        </div>

        {/* EDUCATION SECTION */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <p className={styles.education}>
            <span className={styles.highlight}>Usha Mittal Institute of Technology, SNDT</span><br />
            B.Tech. in Information Technology | <span className={styles.year}>2021 – 2025</span>
          </p>
        </div>

        {/* EXTRACURRICULAR ACTIVITIES */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Extracurricular Activities</h2>
          <div className={styles.activity}>
            <h3 className={styles.role}>Event & Planning Director | IEEE UMIT</h3>
            <span className={styles.year}>(2023 – 2024)</span>
            <p className={styles.text}>
              Organized technical workshops on cloud computing and DevOps methodologies.
            </p>
          </div>

          <div className={styles.activity}>
            <h3 className={styles.role}>Junior Council Member | IEEE UMIT</h3>
            <span className={styles.year}>(2022 – 2023)</span>
            <p className={styles.text}>
              Assisted in managing hackathons and coding competitions.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Video Section */}
      <div className={styles.videoContainer}>
        <video 
          autoPlay 
          muted 
          playsInline 
          disablePictureInPicture 
          controlsList="nodownload nofullscreen noremoteplayback"
          className={styles.video}
        >
          <source src="/astronaut.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
