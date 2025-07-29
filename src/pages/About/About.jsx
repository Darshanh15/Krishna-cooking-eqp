import React from "react";
import "./About.scss";
import aboutImg from "../../assets/home/img (3).jpeg";

function About() {
  return (
    <>
      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT COLUMN (Image) */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={aboutImg}
                alt="About Sri Krishnaa Cooking Equipments"
                className="img-fluid rounded shadow about-img"
              />
            </div>

            {/* RIGHT COLUMN (Text) */}
            <div className="col-lg-6">
              <h2 className="about-title mb-4">
                About Sri Krishnaa Cooking Equipments
              </h2>
              <p className="about-text">
                With over two decades of expertise, Sri Krishnaa Cooking
                Equipments is a pioneer in manufacturing high-performance
                commercial kitchen equipment for 2-star to 7-star hotels,
                bakeries, cloud kitchens, industrial canteens, and catering
                services. Our precision-engineered solutions ensure hygiene,
                efficiency, and long-term reliability.
              </p>
              <p className="about-text">
                We specialize in turnkey kitchen setups, offering design
                consultation, fabrication, installation, and maintenance. Every
                product is crafted with food-grade stainless steel and
                cutting-edge technology to meet global culinary standards.
              </p>
              <ul className="about-list list-unstyled mt-3">
                <li>ISO-certified manufacturing facility</li>
                <li>Custom design & fabrication</li>
                <li>PAN India service network</li>
                <li>500+ successful installations</li>

                {/* <li>✔ ISO-certified manufacturing facility</li>
              <li>✔ Custom design & fabrication</li>
              <li>✔ PAN India service network</li>
              <li>✔ 500+ successful installations</li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
