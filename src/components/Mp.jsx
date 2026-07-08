import "./mp.css";
import {
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

const process = [
  {
    id: "01",
    title: "Premium Material Selection",
    description:
      "Every masterpiece begins with carefully selected premium wood and high-grade materials chosen for durability, elegance, and long-lasting performance.",
  },
  {
    id: "02",
    title: "Precision Manufacturing",
    description:
      "Using advanced CNC machinery and expert craftsmanship, every component is cut and engineered with millimeter-level accuracy.",
  },
  {
    id: "03",
    title: "Handcrafted Finishing",
    description:
      "Our artisans meticulously polish, stain, texture, and finish each door to achieve a refined appearance worthy of luxury interiors.",
  },
  {
    id: "04",
    title: "Quality Inspection",
    description:
      "Every product undergoes multiple quality checks to ensure flawless finishing, structural integrity, and smooth functionality before delivery.",
  },
  {
    id: "05",
    title: "Delivery & Installation",
    description:
      "From careful packaging to professional installation, every step is handled with precision to deliver a seamless customer experience.",
  },
];

const MP = () => {
  return (
    <section className="mp" id="process">

      <div className="mpContainer">

        {/* Heading */}

        <div className="mpHeading">

          <span>MANUFACTURING PROCESS</span>

          <h2>
            From Raw Material
            <br />
            To Architectural Masterpiece
          </h2>

          <p>
            Every AJ Door is the result of precision engineering,
            skilled craftsmanship, and uncompromising quality
            standards.
          </p>

        </div>

        {/* Process */}

        <div className="mpSteps">

          {process.map((step) => (

            <div
              className="mpStep"
              key={step.id}
            >

              <div className="mpNumber">

                {step.id}

              </div>

              <div className="mpContent">

                <div className="mpIcon">

                  <FiCheckCircle />

                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

                <button>

                  Learn More

                  <FiArrowUpRight />

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Quote */}

        <div className="mpQuote">

          <h3>
            "Luxury isn't manufactured overnight.
            It's crafted through patience,
            precision, and passion."
          </h3>

        </div>

      </div>

    </section>
  );
};

export default MP;