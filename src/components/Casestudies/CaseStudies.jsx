import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="container py-5 bg-light">
      <h3 className="text-center mb-5">Client Success Stories</h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">ITC Grand Chola – Chennai</h5>
              <p className="card-text">
                We executed a high-efficiency kitchen layout with fully customized bain-maries,
                exhaust hoods, and tandoor units. The kitchen serves 700+ guests per day while
                maintaining superior food safety and workflow.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0 text-muted">
              Installed: 2023 | Category: 5-Star Hotel
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Zest Bakers – Bengaluru</h5>
              <p className="card-text">
                Sri Krishnaa provided energy-efficient convection ovens, planetary mixers, and dough
                sheeters tailored to the bakery’s production scale. Improved production speed by 30%.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0 text-muted">
              Installed: 2024 | Category: Bakery Setup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
