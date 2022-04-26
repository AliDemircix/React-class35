import React, { useEffect, useState } from 'react';
import Product from './Product';

function Products({ selectedCategory }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const apiUrl = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : 'https://fakestoreapi.com/products/';

  const getProducts = async () => {
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [apiUrl]);

  return isLoading ? (
    <div className="products-container">
      <h3>Loading...</h3>
    </div>
  ) : (
    <div className="products-container">
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            image={product.image}
            title={product.title}
            id={product.id}
          />
        );
      })}
    </div>
  );
}

export default Products;
