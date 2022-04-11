import ProductItem from './ProductItem';

const Products = ({ products }) => {
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
