"use client";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Me</h1>
      <form
  className={styles.form}
  action="https://formsubmit.co/bhakthi.shetty7811@gmail.com"
  method="POST"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send</button>
</form>

    </div>
  );
}
