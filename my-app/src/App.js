import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css';
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./Login/Login";
import Introduce from "./About/Introduce";
import Contact from "./About/Contact";
import Footer from "./footer/Footer";
import Address from "./components/Address";
import ProductCard from "./Product/ProductCard";
import WatchCard from "./Watch/WatchCard";
import Products from "./components/Products";
import SignUp from "./Login/Signup";
import Ipad from "./Ipad/Ipad";
import Laptop from "./Laptop/Laptop";
import AdminPage from './admin/AdminPage';
import UserManagement from './admin/UserManagement';
import MouseCard from "./Mouse/MouseCard";
import KeyBoardCard from "./KeyBoard/KeyBoardCard";




function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const Product = cartItems.findIndex((item) => item.id === product.id);
    if (Product >= 0) {
      setCartItems((prev) => 
        prev.map((item, index) => 
          index === Product ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }else {
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/address" element={<Address />} />
          <Route path="/headphone" element={<ProductCard />} />
          <Route path="/watch" element={<WatchCard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tainghe" element={<ProductCard />} />
          <Route path="/Watch" element={<WatchCard />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/laptops" element={<Laptop />} />
          <Route path="/mouse" element={<MouseCard />} />
          <Route path="/keyboard" element={<KeyBoardCard />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/usermanagement" element={<UserManagement />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
