import "./fc.css";


import collection1 from "../assets/fc/fc1.jpg";
import collection2 from "../assets/fc/fc2.jpg";
import collection3 from "../assets/fc/fc3.jpg";
import collection4 from "../assets/fc/fc4.jpg";
import collection5 from "../assets/fc/fc5.jpg";
import collection6 from "../assets/fc/fc6.jpg";

const collections = [
  {
    id: 1,
    title: "Main Doors",
    subtitle: "Luxury Entrance Collection",
    image: collection1,
  },
  {
    id: 2,
    title: "Villa Doors",
    subtitle: "Designed For Grand Living",
    image: collection2,
  },
  {
    id: 3,
    title: "Teak Wood Doors",
    subtitle: "Nature Meets Elegance",
    image: collection3,
  },
  {
    id: 4,
    title: "Designer Doors",
    subtitle: "Contemporary Luxury",
    image: collection4,
  },
  {
    id: 5,
    title: "Interior Doors",
    subtitle: "Minimal. Modern. Premium.",
    image: collection5,
  },
  {
    id: 6,
    title: "Custom Doors",
    subtitle: "Built Around Your Vision",
    image: collection6,
  },
];

const FeaturedCollections = () => {
  return (
    <section className="featuredCollections" id="collections">

      <div className="fcContainer">

        {/* Heading */}

        <div className="fcHeading">

          <span>
            FEATURED COLLECTIONS
          </span>

          <h2>
            Crafted For Every
            <br />
            Architectural Style
          </h2>

          <p>
            Explore our carefully curated range of premium entrance
            doors designed with timeless European aesthetics,
            exceptional craftsmanship, and uncompromising quality.
          </p>

        </div>

        {/* Grid */}

        <div className="fcGrid">

          {collections.map((item) => (

            <div
              className="fcCard"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="fcOverlay"></div>

              <div className="fcContent">

               

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.subtitle}
                </p>

                <button>

                  Explore Collection


                </button>

              </div>


            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="fcBottom">

          <h3>
            Looking for something unique?
          </h3>

          <p>
            We also manufacture completely custom-designed doors
            tailored to your architecture and interior style.
          </p>

          <a href="#contact">
            Request Custom Design
          </a>

        </div>

      </div>

    </section>
  );
};

export default FeaturedCollections;