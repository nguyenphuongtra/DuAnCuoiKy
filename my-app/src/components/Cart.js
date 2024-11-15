/* eslint-disable no-undef */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../assets/Style.css";

function Cart({ cartItems, updateQuantity, deleteProduct, total, quantity }) {
  const [delProduct, setDelProduct] = useState(false);
  const [delProducts, setDelProducts] = useState(null);
  const navigate = useNavigate();

  const openDelete = (index) => {
    setDelProduct(true);
    setDelProducts(index);
  };

  const handleCancel = () => {
    setDelProduct(false);
    setDelProducts(null);
  };

  const handleDelete = () => {
    deleteProduct(delProducts);
    handleCancel();
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

    const handleIncrease = (index) => {
      updateQuantity(index, cartItems[index].quantity +1)
    }
    const handleDecrease = (index) => {
      if (cartItems[index].quantity > 1){
        updateQuantity(index, cartItems[index].quantity -1)
      } else if(cartItems[index].quantity === 1){
        deleteProduct(index)
      }
    }
  return (
    <div className='cart'>
      <h1><i className="fa-solid fa-cart-shopping"></i> Your cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className='giohang'>
          {cartItems.map((item, index) => (
            <div key={item.id} className='cart-item'>
              <img src={item.image} alt={item.name} className='cart-item-image' />
              <h2>{item.name} - ${item.price}</h2>
              <div className='quantity-controls'>
                <button onClick={() => handleDecrease(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(index)}>+</button>
              </div>
              <button className='btn-delete' onClick={() => openDelete(index)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
          <div className='quantity'>
            <h3>Items: {quantity}</h3>
            <h3 style={{ color: 'red' }}>Total: ${total}</h3>
            <button onClick={handleCheckout} className='btn-thanhtoan'>Proceed to checkout</button>
          </div>
        </div>
      )}
      {delProduct && (
        <div className="layout">
          <div className="luachon">
            <h3>Delete this Product</h3>
            <p>Bạn có chắc muốn xoá sản phẩm này không?</p>
            <button onClick={handleCancel} className='btn-cancel'>Cancel</button>
            <button onClick={handleDelete} className='btn-delete'>Delete</button>
          </div>
        </div>
      )}
    </div>
    
  );
}

export default Cart;
