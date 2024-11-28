import React from 'react'

import KeyBoard1 from "./images/bp1.jpeg"
import KeyBoard2 from "./images/bp2.jpeg"
import KeyBoard3 from "./images/bp3.jpeg"
import KeyBoard4 from "./images/bp4.jpg"
import KeyBoard5 from "./images/bp5.jpg"
import KeyBoard6 from "./images/bp6.jpg"
import KeyBoard7 from "./images/bp7.jpg"
import KeyBoard8 from "./images/bp8.jpg"

import { Link } from 'react-router-dom'
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
function ProductCard () {
  return (
    <div>
      <h2>Bàn Phím</h2>
      <div className="product-list">
        {KeyBoard.map((product) => (
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
    </div>
  )
}

export default ProductCard