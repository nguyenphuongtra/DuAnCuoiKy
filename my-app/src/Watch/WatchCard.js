import React from 'react'
import '../assets/Style.css'
import { Link } from 'react-router-dom'

import Watch1 from '../Watch/images/Watch1.webp'
import Watch2 from '../Watch/images/Watch2.webp'
import Watch3 from '../Watch/images/Watch3.webp'
import Watch4 from '../Watch/images/Watch4.webp'
import Watch5 from '../Watch/images/Watch5.webp'
import Watch6 from '../Watch/images/Watch6.webp'
import Watch7 from '../Watch/images/Watch7.webp'
import Watch8 from '../Watch/images/Watch8.webp'
const WatchCard1 = [
  { id: 25, name: 'Đồng hồ Huawei Watch GT 5', price: 2500, originalPrice: 3000, describe: 'Smart Watch', category: 'Smart Watch', image: Watch1, quantity: 1 , sale:'14%'},
  { id: 26, name: 'Đồng hồ Huawei Watch D2', price: 3200, originalPrice: 4000, describe: 'Smart Watch', category: 'Smart Watch', image: Watch2, quantity: 1 , sale:'14%'},
  { id: 27, name: 'Apple Watch SE 2 ', price: 2000, originalPrice: 2500, describe: 'Smart Watch', category: 'Smart Watch', image: Watch3, quantity: 1, sale:'14%' },
  { id: 28, name: 'Màn hình Samsung Odyssey', price: 3500, originalPrice: 4500, describe: 'Smart Phone', category: 'Laptop', image: Watch4, quantity: 1, sale:'14%' },
  { id: 29, name: 'Màn hình MSI Pro MP245V', price: 2299, originalPrice: 2800, describe: 'Smart Phone', category: 'Laptop', image: Watch5, quantity: 1, sale:'14%' },
  { id: 30, name: 'Màn hình Xiaomi Monitor', price: 1900, originalPrice: 2400, describe: 'Smart Phone', category: 'Laptop', image: Watch6, quantity: 1, sale:'14%' },
  { id: 31, name: 'Màn hình E-Dra', price: 2900, originalPrice: 3400, describe: 'Smart Phone', category: 'Laptop', image: Watch7, quantity: 1, sale:'14%' },
  { id: 32, name: 'Màn hình Viewsonic', price: 9999, originalPrice: 12000, describe: 'Smart Phone', category: 'Laptop', image: Watch8, quantity: 1, sale:'14%' },
];

function WatchCard() {
return (
  <div>
    <div className="product-list">
        {WatchCard1.length > 0 ? (
          WatchCard1.map((product) => (
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
        ) : (
          <p>No products found.</p>
        )}
      </div>
  </div>
);
}

export default WatchCard