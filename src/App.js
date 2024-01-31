import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import "./components/navbar.css";
import { Shop } from "./Pages/shop/shop";
import { Cart } from "./Pages/cart/cart";
import { ShopcontextProvider } from "./context/shopcontext";
import { Login } from "./Pages/Tologin/Login";

function App() {
  return (
    <div className="App">
      <ShopcontextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopcontextProvider>
    </div>
  );
}

export default App;
