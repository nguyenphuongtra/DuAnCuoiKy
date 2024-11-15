import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css';
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Introduce from "./About/Introduce";
import Contact from "./About/Contact";
import Footer from "./footer/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const Product = cartItems.findIndex((item) => item.id === product.id);
    if (Product >= 0) {
      setCartItems((prev) => 
        prev.map((item, index) => 
          index === Product 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (index, newQuantity) => {
    setCartItems((prev) => 
      prev.map((item, i) => 
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const deleteProduct = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cartItems.reduce((result, prod) => result + prod.price * prod.quantity, 0);
  const quantity = cartItems.reduce((result, prod) => result + prod.quantity, 0);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home cartItems={cartItems} />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems} 
                updateQuantity={updateQuantity} 
                deleteProduct={deleteProduct} 
                total={total} 
                quantity={quantity} 
              />
            } 
          />
          <Route path="/checkout" element={<Checkout total={total} quantity={quantity} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
