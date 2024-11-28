/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/Style.css";
import images from "../assets/images/Iphone13.jpg";
import Shirt from "../assets/images/Iphone14.jpg";
import Watch from "../assets/images/iphonePlus.jpg";
import Top from "../assets/images/top_banner.jpg";
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
import banner4 from "../assets/images/banner4.png"
import banner5 from "../assets/images/banner5.png"
import banner6 from "../assets/images/banner6.png"

import Banner from './Banner';
import Footer from '../footer/Footer';
import ProductCard from '../Product/ProductCard';
import WatchCard from '../Watch/WatchCard';
import HotSale from './HotSale';
import Ipad from "../Ipad/Ipad";
import Laptop from "../Laptop/Laptop";
import NewsSection from '../TinCN/NewsSection';
import MouseCard from '../Mouse/MouseCard';
import KeyBoardCard from '../KeyBoard/KeyBoardCard'


const products = [
  { id: 1, name: 'Iphone 13', price:999, describe: 'Smart Phone', category: 'Phone', image: images, quantity: 1, sale:'14%' },
  { id: 2, name: 'Iphone 14', price:1300,describe: 'Smart Phone', category: 'Phone', image: Shirt, quantity: 1, sale:'15%' },
  { id: 3, name: 'Iphone 12',price: 888, describe: 'Smart Phone', category: 'Phone', image: Watch, quantity: 1 , sale:'14%'},
  { id: 4, name: 'Iphone 16',price: 3500, describe: 'Smart Phone', category: 'Phone', image: Phone, quantity: 1, sale:'7%' },
  { id: 5, name: 'Samsung Galaxy S24',price: 2299, describe: 'Smart Phone', category: 'Phone', image: Shoes , quantity: 1, sale:'10%'},
  { id: 6, name: 'Samsung Galaxy S23',price: 1900, describe: 'Smart Phone', category: 'Phone', image: Samsung1 , quantity: 1, sale:'20%'},
  { id: 7, name: 'Samsung Galaxy S24+',price: 2900, describe: 'Smart Phone', category: 'Phone', image: Samsung3, quantity: 1, sale:'19%' },
  { id: 8, name:  'Galaxy Z Flip 5',price: 9999, describe: 'Smart Phone', category: 'Phone', image: Samsung4, quantity: 1, sale:'25%' },
];
const laptops = [
  { id: 9, name: 'Màn hình LG UltraGear', price: 2500, describe: 'Smart Phone', category: 'Laptop', image: Maytinh1, quantity: 1 , sale:'14%'},
  { id: 10, name: 'Màn hình Monitor Xiaomi ', price: 3200,describe: 'Smart Phone', category: 'Laptop', image: Maytinh2, quantity: 1, sale:'15%' },
  { id: 11, name: 'Màn hình LG UltraWide',price: 2000, describe: 'Smart Phone', category: 'Laptop', image: Maytinh3, quantity: 1 , sale:'19%'},
  { id: 12, name: 'Màn hình Samsung Odyssey',price: 3500, describe: 'Smart Phone', category: 'Laptop', image: Maytinh4, quantity: 1 , sale:'10%'},
  { id: 13, name: 'Màn hình MSI Pro MP245V',price: 2299, describe: 'Smart Phone', category: 'Laptop', image: Maytinh5 , quantity: 1, sale:'16%'},
  { id: 14, name: 'Màn hình Xiaomi Monitor',price: 1900, describe: 'Smart Phone', category: 'Laptop', image: Maytinh6 , quantity: 1, sale:'15%'},
  { id: 15, name: 'Màn hình E-Dra ',price: 2900, describe: 'Smart Phone', category: 'Laptop', image: Maytinh7, quantity: 1 , sale:'14%'},
  { id: 16, name:  'Màn hình Viewsonic ',price: 9999, describe: 'Smart Phone', category: 'Laptop', image: Maytinh8, quantity: 1 , sale:'14%'},
];
function Home() {
  const [search, setSearch] = useState('');
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };


  const Product = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    return matchesSearch ;
  });

  const laptop = laptops.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    return matchesSearch ;
  });

  return (
    <div className='home'>
      <div className="header">
        <marquee> Chào mừng bạn đã đến với StartBox</marquee>
      </div>
      <div className="top-header">
        <img src={Top} alt=""  className='Top'/>
      </div>
      <div className="header-container">
        <div className="nav1">
          <div className="header-content">
            <div className="menu">
              <i className="fa-solid fa-bars menu-icon" id="bars" onClick={toggleMenu}></i>
              <span className="brand-name">Startbox</span>
            </div>

            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Bạn cần tìm kiếm sản phẩm gì?"
                value={search}
                onChange={handleSearch}
              />
              <div className="suport">
                <div className="row">
                  <button>
                    <i class="fa-solid fa-phone"></i>
                  </button>
                </div>
                <div className="row">
                  <span>Hỗ trợ khách hàng</span>
                  <span>0988382xxx</span>
                </div>
              </div>

            </div>

            <div className="user-options">
              <Link to='/cart'>
                <button className="btn-user">
                  <span>Giỏ hàng</span>
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </Link>
              <Link to="/login">
                <button className="btn-login">Đăng nhập</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3 navigation">
          <Link to="/" className="col-auto mx-3 text-center nav-link">
            <h5 className="col-auto mx-3 text-center">Trang chủ</h5>
          </Link>
          <Link to="/products" className="col-auto mx-3 text-center nav-link">
            <h5>Sản phẩm</h5>
          </Link>
          <Link to="/introduce" className="col-auto mx-3 text-center nav-link">
            <h5>Chi tiết</h5>
          </Link>
          <Link to="/contact" className="col-auto mx-3 text-center nav-link">
            <h5>Liên hệ</h5>
          </Link>
        </div>
      </div>
      <Banner/>
      <HotSale/>
      <div>
        {menu && (
          <div className="side-menu">
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/products">Sản Phẩm</Link></li>
              <li><Link to="/introduce">Chi tiết</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>
        )}
      </div>
      <div className="product-list">
        {laptop.length > 0 ? (
          laptop.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`} className="product-link">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="discount-badge"><span>{product.sale}</span></div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.describe}</p>
                <div className="product-price-container">
                  <h4 className="current-price">{product.price.toFixed(3)} $</h4>
                  <h5 className="original-price">{product.price.toFixed(3)} $</h5>
                </div>
                <div className="rating-container">
                  <div className="icon-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <span className="review-count">(99)</span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <div className="product-list">
        {Product.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`} className="product-link">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="discount-badge"><span>{product.sale}</span></div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.describe}</p>
                <div className="product-price-container">
                  <h4 className="current-price">{product.price} $</h4>
                  <h5 className="original-price">{product.price} $</h5>
                </div>
                <div className="rating-container">
                  <div className="icon-star" >
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <span className="review-count">(99)</span>
                </div>
              </Link>
          </div>
          ))
         }
      </div>
      <ProductCard/>
      <WatchCard/>
      <Ipad/>
      <Laptop/>
      <KeyBoardCard/>
      <MouseCard/>
      <div className="modern-lifestyle">
        <div className="main-banner">
          <img
            src={banner4} 
            alt=""
            className="banner-image"
            />
        </div>
        <div className="cards">
          <div className="card1">
            <img
              src={banner5}
              alt="Smart cleaning robot solution"
              />
          </div>
          <div className="card1">
            <img
              src={banner6} 
              alt="Automated dishwasher"
              />
          </div>
        </div>
      </div>
      <NewsSection/>
      <hr />
      <Footer/>
    </div>
  );
}

export default Home;
