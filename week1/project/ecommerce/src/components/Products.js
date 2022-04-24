import ProductItem from './ProductItem';
import dataProducts from '../fake-data/all-products';

const Products = ({ selectedCategory }) => {
  let products;
  if (selectedCategory === null) {
    products = dataProducts;
  } else {
    products = dataProducts.filter(
      (product) => product.category === selectedCategory.slice(6),
    );
  }

  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          img={product.image}
          title={product.title}
        />
      ))}
    </div>
  );
};
export default Products;
