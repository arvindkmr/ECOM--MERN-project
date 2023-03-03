import { useEffect } from 'react';
import './App.css';
import Header from './component/layout/Header/Header.js';
import Footer from './component/layout/Footer/Footer.js';
import WebFont from 'webfontloader';
import Home from './component/Home/Home.js';
import ProductDetails from './component/Product/ProductDetails.js';
import Products from './component/Product/Products.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={Products} />
        <Route exact path="/products/:keyword" element={Products} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
