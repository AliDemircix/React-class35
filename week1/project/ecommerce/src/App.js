import './App.css';
import { useState } from 'react';
import Categories from './components/Categories';
import Nav from './components/Nav';
import Products from './components/Products';
import categories from './fake-data/all-categories';
import dataProducts from './fake-data/all-products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(dataProducts);

  function onToggle(category) {
    setSelectedCategory(category);

    const filteredItems = dataProducts.filter((product) => {
      return product.category === category.substring(6);
    });

    setProducts(filteredItems);
  }

  return (
    <>
      <Nav title={selectedCategory} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onToggle={onToggle}
      />
      <Products products={products} />
    </>
  );
}

export default App;
