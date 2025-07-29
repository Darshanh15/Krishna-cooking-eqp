import React from 'react';
import './Contact.scss';
import contactImg from '../../assets/home/img (3).jpeg';

import ThreeColumnSection from '../../components/Threesclumnsection/ThreeColumnSection';

function Contact() {
  return (
    <>
    <section className="contact-section">
      <div className="container">
        <div className="contact-row">
          <div className="contact-image-wrapper">
            <img src={contactImg} alt="Commercial Kitchen" className="contact-image" />
          </div>
          <div className="contact-text-wrapper">
            <h2>Contact Sri Krishnaa Cooking Equipments</h2>
            <p>
              With over two decades of expertise, Sri Krishnaa Cooking Equipments is a pioneer in manufacturing high-performance commercial kitchen equipment for 2-star to 7-star hotels, bakeries, cloud kitchens, industrial canteens, and catering services.
            </p>
            <ul>
              <li>✔ ISO-certified manufacturing facility</li>
              <li>✔ Custom design & fabrication</li>
              <li>✔ PAN India service network</li>
              <li>✔ 500+ successful installations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <ThreeColumnSection />
    </>
  );
}

export default Contact;
