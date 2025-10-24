import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Report from "./pages/Report";
import About from "./pages/About";
import Footer from './components/Footer'
import BuyNow from "./pages/BuyNow";
import Limited from "./pages/Limited";
import Premium from "./pages/Premium";
import Retro from "./pages/Retro";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/report" element={<Report />} />
          <Route path='/about' element={<About />} />
          <Route path="/" element={<Products />} />
          <Route path="/products/limited" element={<Limited />} />
          <Route path="/products/premium" element={<Premium />} />
          <Route path="/products/retro" element={<Retro />} />
          <Route path="/buy/:carName" element={<BuyNow />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
