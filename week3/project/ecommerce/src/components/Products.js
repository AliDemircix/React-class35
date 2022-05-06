import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Product from './Product';

function Products({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  const apiUrl = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : 'https://fakestoreapi.com/products/';

  const { isLoading, performFetch } = useFetch(apiUrl, setProducts);

  useEffect(() => {
    performFetch();
  }, [apiUrl]);

  return isLoading ? (
    <div className="products-container">
      <h3>Loading...</h3>
    </div>
  ) : (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
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
