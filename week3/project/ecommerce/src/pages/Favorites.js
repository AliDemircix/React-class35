import { useContext, useEffect, useState } from 'react';

import Title from '../components/Title';
import FavoriteContext from '../contexts/FavoriteContext';
import FavoritedProducts from '../components/FavoritedProducts';

function Favorites() {
  const [title, setTitle] = useState('Favorites');

  const { favorites } = useContext(FavoriteContext);

  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetches = favorites.map((id) =>
      fetch(`https://fakestoreapi.com/products/${id}`),
    );

    setError(false);

    Promise.all(fetches)
      .then((results) => {
        return Promise.all(results.map((result) => result.json()));
      })
      .then((resultProducts) => {
        setProducts(resultProducts);
      })
      .finally(() => {
        setLoading(false);
        setTitle('Favorite Products');
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, [favorites]);

  if (error) {
    return 'Something went wrong finding the product. Please try again!';
  } else if (isLoading) {
    return 'Loading...';
  } else if (products === null || products.length === 0) {
    return (
      <>
        <Title title={title} />
        <p>"You haven't chosen any favorites yet!"</p>
      </>
    );
  }

  return (
    <>
      <Title title={title} />
      <FavoritedProducts products={products} />
    </>
  );
}

export default Favorites;
