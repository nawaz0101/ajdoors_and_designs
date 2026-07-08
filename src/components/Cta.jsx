import "./Cta.css";
import {
  FiArrowUpRight,
  FiPhoneCall,
  FiAward,
  FiHome,
  FiUsers,
} from "react-icons/fi";

import ctaBg from "../assets/cta/cta.jpg";

const Cta = () => {
  return (
    <section className="cta">

      {/* Background Image */}

      <img
        src={ctaBg}
        alt="Luxury Door"
        className="ctaBg"
      />

      <div className="ctaOverlay"></div>

      <div className="ctaContainer">

        <div className="ctaCard">

          <span className="ctaTag">
            AJ DOORS & DESIGNS
          </span>

          <h2>
            Transform Your Entrance
            <br />
            Into a Timeless Masterpiece
          </h2>

          <p>
            Crafted with precision, inspired by European elegance,
            and engineered to stand the test of time. Let us design
            the perfect entrance that reflects your lifestyle,
            personality, and architectural vision.
          </p>

          <div className="ctaButtons">

            <button className="primaryBtn">

              Request Free Consultation

              <FiArrowUpRight />

            </button>

            <button className="secondaryBtn">

              <FiPhoneCall />

              Call Now

            </button>

          </div>

          {/* Stats */}

          <div className="ctaStats">

            <div className="ctaStat">

              <FiAward />

              <div>

                <h3>15+</h3>

                <span>Years Experience</span>

              </div>

            </div>

            <div className="ctaStat">

              <FiHome />

              <div>

                <h3>5000+</h3>

                <span>Doors Installed</span>

              </div>

            </div>

            <div className="ctaStat">

              <FiUsers />

              <div>

                <h3>250+</h3>

                <span>Luxury Projects</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Cta;