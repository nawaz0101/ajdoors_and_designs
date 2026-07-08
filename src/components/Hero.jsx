import { useState, useEffect } from "react";
import "./hero.css";

import ls1 from "../assets/carousel/ls1.jpg";
import ls2 from "../assets/carousel/ls2.jpg";
import ls3 from "../assets/carousel/ls3.jpg";
import ls4 from "../assets/carousel/ls4.jpg";
import ls5 from "../assets/carousel/ls5.jpg";

import pr1 from "../assets/carousel/pr1.jpg";
import pr2 from "../assets/carousel/pr2.jpg";
import pr3 from "../assets/carousel/pr3.jpg";
import pr4 from "../assets/carousel/pr4.jpg";
import pr5 from "../assets/carousel/pr5.jpg";

const slides = [
  {
    desktop: ls1,
    mobile: pr1,
    title: "Luxury Doors Crafted for Timeless Living",
    subtitle:
      "Premium designer doors engineered with precision and craftsmanship.",
  },
  {
    desktop: ls2,
    mobile: pr2,
    title: "Modern Designs That Inspire",
    subtitle:
      "Elegant entrance doors for villas, homes and commercial projects.",
  },
  {
    desktop: ls3,
    mobile: pr3,
    title: "Every Door Makes a Statement",
    subtitle: "Custom-built luxury wooden doors for every architectural style.",
  },
  {
    desktop: ls4,
    mobile: pr4,
    title: "Premium Manufacturing Excellence",
    subtitle:
      "Built using the finest materials with exceptional attention to detail.",
  },
  {
    desktop: ls5,
    mobile: pr5,
    title: "Craftsmanship Beyond Expectations",
    subtitle:
      "Trusted by architects, builders and homeowners across the region.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hero">
      <div
        className="hero-track"
        style={{
          transform: `translateX(-${current * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <picture>
              <source media="(max-width:768px)" srcSet={slide.mobile} />

              <img
                src={slide.desktop}
                alt={slide.title}
                className="hero-image"
                draggable="false"
              />
            </picture>

            <div className="hero-overlay"></div>

            <div className="hero-content">

              <h1>{slide.title}</h1>

              <p>{slide.subtitle}</p>

              <div className="hero-buttons">
                <button className="btn-primary">Explore Collection</button>

                <button className="btn-secondary">Get Free Quote</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="hero-arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
