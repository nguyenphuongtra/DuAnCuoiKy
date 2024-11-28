import React from 'react';
import anhnen1 from "../assets/images/anhnen1.webp";
import anhnen2 from "../assets/images/anhnen2.webp";
import anhnen3 from "../assets/images/anhnen3.webp";
import banner1 from "../assets/images/banner1.webp";
import banner2 from "../assets/images/banner2.webp";
import banner3 from "../assets/images/banner3.webp";
import "../assets/Style.css";
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="container-fluid banner-container">
      <div className="row">
      <div className="col-md-2 sidebar-menu">
        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            <i className="fa fa-list-alt me-1 bn-icon"></i>
            <Link to='' className='home-danhmuc'>Danh mục sản phẩm</Link>
          </li>
          <li className="list-group-item">
            <i className="fa fa-mouse me-1 bn-icon"></i>
            <Link to='/mouse' className='home-danhmuc'>Chuột máy tính</Link>
          </li>
          <li className="list-group-item">
            <i className="fa fa-keyboard me-1 bn-icon"></i>
            <Link to='/keyboard' className='home-danhmuc'>Bàn phím</Link>
          </li>
          <li className="list-group-item">
            <i className="fa fa-headphones me-2 bn-icon"></i>
            <Link to='/tainghe' className='home-danhmuc'>Tai nghe</Link>
          </li>
          <li className="list-group-item">
            <i className="fa fa-clock me-2 bn-icon"></i>
            <Link to='/Watch' className='home-danhmuc'>Đồng hồ</Link>
          </li>
          <li className="list-group-item">
            <i className="fa fa-tablet-alt me-2 bn-icon"></i>
            <Link to='/ipad' className='home-danhmuc'>Ipad</Link>
          </li>
          <li className="list-group-item">
            <i className="fa fa-laptop me-2 bn-icon"></i>
            <Link to='/laptops' className='home-danhmuc'>Laptop</Link>
          </li>
        </ul>
      </div>

        <div className="col-md-7 carousel-container">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={anhnen3} className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={anhnen1} className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={anhnen2} className="d-block w-100" alt="Slide 3" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-md-3 banners-right">
          <img src={banner1} className="banner-img mb-2" alt="Banner 1" />
          <img src={banner2} className="banner-img mb-2" alt="Banner 2" />
          <img src={banner3} className="banner-img" alt="Banner 3" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
