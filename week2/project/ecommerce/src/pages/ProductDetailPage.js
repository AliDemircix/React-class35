import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();

  const { id } = useParams();
  const apiUrl = `https://fakestoreapi.com/products/${id}`;

  const getDetails = async () => {
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      setProduct(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetails();
  });

  return isLoading ? (
    <div className="product">
      <h3>Loading...</h3>
    </div>
  ) : (
    <div className="product">
      <Link to="/"> Back</Link>
      <h1 className="product-title">{product.title}</h1>
      <div className="product-wrapper">
        <p className="product-description">{product.description}</p>
        <img className="product-img" src={product.image} alt={product.title} />
      </div>
    </div>
  );
}

export default ProductDetailPage;
