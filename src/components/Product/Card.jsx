// src/components/Product/Card.jsx
import React from "react";
import products from "../../data/products";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="product-page">
        <h1>Our Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <h5>{product.title}</h5>
                <p>{product.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
