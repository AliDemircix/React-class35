import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

function AppPages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default AppPages;
