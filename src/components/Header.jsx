import { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollEffect = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", scrollEffect);

    return () => window.removeEventListener("scroll", scrollEffect);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        <div className="logo">
          AJ <span>AJ Doors & Designs</span>
        </div>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <a href="#">Home</a>
          <a href="#">Doors</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>

          <button className="mobile-btn">
            Get Quote
          </button>
        </nav>

        <button className="quote-btn">
          Get Quote
        </button>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}