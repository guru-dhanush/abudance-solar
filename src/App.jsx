// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import Home from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
import ProductCatalog from './components/products/ProductCatalog';
import DownloadCenter from './components/downloads/DownloadCenter';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:model" element={<ProductDetailPage />} />
        <Route path="/downloads" element={<DownloadCenter />} />
      </Routes>
    </Router>
  );
};

export default App;