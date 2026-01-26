import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/product";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
         <Navbar />
         <Routes>
          <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                                        <Route path="/contact" element={<Contact />}/>
                                        <Route path="/product" element={<Product />}/>


         </Routes>
    </div>
  );
};

export default App;
