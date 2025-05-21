"use client";
import styles from "@/styles/Footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

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
            <p className={styles.tagline}>&quot;Turning ideas into elegant solutions&quot;</p>
          </div>

          {/* Center: Quick Links */}
          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">🏠 Home</Link></li>
              <li><Link href="/about">👩‍💻 About</Link></li>
              <li><Link href="/projects">🚀 Projects</Link></li>
              <li><Link href="/skills">🛠 Skills</Link></li>
              <li><Link href="/certificates">📜 Certificates</Link></li>
              <li><Link href="/contact">📬 Contact</Link></li>
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



