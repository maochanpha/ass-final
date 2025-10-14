import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Report from "./pages/Report";
import About from "./pages/About";
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/report" element={<Report />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <div>

      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
