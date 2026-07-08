import "./about.css";
import {
  FiArrowUpRight,
  FiAward,
  FiShield,
  FiHome
} from "react-icons/fi";

import aboutImg1 from "../assets/about/ab1.jpg";
import aboutImg2 from "../assets/about/ab2.jpg";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="aboutContainer">

        {/* Heading */}

        <div className="aboutHeading">

          <span>ABOUT AJ DOORS</span>

          <h2>
            Crafted With Passion.
            <br />
            Built For Generations.
          </h2>

          <p>
            Every entrance tells a story. At AJ Doors & Designs,
            we combine timeless craftsmanship with modern
            manufacturing to create doors that become a statement
            of luxury, security, and architectural elegance.
          </p>

        </div>

        {/* Content */}

        <div className="aboutContent">

          {/* Left */}

          <div className="aboutLeft">

            <div className="aboutImageLarge">

              <img
                src={aboutImg1}
                alt="AJ Doors"
              />

            </div>

            <div className="experienceCard">

              <h3>15+</h3>

              <p>
                Years of
                <br />
                Excellence
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="aboutRight">

            <div className="aboutSmallImage">

              <img
                src={aboutImg2}
                alt="Manufacturing"
              />

            </div>

            <h3>
              Inspired by European Design.
              <br />
              Engineered in India.
            </h3>

            <p>
              Our manufacturing process blends premium materials,
              skilled craftsmanship, and advanced machinery to
              deliver doors that redefine elegance and durability.
              Every product is built with attention to detail,
              ensuring beauty that lasts for decades.
            </p>

            {/* Features */}

            <div className="aboutFeatures">

              <div className="feature">

                <div className="featureIcon">
                  <FiAward />
                </div>

                <div>

                  <h4>Premium Craftsmanship</h4>

                  <span>
                    Exceptional finishing and detailing
                  </span>

                </div>

              </div>

              <div className="feature">

                <div className="featureIcon">
                  <FiShield />
                </div>

                <div>

                  <h4>Superior Quality</h4>

                  <span>
                    Built for strength and durability
                  </span>

                </div>

              </div>

              <div className="feature">

                <div className="featureIcon">
                  <FiHome />
                </div>

                <div>

                  <h4>Custom Designs</h4>

                  <span>
                    Tailored for every architectural style
                  </span>

                </div>

              </div>

            </div>

            {/* Stats */}

            <div className="aboutStats">

              <div>

                <h2>5000+</h2>

                <span>Doors Installed</span>

              </div>

              <div>

                <h2>250+</h2>

                <span>Luxury Projects</span>

              </div>

              <div>

                <h2>98%</h2>

                <span>Client Satisfaction</span>

              </div>

            </div>

            <button>

              Discover Our Story

              <FiArrowUpRight />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;