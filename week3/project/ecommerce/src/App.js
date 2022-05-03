import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { FavoriteContextProvider } from './contexts/FavoriteContext';
import Favorites from './pages/Favorites';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <FavoriteContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </FavoriteContextProvider>
  );
}

export default App;
