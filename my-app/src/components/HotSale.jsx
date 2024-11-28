import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import sale1 from '../assets/images/sale1.webp'
import sale2 from '../assets/images/sale2.webp'
import sale3 from '../assets/images/sale3.webp'
import sale4 from '../assets/images/sale4.webp'
import sale5 from '../assets/images/sale5.webp'
import sale6 from '../assets/images/sale6.webp'
import sale7 from '../assets/images/sale7.webp'
import { Link } from 'react-router-dom';

const hotSaleProducts = [
  { id: 34, name: 'Samsung Galaxy Tab S9 FE', price: 1100, describe: 'Smart Phone', image: sale1, sale: '20%' },
  { id: 35, name: 'Máy Tính Bảng Lenovo Tab M9', price: 2100, describe: 'Smart Phone', image: sale2, sale: '25%' },
  { id: 36, name: 'OPPO Reno10 Pro+ 5G 12GB ', price: 1700, describe: 'Smart Phone', image: sale3, sale: '18%' },
  { id: 37, name: 'Samsung Galaxy S23 FE 5G', price: 1700, describe: 'Smart Phone', image: sale4, sale: '18%' },
  { id: 38, name: 'Xiaomi Redmi Pad SE ', price: 1700, describe: 'Smart Phone', image: sale5, sale: '18%' },
  { id: 39, name: 'TECNO SPARK 30C 4GB 128GB', price: 1700, describe: 'Smart Phone', image: sale6, sale: '18%' },
  { id: 40, name: 'Samsung Galaxy A05S 4GB 128GB', price: 1700, describe: 'Smart Phone', image: sale7, sale: '18%' },
];

function HotSaleCarousel() {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="hot-sale-section">
      <div className="hot-sale-header">
        <h2>🔥 HOT SALE CUỐI TUẦN</h2>
        <span>Kết thúc sau: <strong>{formatTime(timeLeft)}</strong></span>
      </div>
      <Slider {...sliderSettings} className="hot-sale-carousel">
        {hotSaleProducts.map((product) => (
          <Link to={`/products/${product.id}`} className="product-link">
            <div className="hot-sale-card" key={product.id}>
                <img src={product.image} alt={product.name} className="hot-sale-image" />
                <h3 className="hot-sale-name">{product.name}</h3>
                <p className="hot-sale-describe">{product.describe}</p>
                <h4 className="hot-sale-price">
                Giá: {product.price}$
                <span className="hot-sale-discount">-{product.sale}</span>
                </h4>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default HotSaleCarousel;
