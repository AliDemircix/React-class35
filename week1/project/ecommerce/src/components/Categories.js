const Categories = ({ categories, selectedCategory, onToggle }) => {
  return (
    <ul className="category-wrapper">
      {categories.map((category, index) => (
        <li
          className={`category-item ${
            selectedCategory === category && 'category-item-selected'
          }`}
          key={index}
          onClick={() => onToggle(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
