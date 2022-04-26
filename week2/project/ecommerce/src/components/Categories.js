import React, { useEffect, useState } from 'react';

function Categories({ setCategory }) {
  const [isloading, setIsLoading] = useState(true);
  const apiUrl = 'https://fakestoreapi.com/products/categories';
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      setCategories(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return isloading ? (
    <div className="category">
      <h3>Loading...</h3>
    </div>
  ) : (
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
  );
}

export default Categories;
