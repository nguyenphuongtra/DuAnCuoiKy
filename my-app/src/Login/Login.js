import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.username === "npt" && data.password === "111111") {
      console.log("Login successful!", data);
      navigate("/");
    } else {
      console.log("Login failed!");
      alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  };

  return (
    <div className="body-login">
      <div className="container-login">
        <div className="box">
          <div className="form sign_in">
            <h3 style={{ textAlign: 'center' }}>Đăng nhập</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="type">
                <input
                  type="text"
                  placeholder="Tên đăng nhập"
                  {...register("username", {
                    required: "Tên đăng nhập là bắt buộc",
                    minLength: {
                      value: 3,
                      message: "Tên đăng nhập phải ít nhất 3 kí tự",
                    },
                  })}
                />
                {errors.username && <p className="error-message">{errors.username.message}</p>}
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

              <div className="forgot">
                <span>Quên mật khẩu?</span>
                <Link to={'/signup'}>Đăng ký</Link>
              </div>
              <button className="btn-si" type="submit">Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
