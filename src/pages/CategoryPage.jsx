import React from "react";
import { useParams } from "react-router-dom";
import categories from "../data/categories";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) return <h2>Category not found</h2>;

  return (
    <div className="container py-5">
      <h1 className="mb-3">{category.title}</h1>
      <p>{category.details}</p>
      <div className="row mt-4">
        {category.images.map((img, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <img
              src={img}
              className="img-fluid rounded shadow"
              alt={`image-${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
