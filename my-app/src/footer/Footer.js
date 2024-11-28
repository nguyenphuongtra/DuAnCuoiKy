import React from 'react';
import gift from '../assets/images/p1.png';
import clock from '../assets/images/p2.png';
import packageIcon from '../assets/images/p3.png';
import refresh from '../assets/images/p4.png';
import amazonPay from '../assets/images/amazonpay.svg';
import americanExpress from '../assets/images/american-express.svg';
import mastercard from '../assets/images/mastercard.svg';
import paypal from '../assets/images/paypal.svg';
import visa from '../assets/images/visa.svg';
import appStoreBtn from '../assets/images/appstore-btn.svg';
import googlePlayBtn from '../assets/images/googleplay-btn.svg';
import zalo from '../assets/images/Zalo.jpg'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.jpg'

function Footer() {
  return (
    <div>
      <div className="row mb-5">
        <div className="col-3">
          <div className="mb-4">
            <img src={gift} alt="Clock Icon" />
          </div>
          <h3 className="h5 mb-3">Sản Phẩm chất lượng</h3>
          <p className="bs-dark-text-emphasis" style={{ fontSize: '14px' }}>
            Get your order delivered to your doorstep at <br /> the earliest from TeaShop pickup stores <br /> near you.
          </p>
        </div>
        <div className="col-3">
          <div className="mb-4">
            <img src={clock} alt="Gift Icon" />
          </div>
          <h3 className="h5 mb-3">Chủng loại phong phú</h3>
          <p className="bs-dark-text-emphasis" style={{ fontSize: '14px' }}>
            Cheaper prices than your local supermarket,<br /> great cashback offers to top it off. Get best <br /> prices & offers.
          </p>
        </div>
        <div className="col-3">
          <div className="mb-4">
            <img src={packageIcon} alt="Package Icon" />
          </div>
          <h3 className="h5 mb-3">Giá cả cạnh tranh</h3>
          <p className="bs-dark-text-emphasis" style={{ fontSize: '14px' }}>
            Choose from 5000+ products across food, personal care, household, bakery, veg, <br /> non-veg & other categories.
          </p>
        </div>
        <div className="col-3">
          <div className="mb-4">
            <img src={refresh} alt="Refresh Icon" />
          </div>
          <h3 className="h5 mb-3">Giao hàng nhanh chóng</h3>
          <p className="bs-dark-text-emphasis" style={{ fontSize: '14px' }}>
            Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer">
        <div className="row">
          <h5>Tổng đài hỗ trợ</h5>
          <span className='f'>Mua hàng: (024) 3568 6969</span>
          <span>Bảo hành: (028) 38 333 222</span>
        </div>
        <div className="row">
          <h5>Hỗ trợ khách hàng</h5>
          <span>Kiếu nại bồi thường</span>
          <span>Hình thức thanh toán</span>
          <span>Hướng dẫn mua hàng</span>
          <span>Hóa đơn GTGT điện tử</span>
          <span>Chính sách và Quy định chung</span>
          <span>Chính sách bán hàng & Chất lượng hàng hóa</span>
          <span>Giao nhận hàng hóa</span>
          <span>Chính sách Đổi - Trả hàng hóa</span>
          <span>Chính sách Bảo hành</span>
          <span>Bảo mật dữ liệu cá nhân</span>
        </div>
        <div className="row">
          <h5>Quản lý tài khoản</h5>
          <span>Thay đổi thông tin</span>
          <span>Lấy lại mật khẩu</span>
          <span>Tra cứu đơn hàng</span>
          <span>Quản lý giỏ hàng</span>
        </div>
        <div className="row">
          <h5>Về STARTBOX</h5>
          <span>Giới thiệu về STARTBOX</span>
          <span>Liên hệ</span>
          <span>Tuyển dụng</span>
          <span>Sơ đồ website</span>
        </div>
        <div className="row">
          <h5>Kết nối với chúng tôi</h5>
          <img src={zalo} alt="" />
          <div className="language-selector">Language/语言/言語/언어/Sprache</div>
        </div>
      </div>

      <div className="row mb-3" style={{ backgroundColor: '#f0f3f2' }}>
        <div className="col-5 text-lg-start text-center mb-2">
          <div className="list-inline mb-0">
            <div className="list-inline-item text-dark">Payment Partners</div>
            <div className="list-inline-item">
              <img src={amazonPay} alt="Amazon Pay" />
            </div>
            <div className="list-inline-item">
              <img src={americanExpress} alt="American Express" />
            </div>
            <div className="list-inline-item">
              <img src={mastercard} alt="Mastercard" />
            </div>
            <div className="list-inline-item">
              <img src={paypal} alt="Paypal" />
            </div>
            <div className="list-inline-item">
              <img src={visa} alt="Visa" />
            </div>
          </div>
        </div>
        <div className="col-7 text-lg-end text-center mb-2">
          <div className="list-inline mb-0">
            <div className="list-inline-item text-dark">Get deliveries with TeaShop</div>
            <div className="list-inline-item">
              <img src={appStoreBtn} alt="App Store" />
            </div>
            <div className="list-inline-item">
              <img src={googlePlayBtn} alt="Google Play" />
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: '#f0f3f2' }}>
    <hr />
      </div>

      <div className="row mb-5" style={{ backgroundColor: '#f0f3f2' }}>
        <div className="col-6 text-lg-start text-center mb-2" style={{ fontSize: '14px' }}>
          © 2024 TeaShop eCommerce React Template. All rights reserved. Powered by Codescandy.
        </div>
        <div className="col-6 text-lg-end text-center mb-3">
          Follow us on
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
