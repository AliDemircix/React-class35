import './App.css';
import { useState } from 'react';
import Categories from './components/Categories';
import Nav from './components/Nav';
import Products from './components/Products';
import categories from './fake-data/all-categories';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function onToggle(category) {
    setSelectedCategory(category);
  }

  return (
    <>
      <Nav title={selectedCategory} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onToggle={onToggle}
      />
      <Products selectedCategory={selectedCategory} />
    </>
  );
}

export default App;
