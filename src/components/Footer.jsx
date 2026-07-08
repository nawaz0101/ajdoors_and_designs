import "./footer.css";
import {
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footerContainer">

        {/* TOP */}

        <div className="footerTop">

          {/* Brand */}

          <div className="footerBrand">

            <h2>AJ Doors & Designs</h2>

            <p>
              Crafting luxury doors that combine timeless
              European design, premium materials, and
              exceptional craftsmanship for modern homes.
            </p>

            <div className="footerSocial">

              <a href="#">
                <FiInstagram />
              </a>

              <a href="#">
                <FiFacebook />
              </a>

              <a href="#">
                <FiPhone />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footerLinks">

            <h3>Quick Links</h3>

            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>

          </div>

          {/* Collections */}

          <div className="footerLinks">

            <h3>Collections</h3>

            <a href="#">Main Doors</a>
            <a href="#">Villa Doors</a>
            <a href="#">Teak Wood Doors</a>
            <a href="#">Interior Doors</a>
            <a href="#">Designer Doors</a>

          </div>

          {/* Contact */}

          <div className="footerContact">

            <h3>Contact</h3>

            <div className="footerInfo">

              <FiPhone />

              <span>+91 98765 43210</span>

            </div>

            <div className="footerInfo">

              <FiMail />

              <span>info@ajdoors.com</span>

            </div>

            <div className="footerInfo">

              <FiMapPin />

              <span>
                Bangalore, Karnataka
              </span>

            </div>

            <button className="footerBtn">

              Get Directions

              <FiArrowUpRight />

            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="footerDivider"></div>

        {/* Bottom */}

        <div className="footerBottom">

          <p>
            © 2026 AJ Doors & Designs. All Rights Reserved.
          </p>

          <p>
            Crafted with Precision • Built for Generations
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;