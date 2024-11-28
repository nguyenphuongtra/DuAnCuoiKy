import React from 'react'
import { Link } from 'react-router-dom'


import Mouse1 from "./images/chuot1.jpg"
import Mouse2 from "./images/chuot2.jpg"
import Mouse3 from "./images/chuot3.jpeg"
import Mouse4 from "./images/chuot4.jpg"
import Mouse5 from "./images/chuot5.jpg"
import Mouse6 from "./images/chuot6.jpg"
import Mouse7 from "./images/chuot7.jpg"
import Mouse8 from "./images/chuot8.jpg"


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

function MouseCard() {
return (
  <div>
    <h2>Chuột máy tính</h2>
    <div className="product-list">
        {Mouse.map((product) => (
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
);
}

export default MouseCard;