import React from 'react';
import { useNavigate } from 'react-router-dom';

function Product({ image, title, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="product-item"
      onClick={() => {
        navigate(`/products/${id}`);
      }}
    >
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Product;
