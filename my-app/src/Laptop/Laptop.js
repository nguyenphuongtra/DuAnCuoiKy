import React from 'react'
import Laptop1 from "./images/Laptop1.webp"
import Laptop2 from "./images/Laptop2.webp"
import Laptop3 from "./images/Laptop3.webp"
import Laptop4 from "./images/Laptop4.webp"
import Laptop5 from "./images/Laptop5.webp"
import Laptop6 from "./images/Laptop6.webp"
import Laptop7 from "./images/Laptop7.webp"
import Laptop8 from "./images/Laptop8.webp"

import { Link } from 'react-router-dom'
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
function ProductCard () {
  return (
    <div>
      <div className="product-list">
        {Laptop.length > 0 ? (
          Laptop.map((product) => (
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