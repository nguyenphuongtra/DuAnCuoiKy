import { useNavigate } from 'react-router-dom';
import '../App.css';

function Checkout({total, quantity}) {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert('Bạn đã đặt hàng!');
    navigate('/');
  }

  return (
    <div className="checkout">
      <h1>Thanh toán</h1>
      <p>Cảm ơn bạn đã mua sắm với chúng tôi! Vui lòng xem lại đơn hàng của bạn và tiến hành hoàn tất giao dịch mua.</p>
      <div className="checkout-summary">
        <h2>Tóm tắt đơn hàng</h2>
        <p> Số lượng: {quantity}</p>
        <h4 style={{color: 'red'}}>Tổng giá: ${total}</h4>
      </div>
      <button onClick={handlePlaceOrder} className="btn-place-order">Thanh toán</button>
      
    </div>
  );    
}

export default Checkout;
