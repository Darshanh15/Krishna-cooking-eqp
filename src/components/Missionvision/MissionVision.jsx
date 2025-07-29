import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MissionVision = () => {
  return (
    <section id="mission" className="container py-5 bg-light rounded shadow-sm">
      <div className="row">
        {/* Our Mission */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h4 className="mb-3">Our Mission</h4>
          <p className="text-muted">
            To empower the food industry with innovative and sustainable kitchen solutions that enhance productivity, 
            ensure safety, and support culinary excellence across India and beyond.
          </p>
        </div>

        {/* Our Vision */}
        <div className="col-md-6">
          <h4 className="mb-3">Our Vision</h4>
          <p className="text-muted">
            To be the most trusted and admired brand in commercial kitchen equipment, setting benchmarks in quality, 
            service, and technological advancement for the hospitality and food service sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
