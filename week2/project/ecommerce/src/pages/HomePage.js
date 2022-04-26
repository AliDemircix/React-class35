import React, { useState } from 'react';
import '../index.css';
import Categories from '../components/Categories';
import Products from '../components/Products';

function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <div className="App">
      <Categories setCategory={setSelectedCategory} />
      <h1>Products</h1>
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default MainPage;
