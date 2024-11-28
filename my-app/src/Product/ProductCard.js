import React from 'react'
import '../assets/Style.css'
import Tainghe1 from "../Product/images/Tainghe1.webp"
import Tainghe2 from "../Product/images/Tainghe2.webp"
import Tainghe3 from "../Product/images/Tainghe3.webp"
import Tainghe4 from "../Product/images/Tainghe4.webp"
import Tainghe5 from "../Product/images/Tainghe5.webp"
import Tainghe6 from "../Product/images/Tainghe6.webp"
import Tainghe7 from "../Product/images/Tainghe7.webp"
import Tainghe8 from "../Product/images/Tainghe8.webp"

import { Link } from 'react-router-dom';
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
function ProductCard () {
  
  return (
    <div>
      <div className="product-list">
        {HeadPhone.length > 0 ? (
          HeadPhone.map((product) => (
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
  )
}

export default ProductCard