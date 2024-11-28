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
import Tainghe1 from "../Product/images/Tainghe1.webp"
import Tainghe2 from "../Product/images/Tainghe2.webp"
import Tainghe3 from "../Product/images/Tainghe3.webp"
import Tainghe4 from "../Product/images/Tainghe4.webp"
import Tainghe5 from "../Product/images/Tainghe5.webp"
import Tainghe6 from "../Product/images/Tainghe6.webp"
import Tainghe7 from "../Product/images/Tainghe7.webp"
import Tainghe8 from "../Product/images/Tainghe8.webp"
import Watch1 from '../Watch/images/Watch1.webp'
import Watch2 from '../Watch/images/Watch2.webp'
import Watch3 from '../Watch/images/Watch3.webp'
import Watch4 from '../Watch/images/Watch4.webp'
import Watch5 from '../Watch/images/Watch5.webp'
import Watch6 from '../Watch/images/Watch6.webp'
import Watch7 from '../Watch/images/Watch7.webp'
import Watch8 from '../Watch/images/Watch8.webp'
import Ipad1 from "../Ipad/images/Ipad1.webp"
import Ipad2 from "../Ipad/images/Ipad1.webp"
import Ipad3 from "../Ipad/images/Ipad1.webp"
import Ipad4 from "../Ipad/images/Ipad1.webp"
import Ipad5 from"../Ipad/images/Ipad1.webp"
import Ipad6 from "../Ipad/images/Ipad1.webp"
import Ipad7 from "../Ipad/images/Ipad1.webp"
import Ipad8 from "../Ipad/images/Ipad1.webp"
import Laptop1 from "../Laptop/images/Laptop1.webp"
import Laptop2 from "../Laptop/images/Laptop1.webp"
import Laptop3 from "../Laptop/images/Laptop1.webp"
import Laptop4 from "../Laptop/images/Laptop1.webp"
import Laptop5 from "../Laptop/images/Laptop1.webp"
import Laptop6 from "../Laptop/images/Laptop1.webp"
import Laptop7 from "../Laptop/images/Laptop1.webp"
import Laptop8 from "../Laptop/images/Laptop1.webp"
import Mouse1 from "../Mouse/images/chuot1.jpg"
import Mouse2 from "../Mouse/images/chuot2.jpg"
import Mouse3 from "../Mouse/images/chuot3.jpeg"
import Mouse4 from "../Mouse/images/chuot4.jpg"
import Mouse5 from "../Mouse/images/chuot5.jpg"
import Mouse6 from "../Mouse/images/chuot6.jpg"
import Mouse7 from "../Mouse/images/chuot7.jpg"
import Mouse8 from "../Mouse/images/chuot8.jpg"
import KeyBoard1 from "../KeyBoard/images/bp1.jpeg"
import KeyBoard2 from "../KeyBoard/images/bp2.jpeg"
import KeyBoard3 from "../KeyBoard/images/bp3.jpeg"
import KeyBoard4 from "../KeyBoard/images/bp4.jpg"
import KeyBoard5 from "../KeyBoard/images/bp5.jpg"
import KeyBoard6 from "../KeyBoard/images/bp6.jpg"
import KeyBoard7 from "../KeyBoard/images/bp7.jpg"
import KeyBoard8 from "../KeyBoard/images/bp8.jpg"

import Footer from '../footer/Footer';



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
  { id: 9, name: 'Màn hình LG UltraGear', price: 2500, describe: 'Smart Phone', category: 'Manhinh', image: Maytinh1, quantity: 1 , sale:'14%'},
  { id: 10, name: 'Màn hình Monitor Xiaomi ', price: 3200,describe: 'Smart Phone', category: 'Manhinh', image: Maytinh2, quantity: 1, sale:'15%' },
  { id: 11, name: 'Màn hình LG UltraWide',price: 2000, describe: 'Smart Phone', category: 'Manhinh', image: Maytinh3, quantity: 1 , sale:'19%'},
  { id: 12, name: 'Màn hình Samsung Odyssey',price: 3500, describe: 'Smart Phone', category: 'Manhinh', image: Maytinh4, quantity: 1 , sale:'10%'},
  { id: 13, name: 'Màn hình MSI Pro MP245V',price: 2299, describe: 'Smart Phone', category: 'Manhinh', image: Maytinh5 , quantity: 1, sale:'16%'},
  { id: 14, name: 'Màn hình Xiaomi Monitor',price: 1900, describe: 'Smart Phone', category: 'Manhinh', image: Maytinh6 , quantity: 1, sale:'15%'},
  { id: 15, name: 'Màn hình E-Dra ',price: 2900, describe: 'Smart Phone', category: 'Manhinh', image: Maytinh7, quantity: 1 , sale:'14%'},
  { id: 16, name:  'Màn hình Viewsonic ',price: 9999, describe: 'Smart Phone', category: 'Manhinh', image: Maytinh8, quantity: 1 , sale:'14%'},
];
const HeadPhone = [
  { id: 17, name: 'Wireless HUAWEI FreeClip', price: 2500, describe: 'Tai nghe Bluetooth', category: 'Headphone', image: Tainghe1, quantity: 1 , sale:'14%'},
  { id: 18, name: 'Wireless Baseus Bowie E11', price: 3200,describe: 'Tai nghe Bluetooth', category: 'Headphone', image: Tainghe2, quantity: 1 , sale:'14%'},
  { id: 19, name: 'Wireless Buds2 Pro',price: 2000, describe: 'Tai nghe Bluetooth', category: 'Headphone', image: Tainghe3, quantity: 1, sale:'14%' },
  { id: 20, name: 'tai Sony WH-1000XM5',price: 3500, describe: 'Tai nghe Bluetooth', category: 'Headphone', image: Tainghe4, quantity: 1, sale:'14%' },
  { id: 21, name: 'TAirPods 4 chống ồn',price: 2299, describe: 'Tai nghe Bluetooth', category: 'Headphone', image:  Tainghe5, quantity: 1, sale:'14%'},
  { id: 22, name: 'Wireless Anker Soundcore R50i ',price: 1900, describe: 'Tai nghe Bluetooth', category: 'Headphone', image:  Tainghe6, quantity: 1, sale:'14%'},
  { id: 23, name: 'TAirPods Pro 2 2023 USB-C ',price: 2900, describe: 'Tai nghe Bluetooth', category: 'Headphone', image: Tainghe7, quantity: 1, sale:'14%' },
  { id: 24, name: 'Wireless Baseus Bowie E11',price: 9999, describe: 'Tai nghe Bluetooth', category: 'Headphone', image: Tainghe8, quantity: 1, sale:'14%' },
];
const WatchCard1 = [
  { id: 25, name: 'Đồng hồ Huawei Watch GT 5', price: 2500,  describe: 'Smart Watch', category: 'Watch', image: Watch1, quantity: 1 , sale:'14%'},
  { id: 26, name: 'Đồng hồ Huawei Watch D2', price: 3200,  describe: 'Smart Watch', category: 'Watch', image: Watch2, quantity: 1 , sale:'14%'},
  { id: 27, name: 'Apple Watch SE 2 ', price: 2000,  describe: 'Smart Watch', category: 'Watch', image: Watch3, quantity: 1, sale:'14%' },
  { id: 28, name: 'Màn hình Samsung Odyssey', price: 3500,  describe: 'Smart Watch', category: 'Watch', image: Watch4, quantity: 1, sale:'14%' },
  { id: 29, name: 'Màn hình MSI Pro MP245V', price: 2299,  describe: 'Smart Watch', category: 'Watch', image: Watch5, quantity: 1, sale:'14%' },
  { id: 30, name: 'Màn hình Xiaomi Monitor', price: 1900, describe: 'Smart Watch', category: 'Watch', image: Watch6, quantity: 1, sale:'14%' },
  { id: 31, name: 'Màn hình E-Dra', price: 2900,  describe: 'Smart Watch', category: 'Watch', image: Watch7, quantity: 1, sale:'14%' },
  { id: 32, name: 'Màn hình Viewsonic', price: 9999,  describe: 'Smart Watch', category: 'Watch', image: Watch8, quantity: 1, sale:'14%' },
];
const Ipad = [
  { id: 49, name: 'iPad Gen 10 10.9 ', price: 2500, originalPrice: 3000, describe: 'Ipad', category: 'Ipad', image: Ipad1, quantity: 1,sale: '50%' },
  { id: 50, name: 'iPad mini 7 2024 ', price: 3200, originalPrice: 4000, describe: 'Ipad', category: 'Ipad', image: Ipad2, quantity: 1 ,sale: '40%'},
  { id: 51, name: 'iPad Air 6 M2 11 ', price: 2000, originalPrice: 2500, describe: 'Ipad', category: 'Ipad', image: Ipad3, quantity: 1 ,sale: '25%'},
  { id: 52, name: 'iPad mini 6 WiFi ', price: 3500, originalPrice: 4500, describe: 'Ipad', category: 'Ipad', image: Ipad4, quantity: 1 ,sale: '50%'},
  { id: 53, name: 'iPad 10.2 2021 WiFi ', price: 2299, originalPrice: 2800, describe: 'Ipad', category: 'Ipad', image: Ipad5, quantity: 1 ,sale: '15%'},
  { id: 54, name: 'iPad Pro M4 11 inch Wifi ', price: 1900, originalPrice: 2400, describe: 'Ipad', category: 'Ipad', image: Ipad6, quantity: 1 ,sale: '20%'},
  { id: 55, name: 'iPad Gen 10 10.9 inch 2022', price: 2900, originalPrice: 3400, describe: 'Ipad', category: 'Ipad', image: Ipad7, quantity: 1 ,sale: '50%'},
  { id: 56, name: 'iPad Air 6 M2 11 inch Wifi ', price: 9999, originalPrice: 12000, describe: 'Ipad', category: 'Ipad', image: Ipad8, quantity: 1 ,sale: '50%'},
];
const Laptop = [
  { id: 41, name: 'Laptop ASUS VivobookW', price: 2500, describe: 'Laptop', category: 'Laptop', image: Laptop1, quantity: 1,sale: '20%' },
  { id: 42, name: 'Laptop ASUS Gaming VivoBook ', price: 3200,describe: 'Laptop', category: 'Laptop', image: Laptop2, quantity: 1,sale: '20%' },
  { id: 43, name: 'Laptop ASUS TUF Gaming ',price: 2000, describe: 'Laptop', category: 'Laptop', image: Laptop3, quantity: 1,sale: '20%' },
  { id: 44, name: 'Laptop ASUS VivoBook Go ',price: 3500, describe: 'Laptop', category: 'Laptop', image: Laptop4, quantity: 1 , sale:'50%'},
  { id: 45, name: 'Laptop ASUS Gaming',price: 2299, describe: 'Laptop', category: 'Laptop', image:  Laptop5, quantity: 1, sale:'50%'},
  { id: 46, name: 'Laptop ASUS Zenbook',price: 1900, describe: 'Laptop', category: 'Laptop', image: Laptop6, quantity: 1, sale:'50%'},
  { id: 47, name: 'Laptop ASUS Vivobook',price: 2900, describe: 'Laptop', category: 'Laptop', image: Laptop7, quantity: 1 , sale:'50%'},
  { id: 48, name: 'Laptop ASUS TUF Gaming A15 ',price: 9999, describe: 'Laptop', category: 'Laptop', image: Laptop8, quantity: 1 , sale:'50%'},
];
const Mouse = [
  { id: 60, name: 'Chuột Có dây Silent Rapoo ', price: 2500, originalPrice: 3000, describe: 'Mouse', category: 'Mouse', image: Mouse1, quantity: 1 },
  { id: 61, name: 'Chuột DareU LM106G', price: 3200, originalPrice: 4000, describe: 'Mouse', category: 'Mouse', image: Mouse2, quantity: 1 },
  { id: 62, name: 'Chuột Logitech M170', price: 2000, originalPrice: 2500, describe: 'Mouse', category: 'Mouse', image: Mouse3, quantity: 1 },
  { id: 63, name: 'Chuột Silent Logitech M240', price: 3500, originalPrice: 4500, describe: 'Mouse', category: 'Mouse', image: Mouse4, quantity: 1 },
  { id: 64, name: 'Chuột Zadez M213', price: 2299, originalPrice: 2800, describe: 'Mouse', category: 'Mouse', image: Mouse5, quantity: 1 },
  { id: 65, name: 'Chuột Logitech M185', price: 1900, originalPrice: 2400, describe: 'Mouse', category: 'Mouse', image: Mouse6, quantity: 1 },
  { id: 66, name: 'Chuột Logitech G102 Lightsync', price: 2900, originalPrice: 3400, describe: 'Mouse', category: 'Mouse', image: Mouse7, quantity: 1 },
  { id: 67, name: 'Chuột Gaming Rapoo V11s', price: 9999, originalPrice: 12000, describe: 'Mouse', category: 'Mouse', image: Mouse8, quantity: 1 },
];
const KeyBoard = [
  { id: 72, name: 'Bàn Phím Rapoo V500alloy', price: 2500, describe: 'KeyBoard', category: 'KeyBoard', image: KeyBoard1, quantity: 1 },
  { id: 73, name: 'Bàn Phím Tournament Edition', price: 3200,describe: 'KeyBoard', category: 'KeyBoard', image: KeyBoard2, quantity: 1 },
  { id: 74, name: 'Bàn Phím Asus TUF K1',price: 2000, describe: 'KeyBoard', category: 'KeyBoard', image: KeyBoard3, quantity: 1 },
  { id: 75, name: 'Bàn Phím Rapoo V50S',price: 3500, describe: 'KeyBoard', category: 'KeyBoard', image: KeyBoard4, quantity: 1 },
  { id: 76, name: 'Bàn Phím Zadez G-850K',price: 2299, describe: 'KeyBoard', category: 'KeyBoard', image:  KeyBoard5, quantity: 1},
  { id: 77, name: 'Bàn phím Asus DELUXE RD SW',price: 1900, describe: 'KeyBoard', category: 'KeyBoard', image: KeyBoard6, quantity: 1},
  { id: 78, name: 'Bàn Phím V500 Pro Rainbow',price: 2900, describe: 'KeyBoard', category: 'KeyBoard', image: KeyBoard7, quantity: 1 },
  { id: 79, name: 'Bàn Phím K55 CORE RGB',price: 9999, describe: 'KeyBoard', category: 'KeyBoard', image: KeyBoard8, quantity: 1 },
];

function Products() {
  const [search, setSearch] = useState('');
  const [menu, setMenu] = useState(false)
  const [category, setCategory] = useState('All')

  const toggleMenu = () => {
    setMenu(!menu)
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  }

  const Product = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });
  const laptop = laptops.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory ;
  }); 
  const headphones = HeadPhone.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory ;
  }); 
  const watchs = WatchCard1.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory ;
  }); 
  const ipad = Ipad.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory ;
  });

  const laptop1 = Laptop.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory ;
  });
  const mouses = Mouse.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory ;
  });
  const keyboads = KeyBoard.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory ;
  });
  return (
    <div className='home'>
      <div className="header">
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
      <div className="product-all">
        <button onClick={() => handleCategory({ target: { value: 'All' } })}>Tất cả sản phẩm</button>
        <button onClick={() => handleCategory({ target: { value: 'Phone' } })}>Điện thoại</button>
        <button onClick={() => handleCategory({ target: { value: 'Manhinh' } })}>Màn hình</button>
        <button onClick={() => handleCategory({ target: { value: 'Headphone' } })}>Tai nghe</button>
        <button onClick={() => handleCategory({ target: { value: 'Watch' } })}>Đồng hồ</button>
        <button onClick={() => handleCategory({ target: { value: 'Ipad' } })}>Ipad</button>
        <button onClick={() => handleCategory({ target: { value: 'Laptop' } })}>Laptop</button>
        <button onClick={() => handleCategory({ target: { value: 'Mouse' } })}>Chuột máy tính</button>
        <button onClick={() => handleCategory({ target: { value: 'KeyBoard' } })}>Bàn phím</button>
      </div>

      
      <div className="product-list">
        {
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
                  <h4 className="current-price">{product.price} $</h4>
                  <h5 className="original-price">{product.price} $</h5>
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
       }
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
      <div className="product-list">
        {
          headphones.map((product) => (
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
        }
      </div>
      <div className="product-list">
        {
          watchs.map((product) => (
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
        }
      </div>
      <div className="product-list">
        {
          ipad.map((product) => (
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
        }
      </div>
      <div className="product-list">
        {
          laptop1.map((product) => (
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
        }
      </div>
      <div className="product-list">
        {mouses.map((product) => (
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
      <div className="product-list">
        {keyboads.map((product) => (
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
      <hr />
      <Footer/>
    </div>
  )
}

export default Products
