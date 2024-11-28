import React from 'react'
import { Link } from 'react-router-dom'

import Ipad1 from "./images/Ipad1.webp"
import Ipad2 from "./images/Ipad2.webp"
import Ipad3 from "./images/Ipad3.webp"
import Ipad4 from "./images/Ipad4.webp"
import Ipad5 from "./images/Ipad5.webp"
import Ipad6 from "./images/Ipad6.webp"
import Ipad7 from "./images/Ipad7.webp"
import Ipad8 from "./images/Ipad8.webp"
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

function WatchCard() {
return (
  <div>
    <div className="product-list">
        {Ipad.length > 0 ? (
          Ipad.map((product) => (
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