import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./About.css";
import contact from "../assets/images/contact.png"
function Contact() {
  const [submit, setSubmit] = useState();
  const {register, handleSubmit, reset, formState: {errors},} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
    setSubmit(true);
    reset();
  }
  return (
    <div className="contact-form-container">
      <div className="contact-info">
      <span className="brand-name">Startbox</span>
        <p>
          Mọi thắc mắc quý khách vui lòng liên hệ tới chúng tôi thông qua thông
          tin bên dưới hoặc quý khách có thể điền thông tin ở form bên cạnh.
          Chúng tôi sẽ liên hệ giải đáp thắc mắc tới quý khách một cách sớm
          nhất.
        </p>
        <p>
          <i className="fa-solid fa-location-dot"></i> 33 Xô Viết Nghệ Tĩnh, Hoà Cường Nam, Hải Châu, Đà Nẵng
        </p>
        <p>
          <i className="fa-solid fa-envelope"></i> Email: npt@gmail.com
        </p>
        <p>
          <i className="fa-solid fa-phone"></i> Điện thoại: 0387969xxx
        </p>
        <div className="certification">
          <img
            src= {contact} alt=""
          />
        </div>
      </div>

      <div className="contact-form">
        {submit ? (
          <div className="confirmation-message">
            <h4>Cảm ơn bạn đã liên hệ với chúng tôi!</h4>
            <p>Chúng tôi sẽ liên hệ giải đáp thắc mắc tới quý khách một cách sớm nhất.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Họ và tên..."
                {...register("name", { required: "Vui lòng nhập họ và tên." })}
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Địa chỉ email..."
                {...register("email", {
                  required: "Vui lòng nhập email.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email không hợp lệ.",
                  },
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Số điện thoại..."
                {...register("phone", {
                  required: "Vui lòng nhập số điện thoại.",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Số điện thoại phải có 10 chữ số.",
                  },
                })}
              />
              {errors.phone && (
                <p className="error-message">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Nhập nội dung liên hệ..."
                {...register("message", { required: "Vui lòng nhập nội dung." })}
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="submit-button">
              Gửi liên hệ
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
