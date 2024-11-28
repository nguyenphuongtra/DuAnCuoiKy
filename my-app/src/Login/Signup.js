import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./SignUp.css";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Simulated signup logic
  const onSubmit = (data) => {
    console.log("Registration data:", data);
    alert("Đăng ký thành công! Hãy đăng nhập.");
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="body-signup">
      <div className="container-signup">
        <div className="box">
          <div className="form sign_up">
            <h3 style={{ textAlign: 'center' }}>Đăng ký</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="type">
                <input
                  type="text"
                  placeholder="Tên người dùng"
                  {...register("username", {
                    required: "Tên người dùng là bắt buộc",
                    minLength: {
                      value: 3,
                      message: "Tên người dùng phải ít nhất 3 kí tự",
                    },
                  })}
                />
                {errors.username && <p className="error-message">{errors.username.message}</p>}
              </div>
              <div className="type">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email là bắt buộc",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Email không hợp lệ",
                    },
                  })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </div>
              <div className="type">
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  {...register("password", {
                    required: "Mật khẩu là bắt buộc",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu phải ít nhất 6 kí tự",
                    },
                  })}
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
              </div>
              <div className="type">
                <input
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  {...register("confirmPassword", {
                    required: "Xác nhận mật khẩu là bắt buộc",
                    validate: (value, context) =>
                      value === context.password || "Mật khẩu không khớp",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="error-message">{errors.confirmPassword.message}</p>
                )}
              </div>

              <div className="login-link">
                <span>Đã có tài khoản?</span>
                <Link to={'/login'}>Đăng nhập</Link>
              </div>
              <button className="btn-si" type="submit">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
