import { useState } from "react";
import "./faq.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What makes AJ Doors different from other door manufacturers?",
    answer:
      "Every AJ Door is crafted using carefully selected premium materials, advanced manufacturing technology, and meticulous hand-finishing. We focus on architectural elegance, long-term durability, and exceptional craftsmanship to create doors that enhance the beauty and value of every home.",
  },
  {
    question: "Can you manufacture completely custom door designs?",
    answer:
      "Absolutely. We specialize in bespoke door solutions tailored to your architectural style, preferred materials, finishes, dimensions, and design preferences. Our team works closely with homeowners, architects, and interior designers to deliver truly unique entrances.",
  },
  {
    question: "Do you provide delivery and installation services?",
    answer:
      "Yes. From manufacturing to professional installation, our experienced team ensures every door is transported safely, installed precisely, and finished to the highest standards, providing a seamless experience from start to finish.",
  },
  {
    question: "What materials do you use for your doors?",
    answer:
      "We use premium-quality hardwoods, engineered wood, teak, decorative veneers, laminates, glass, and high-performance hardware sourced from trusted suppliers. Every material is selected to ensure lasting strength, beauty, and reliability.",
  },
  {
    question: "How long does it take to complete a custom door project?",
    answer:
      "Project timelines depend on the design complexity and quantity. Most custom orders are completed within a few weeks, while larger architectural projects may require additional production time. We always provide clear timelines before production begins.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id="faq">

      <div className="faqContainer">

        {/* Left */}

        <div className="faqLeft">

          <span>FREQUENTLY ASKED QUESTIONS</span>

          <h2>
            Everything You Need
            <br />
            To Know
          </h2>

          <p>
            From premium materials to custom manufacturing and
            professional installation, here are the answers to
            the questions our clients ask most often.
          </p>

        </div>

        {/* Right */}

        <div className="faqRight">

          {faqData.map((item, index) => (

            <div
              key={index}
              className={`faqItem ${
                active === index ? "active" : ""
              }`}
            >

              <button
                className="faqQuestion"
                onClick={() => toggleFAQ(index)}
              >

                <span>{item.question}</span>

                {active === index ? (
                  <FiMinus />
                ) : (
                  <FiPlus />
                )}

              </button>

              <div
                className={`faqAnswer ${
                  active === index ? "show" : ""
                }`}
              >

                <p>{item.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;