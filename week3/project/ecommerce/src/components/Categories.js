import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

function Categories({ setCategory }) {
  const [categories, setCategories] = useState([]);

  const apiUrl = 'https://fakestoreapi.com/products/categories';

  const { isLoading, performFetch } = useFetch(apiUrl, setCategories);
  useEffect(() => {
    performFetch();
  }, []);

  return isLoading ? (
    <div className="category">
      <h3>Loading...</h3>
    </div>
  ) : (
    <>
      <ul className="category">
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                setCategory(e.currentTarget.innerText);
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Categories;
