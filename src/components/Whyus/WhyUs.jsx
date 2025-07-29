import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyUs = () => {
  return (
    <section id="why-us" className="container py-5">
      <h3 className="text-center mb-5">Why Choose Sri Krishnaa?</h3>
      <div className="row text-center">
        <div className="col-md-3 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Expertise"
            width="60"
          />
          <h5 className="mt-3">Industry Expertise</h5>
          <p className="text-muted">
            20+ years of experience delivering robust and efficient commercial kitchen infrastructure.
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6335/6335528.png"
            alt="Customization"
            width="60"
          />
          <h5 className="mt-3">Tailored Solutions</h5>
          <p className="text-muted">
            Custom-designed equipment and layouts to fit your space, needs, and workflow.
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Quality"
            width="60"
          />
          <h5 className="mt-3">Premium Quality</h5>
          <p className="text-muted">
            Built with food-grade stainless steel and advanced manufacturing processes.
          </p>
        </div>

        <div className="col-md-3 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077992.png"
            alt="Support"
            width="60"
          />
          <h5 className="mt-3">Reliable Support</h5>
          <p className="text-muted">
            Comprehensive after-sales service and AMC plans with nationwide reach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
