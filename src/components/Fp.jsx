import "./fp.css";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import project1 from "../assets/fp/fp1.jpg";
import project2 from "../assets/fp/fp2.jpg";
import project3 from "../assets/fp/fp3.jpg";

const projects = [
  {
    id: 1,
    title: "Luxury Villa Entrance",
    location: "Bangalore",
    category: "Premium Teak Wood Door",
    description:
      "A handcrafted double-door entrance designed for a modern luxury villa, combining timeless aesthetics with exceptional durability.",
    image: project1,
  },
  {
    id: 2,
    title: "Modern Residence",
    location: "Mysore",
    category: "Designer Main Door",
    description:
      "Minimalist architecture meets precision craftsmanship with a contemporary entrance designed to elevate the home's character.",
    image: project2,
  },
  {
    id: 3,
    title: "Premium Interior Collection",
    location: "Hubli",
    category: "Interior Designer Door",
    description:
      "Elegant interior doors crafted with premium finishes to create seamless transitions between luxurious living spaces.",
    image: project3,
  },
];

const FP = () => {
  return (
    <section className="fp" id="projects">
      <div className="fpContainer">

        {/* Heading */}

        <div className="fpHeading">

          <span>FEATURED PROJECTS</span>

          <h2>
            Entrances That
            <br />
            Define Luxury
          </h2>

          <p>
            Every project reflects our passion for exceptional
            craftsmanship, architectural excellence, and timeless
            European-inspired design.
          </p>

        </div>

        {/* Projects */}

        {projects.map((project, index) => (

          <div
            className={`fpRow ${index % 2 !== 0 ? "reverse" : ""}`}
            key={project.id}
          >

            {/* Image */}

            <div className="fpImage">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="fpImageOverlay"></div>

            </div>

            {/* Content */}

            <div className="fpContent">

              <span className="fpNumber">
                0{project.id}
              </span>

              <h3>
                {project.title}
              </h3>

              <div className="fpLocation">

                <FiMapPin />

                <span>{project.location}</span>

              </div>

              <h4>
                {project.category}
              </h4>

              <p>
                {project.description}
              </p>

              <button>

                View Project

                <FiArrowUpRight />

              </button>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
};

export default FP;