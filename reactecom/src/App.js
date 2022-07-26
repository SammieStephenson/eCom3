import Navbar from "./Navbar";
import Home from ".src/pages/home.js/Home";
import Jewelry from ".src/pages/products.js/Jewelry";
import Contact from ".src/pages/contact.js/Contact";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Jewelry />} />
        </Routes>
      </div>
    </>
  );
}

export default App;