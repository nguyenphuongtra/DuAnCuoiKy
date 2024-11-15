/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/Style.css";
import images from "../assets/images/Iphone13.jpg";
import Shirt from "../assets/images/Iphone14.jpg";
import Watch from "../assets/images/iphonePlus.jpg";
import Phone from "../assets/images/Iphone16.webp";
import Shoes from "../assets/images/Samsung2.webp";
import Samsung1 from "../assets/images/Samsung1.webp"
import Samsung3 from "../assets/images/Samsung3.webp"
import Samsung4 from "../assets/images/Samsung4.webp"
import Maytinh1 from "../assets/images/Maytinh1.webp"
import Maytinh2 from "../assets/images/Maytinh2.webp"
import Maytinh3 from "../assets/images/Maytinh3.webp"
import Maytinh4 from "../assets/images/Maytinh4.webp"
import Maytinh5 from "../assets/images/Maytinh5.webp"
import Maytinh6 from "../assets/images/Maytinh6.webp"
import Maytinh7 from "../assets/images/Maytinh7.webp"
import Maytinh8 from "../assets/images/Maytinh8.webp"
import Banner from './Banner';
import Footer from '../footer/Footer';


const products = [
  { id: 1, name: 'Iphone 13', price: 2500, describe: 'Smart Phone', category: 'Phone', image: images, quantity: 1 },
  { id: 2, name: 'Iphone 14', price: 3200,describe: 'Smart Phone', category: 'Phone', image: Shirt, quantity: 1 },
  { id: 3, name: 'Iphone 12',price: 2000, describe: 'Smart Phone', category: 'Phone', image: Watch, quantity: 1 },
  { id: 4, name: 'Iphone 16',price: 3500, describe: 'Smart Phone', category: 'Phone', image: Phone, quantity: 1 },
  { id: 5, name: 'Samsung Galaxy S24',price: 2299, describe: 'Smart Phone', category: 'Phone', image: Shoes , quantity: 1},
  { id: 6, name: 'Samsung Galaxy S23',price: 1900, describe: 'Smart Phone', category: 'Phone', image: Samsung1 , quantity: 1},
  { id: 7, name: 'Samsung Galaxy S24+',price: 2900, describe: 'Smart Phone', category: 'Phone', image: Samsung3, quantity: 1 },
  { id: 8, name:  'Galaxy Z Flip 5',price: 9999, describe: 'Smart Phone', category: 'Phone', image: Samsung4, quantity: 1 },
];
const laptops = [
  { id: 9, name: 'Màn hình LG UltraGear', price: 2500, describe: 'Smart Phone', category: 'Laptop', image: Maytinh1, quantity: 1 },
  { id: 10, name: 'Màn hình Monitor Xiaomi ', price: 3200,describe: 'Smart Phone', category: 'Laptop', image: Maytinh2, quantity: 1 },
  { id: 11, name: 'Màn hình LG UltraWide',price: 2000, describe: 'Smart Phone', category: 'Laptop', image: Maytinh3, quantity: 1 },
  { id: 12, name: 'Màn hình Samsung Odyssey',price: 3500, describe: 'Smart Phone', category: 'Laptop', image: Maytinh4, quantity: 1 },
  { id: 13, name: 'Màn hình MSI Pro MP245V',price: 2299, describe: 'Smart Phone', category: 'Laptop', image: Maytinh5 , quantity: 1},
  { id: 14, name: 'Màn hình Xiaomi Monitor',price: 1900, describe: 'Smart Phone', category: 'Laptop', image: Maytinh6 , quantity: 1},
  { id: 15, name: 'Màn hình E-Dra ',price: 2900, describe: 'Smart Phone', category: 'Laptop', image: Maytinh7, quantity: 1 },
  { id: 16, name:  'Màn hình Viewsonic ',price: 9999, describe: 'Smart Phone', category: 'Laptop', image: Maytinh8, quantity: 1 },
];
function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [menu, setMenu] = useState(false)


  const toggleMenu = () => {
    setMenu(!menu)
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const Product = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });
  const laptop = laptops.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className='home'>
      <div className="header">
        <marquee> Chào mừng bạn đã đến với Tea Shop</marquee>
      </div>
      <div className="tieude">
        <div className="search">
          <div className="menu">
            <i class="fa-solid fa-bars" id='bars' onClick={toggleMenu}></i>
            <input
              type="text"
              className='input'
              placeholder='Search products'
              value={search}
              onChange={handleSearch}
            />
            <select value={category} onChange={handleCategory}>
              <option value="All">Tất cả</option>
              <option value="Phone">Phone</option>
              <option value="Laptop">Laptop</option>
              <option value="Smart watch">Smart Watch</option>
            </select>

            <div className="menu-home">
              <h5><Link to="/" className='link-bars'>Trang chủ</Link></h5>
              <h5><Link to="/products" className='link-bars'>Sản Phẩm</Link></h5>
              <h5><Link to="/introduce" className='link-bars'>Giới thiệu</Link></h5>
              <h5><Link to="/contact" className='link-bars'>Liên hệ</Link></h5>
            </div>
            <div className="login-home">
              <Link to={"/login"}><button className='btn-login' > Đăng nhập</button></Link>
              <button className='btn-user'><i class="fa-solid fa-user"></i></button>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        {menu && (
          <div className="side-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
     <Banner/>
      <h2>Laptop</h2>
      <div className="product-list">
        {laptop.length > 0 ? (
          laptop.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`} className='product-link'>
                <img src={product.image} alt={product.name} className='product-image' />
                <h3>{product.name}</h3>
                <p>{product.describe}</p>
                <div className="pay">
                  <div className="icon-star" style={{color:'#ffc107'}}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i> 
                    <i class="fa-solid fa-star"></i> 
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <h5>${product.price}</h5>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <h2 >Phone</h2>
      <div className="product-list">
        {Product.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`} className='product-link'>
                <img src={product.image} alt={product.name} className='product-image' />
                <h3>{product.name}</h3>
                <p>{product.describe}</p>
                <div className="pay">
                  <div className="icon-star" style={{color:'#ffc107'}}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i> 
                    <i class="fa-solid fa-star"></i> 
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <h5>${product.price}</h5>
                </div>
              </Link>
            </div>
          ))
         }
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
