import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

function Categories({ setCategory }) {
  const [categories, setCategories] = useState([]);

  const apiUrl = 'https://fakestoreapi.com/products/categories';

  // const getCategories = async () => {
  //   try {
  //     let response = await fetch(apiUrl);
  //     let data = await response.json();
  //     setCategories(data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
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
