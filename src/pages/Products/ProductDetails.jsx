// import React from "react";
// import { useParams } from "react-router-dom";
// import products from "../../data/products";

// import "./ProductDetails.scss";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) return <h2 className="text-center">Product not found</h2>;

//   return (
//     <section className="gallery-container py-5">
//       <div className="container text-center">
//         <h1 className="display-5 fw-bold text-warning mb-2">{product.title}</h1>
//         <p className="text-muted mb-5">{product.description}</p>
//         <div className="product-image">
//           {product.images.map((src, i) => (
//             <div className="col-6 col-md-4 col-lg-3" key={i}>
//               <img
//                 src={src}
//                 alt={`img${i}`}
//                 className="img-fluid rounded shadow"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetails;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";

import "./ProductDetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [showModal, setShowModal] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!product) return <h2 className="text-center">Product not found</h2>;

  const handleImageClick = (index) => {
    setCurrentImgIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const showPrev = () => {
    setCurrentImgIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentImgIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="gallery-container py-5">
      <div className="container text-center">
        <h1 className="display-5 fw-bold text-warning mb-2">
          {product.title}
        </h1>
        <p className="text-muted mb-5">{product.description}</p>
        <div className="product-image">
          {product.images.map((src, i) => (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={i}
              onClick={() => handleImageClick(i)}
            >
              <img
                src={src}
                alt={`img${i}`}
                className="img-fluid rounded shadow"
              />
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="image-modal" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
          <button className="nav-btn prev" onClick={(e) => { e.stopPropagation(); showPrev(); }}>
            ⬅
          </button>
          <img
            src={product.images[currentImgIndex]}
            alt="popup"
            className="popup-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="nav-btn next" onClick={(e) => { e.stopPropagation(); showNext(); }}>
            ➡
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
