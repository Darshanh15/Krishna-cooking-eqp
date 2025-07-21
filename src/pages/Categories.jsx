import React from "react";
import categories from "../data/categories";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Our Product Categories</h1>
      <div className="row">
        {categories.map((cat) => (
          <div className="col-md-4 mb-4" key={cat.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={cat.images[0]}
                className="card-img-top"
                alt={cat.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{cat.title}</h5>
                <p className="card-text">{cat.description}</p>
                <Link to={`/category/${cat.slug}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
