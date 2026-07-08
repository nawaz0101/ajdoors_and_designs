import "./whychoose.css";
import {
  Hammer,
  Trees,
  PencilRuler,
  ShieldCheck,
  Truck,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: <Hammer size={34} strokeWidth={1.8} />,
    title: "Expert Craftsmanship",
    description:
      "Precision-crafted doors built with exceptional attention to every detail.",
  },
  {
    icon: <Trees size={34} strokeWidth={1.8} />,
    title: "Premium Materials",
    description:
      "Carefully selected wood and premium materials for lasting performance.",
  },
  {
    icon: <PencilRuler size={34} strokeWidth={1.8} />,
    title: "Custom Designs",
    description:
      "Tailor-made door designs that perfectly complement your architecture.",
  },
  {
    icon: <ShieldCheck size={34} strokeWidth={1.8} />,
    title: "Long-Lasting Quality",
    description:
      "Engineered to withstand time while maintaining elegance and strength.",
  },
  {
    icon: <Truck size={34} strokeWidth={1.8} />,
    title: "Timely Delivery",
    description:
      "Reliable manufacturing schedules with prompt and secure deliveries.",
  },
  {
    icon: <Handshake size={34} strokeWidth={1.8} />,
    title: "Trusted Professionals",
    description:
      "Preferred by homeowners, architects and construction developers.",
  },
];

export default function WhyChoose() {
  return (
    <section className="whyChoose">
      <div className="whyContainer">

        <div className="whyHeading">

          <span>WHY CHOOSE US</span>

          <h2>
            Crafted With Passion.<br />
            Built To Last.
          </h2>

          <p>
            We blend premium craftsmanship, elegant designs and superior
            materials to create doors that elevate every space.
          </p>

        </div>

        <div className="whyGrid">

          {features.map((item, index) => (
            <div className="whyCard" key={index}>

              <div className="whyIcon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}