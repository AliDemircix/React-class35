import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetailPage() {
  const [isloading, setIsLoading] = useState(true);
  const { id } = useParams();
  const URL = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState({});
  const getDetails = async () => {
    try {
      let response = await fetch(URL);
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
  return isloading ? (
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
