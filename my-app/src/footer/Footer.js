import React from 'react';
import gift from '../assets/images/gift.svg';
import clock from '../assets/images/clock.svg';
import packageIcon from '../assets/images/package.svg';
import refresh from '../assets/images/refresh-cw.svg';
import amazonPay from '../assets/images/amazonpay.svg';
import americanExpress from '../assets/images/american-express.svg';
import mastercard from '../assets/images/mastercard.svg';
import paypal from '../assets/images/paypal.svg';
import visa from '../assets/images/visa.svg';
import appStoreBtn from '../assets/images/appstore-btn.svg';
import googlePlayBtn from '../assets/images/googleplay-btn.svg';

function Footer() {
  return (
    <div>
      <div className="row mb-5">
        <div className="col-3">
          <div className="mb-4">
            <img src={clock} alt="Clock Icon" />
          </div>
          <h3 className="h5 mb-3">10 Minute Grocery Now</h3>
          <p className="bs-dark-text-emphasis" style={{ fontSize: '14px' }}>
            Get your order delivered to your doorstep at <br /> the earliest from TeaShop pickup stores <br /> near you.
          </p>
        </div>
        <div className="col-3">
          <div className="mb-4">
            <img src={gift} alt="Gift Icon" />
          </div>
          <h3 className="h5 mb-3">Best Prices & Offers</h3>
          <p className="bs-dark-text-emphasis" style={{ fontSize: '14px' }}>
            Cheaper prices than your local supermarket,<br /> great cashback offers to top it off. Get best <br /> prices & offers.
          </p>
        </div>
        <div className="col-3">
          <div className="mb-4">
            <img src={packageIcon} alt="Package Icon" />
          </div>
          <h3 className="h5 mb-3">Wide Assortment</h3>
          <p className="bs-dark-text-emphasis" style={{ fontSize: '14px' }}>
            Choose from 5000+ products across food, personal care, household, bakery, veg, <br /> non-veg & other categories.
          </p>
        </div>
        <div className="col-3">
          <div className="mb-4">
            <img src={refresh} alt="Refresh Icon" />
          </div>
          <h3 className="h5 mb-3">Easy Returns</h3>
          <p className="bs-dark-text-emphasis" style={{ fontSize: '14px' }}>
            Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.
          </p>
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
