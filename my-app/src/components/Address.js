import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';

function Address() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const paymentMethod = watch('paymentMethod', '');

  const onSubmit = (data) => {
    console.log(data);
    navigate('/checkout');
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row my-5">
          <div className="col-md-7 col-lg-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h4 className="mb-0">Địa chỉ thanh toán</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6 my-1">
                      <label htmlFor="firstName" className="form-label">Tên</label>
                      <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        id="firstName"
                        {...register('firstName', { required: 'Tên phải hợp lệ.' })}
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                    </div>

                    <div className="col-sm-6 my-1">
                      <label htmlFor="lastName" className="form-label">Họ</label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        id="lastName"
                        {...register('lastName', { required: 'Họ phải hợp lệ.' })}
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                    </div>

                    <div className="col-12 my-1">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        {...register('email', {
                          required: 'Vui lòng nhập địa chỉ email hợp lệ để cập nhật thông tin vận chuyển.',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email format',
                          },
                        })}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>

                    <div className="col-12 my-1">
                      <label htmlFor="address" className="form-label">Địa chỉ</label>
                      <input
                        type="text"
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        id="address"
                        {...register('address', { required: 'Vui lòng nhập địa chỉ giao hàng' })}
                      />
                      {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                    </div>

                    <div className="col-12 my-1">
                      <label htmlFor="phoneNumber" className="form-label">Số điện thoại</label>
                      <input
                        type="text"
                        className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                        id="phoneNumber"
                        {...register('phoneNumber', {
                          required: 'Vui lòng nhập số điện thoại',
                          pattern: {
                            value: /^[0-9]+$/,
                            message: 'Số điện thoại chỉ được chứa số',
                          },
                        })}
                      />
                      {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber.message}</div>}
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h4 className="mb-3">Hình thức thanh toán</h4>
                  <div className="col-12">
                    <input
                      type="radio"
                      id="cod"
                      value="cod"
                      {...register('paymentMethod', { required: 'Vui lòng chọn một hình thức thanh toán' })}
                    />
                    <label htmlFor="cod" className="ms-2">Thanh toán khi nhận hàng</label>
                  </div>
                  <div className="col-12">
                    <input
                      type="radio"
                      id="bank"
                      value="bank"
                      {...register('paymentMethod')}
                    />
                    <label htmlFor="bank" className="ms-2">Chuyển khoản qua ngân hàng</label>
                  </div>
                  {errors.paymentMethod && <div className="text-danger">{errors.paymentMethod.message}</div>}
                  {paymentMethod === 'bank' && (
                    <div className="mt-3">
                      <div className="col-12 my-2">
                        <label htmlFor="bankName" className="form-label">Tên ngân hàng</label>
                        <input
                          type="text"
                          className={`form-control ${errors.bankName ? 'is-invalid' : ''}`}
                          id="bankName"
                          {...register('bankName', { required: 'Vui lòng nhập tên ngân hàng' })}
                        />
                        {errors.bankName && <div className="invalid-feedback">{errors.bankName.message}</div>}
                      </div>

                      <div className="col-12 my-2">
                        <label htmlFor="cardNumber" className="form-label">Mã số thẻ</label>
                        <input
                          type="text"
                          className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                          id="cardNumber"
                          {...register('cardNumber', {
                            required: 'Vui lòng nhập mã số thẻ',
                            pattern: {
                              value: /^[0-9]+$/,
                              message: 'Mã số thẻ chỉ được chứa số',
                            },
                          })}
                        />
                        {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber.message}</div>}
                      </div>
                    </div>
                  )}

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-primary"
                    type="submit"
                  >
                    Tiếp tục thanh toán
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Address;
