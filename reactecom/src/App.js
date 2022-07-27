import Navbar from "./Navbar"
import Home from "./Page/home"
import Jewelry from "./Page/jewelry"
import Contact from "./Page/contact"
import { Route, Routes } from "react-router-dom"
import Footer from "./Page/Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jewelry" element={<Jewelry />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;