import "./testimonials.css";
import {
  FiMapPin,
  FiStar,
} from "react-icons/fi";


const testimonials = [
  {
    id: 1,
    name: "Mohammed Khan",
    location: "Bangalore",
    project: "Luxury Villa Entrance",
    review:
      "The craftsmanship and finishing exceeded our expectations. The entrance door has completely transformed the appearance of our villa.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    location: "Mysore",
    project: "Designer Main Door",
    review:
      "Excellent quality and professional installation. Every visitor compliments our new entrance door.",
  },
  {
    id: 3,
    name: "Farhan Ali",
    location: "Hubli",
    project: "Premium Interior Doors",
    review:
      "Beautiful design, flawless finishing, and outstanding customer support from start to finish.",
  },
  {
    id: 4,
    name: "Vijay Kumar",
    location: "Belagavi",
    project: "Modern Villa Project",
    review:
      "AJ Doors delivered exactly what they promised. Premium quality with attention to every detail.",
  },
 
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonialContainer">

        {/* Heading */}

        <div className="testimonialHeading">

          <span>CLIENT TESTIMONIALS</span>

          <h2>
            Trusted By Homeowners
            <br />
            Across Karnataka
          </h2>

          <p>
            Every completed project reflects our commitment to
            exceptional craftsmanship, premium quality, and
            customer satisfaction.
          </p>

        </div>

        {/* Grid */}

        <div className="testimonialGrid">

          {testimonials.map((item) => (

            <div
              className="testimonialCard"
              key={item.id}
            >

              <div className="quoteMark">
                "
              </div>

              <div className="stars">

                {[...Array(5)].map((_, index) => (
                  <FiStar key={index} />
                ))}

              </div>

              <p className="review">
                {item.review}
              </p>

              <div className="clientInfo">


                <div>

                  <h3>
                    {item.name}
                  </h3>

                  <span className="project">
                    {item.project}
                  </span>

                  <div className="location">

                    <FiMapPin />

                    <span>
                      {item.location}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;