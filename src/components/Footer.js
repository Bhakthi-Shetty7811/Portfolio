"use client";
import styles from "@/styles/Footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Sections */}
        <div className={styles.topSection}>
          {/* Left: Branding */}
          <div className={styles.branding}>
            <h2>Bhakthi Shetty 💫</h2>
            <p className={styles.tagline}>"Turning ideas into elegant solutions"</p>
          </div>

          {/* Center: Quick Links */}
          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">🏠 Home</a></li>
              <li><a href="/about">👩‍💻 About</a></li>
              <li><a href="/projects">🚀 Projects</a></li>
              <li><a href="/skills">🛠 Skills</a></li>
              <li><a href="/certificates">📜 Certificates</a></li>
              <li><a href="/contact">📬 Contact</a></li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div className={styles.contact}>
            <h3>Contact Me</h3>
            <p><FaEnvelope /> <a href="mailto:bhakthi.shetty7811@gmail.com">bhakthi.shetty7811@gmail.com</a></p>
            <p><FaPhone /> <a href="tel:+917303176511">(+91) 7303176511</a></p>
            <p><FaMapMarkerAlt /> Mumbai, India</p>
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/bhakthi-shetty-743a33357/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/Bhakthi-Shetty7811" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>

        {/* Copyright */}
        <div className={styles.bottomSection}>
          <p>&copy; {currentYear} Bhakthi Shetty | Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
}



