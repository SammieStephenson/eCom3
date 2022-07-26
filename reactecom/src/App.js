import React from "react";
import Home from "./src/Home";
import Jewelry from "./src/products";
import Contact from "./src/Contact";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "./products.css";
import "./contact.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Jewelry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;