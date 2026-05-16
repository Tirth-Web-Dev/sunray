import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import your Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import your Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

// Helper: Auto-scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Navbar stays outside Routes so it's visible on every page */}
      <Navbar /> 
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Redirect - Optional */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;