import React, { useState } from 'react';
import '../App.css';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Nav from '../components/Nav';

function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="App">
      <Categories setCategory={setSelectedCategory} />
      <Nav></Nav>
      <h1>Products</h1>
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default MainPage;
