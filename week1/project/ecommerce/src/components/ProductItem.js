const ProductItem = ({ img, title }) => {
  return (
    <div className="product-item-wrapper">
      <img className="product-img" src={img} alt={title} />
      <p className="product-title">{title}</p>
    </div>
  );
};

export default ProductItem;
