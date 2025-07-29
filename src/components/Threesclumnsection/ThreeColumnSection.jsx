import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ThreeColumnSection.scss'; // Optional if you want to style it more

import sampleImg from '../../assets/home/img (3).jpeg'; // Change path as needed

const ThreeColumnSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center text-center text-md-start">
        
        {/* 1st Column: Text */}
        <div className="col-md-4 mb-4 mb-md-0">
          <h4>Welcome to SKCE</h4>
          <p>
            Premium commercial kitchen equipment tailored for hotels, bakeries, and industrial use.
          </p>
        </div>

        {/* 2nd Column: Image */}
        <div className="col-md-4 mb-4 mb-md-0">
          <img 
            src={sampleImg} 
            alt="Kitchen Equipment" 
            className="img-fluid rounded shadow" 
          />
        </div>

        {/* 3rd Column: Text */}
        <div className="col-md-4">
          <h4>Why Choose Us?</h4>
          <ul className="list-unstyled">
            <li>✔ ISO-certified manufacturing</li>
            <li>✔ Custom design & fabrication</li>
            <li>✔ PAN India service</li>
            <li>✔ 500+ installations</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ThreeColumnSection;
