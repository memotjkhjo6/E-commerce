import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./assets/Navbar";
import Clider from "./assets/Clider";
import ProductList from "./assets/ProductsList";
import About from "./assets/About";
import Contact from "./assets/Contact";
import ProductDetails from "./assets/ProductDetails";
import "./App.css"
import React from "react";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Clider />
            <ProductList />
          </>
        }>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
export default App;
