"use client";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import AnimatedCursor from "../components/AnimatedCursor";
import StarryBackground from "../components/StarryBackground";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isIntroPage = pathname === "/intro";

  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </head>
      <body
        key={pathname} // Forces re-render when changing pages
        style={{
          background: "url('/backgrounds/star(5).gif') no-repeat center center fixed",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: -1,
        }}
      >
        <AnimatedCursor />
  <StarryBackground />
  {!isIntroPage && <Navbar />}
  <main className="content">{children}</main>
  {!isIntroPage && <Footer />}
      </body>
    </html>
  );
}