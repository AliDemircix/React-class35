import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteContext from '../contexts/FavoriteContext';

import heartFilled from '../assets/heart-solid.svg';
import heartEmpty from '../assets/heart-regular.svg';

function Product({ image, title, id }) {
  const { isFavorite, toggleFavorite } = useContext(FavoriteContext);
  const isFav = isFavorite(id);
  const navigate = useNavigate();

  return (
    <div className="product-item">
      <img
        src={image}
        alt={title}
        onClick={() => {
          navigate(`/products/${id}`);
        }}
      />
      <div className="favorites-container">
        <img
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(id);
          }}
          src={isFav ? heartFilled : heartEmpty}
          alt={title}
        />
        <p
          onClick={() => {
            navigate(`/products/${id}`);
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export default Product;
