/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Register = () => {
  return (
    <section
      className="h-100 h-custom"
      style={{ backgroundColor: "#8fc4b7", minHeight: "100vh" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://storage.kun.uz/source/7/k9TXLnN2GIwMYT9WJTRwi8UWbrD3RiNu.jpg"
                className="w-100"
                style={{
                  maxHeight: "220px",
                  borderTopLeftRadius: " 0.3rem",
                  borderTopRightRadius: "0.3rem",
                }}
                alt="Sample photo"
              />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Ro'yhatdan o'tish
                </h3>

                <form className="px-md-2">
                  <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                    <div className="col-md-6">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="first_name">
                          Ism
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="form-control"
                          name="first_name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="last_name">
                          Familiya
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          className="form-control"
                          name="last_name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="phone_number">
                          Telefon raqam
                        </label>
                        <input
                          type="number"
                          id="phone_number"
                          className="form-control"
                          name="phone_number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Parol
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-outline mb-4">
                        <label
                          className="form-label"
                          htmlFor="confirm_password"
                        >
                          Parolni tasdiqlash
                        </label>
                        <input
                          type="password"
                          id="confirm_password"
                          className="form-control"
                          name="confirm_password"
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-success btn-lg mb-1">
                    Ro'yhatdan o'tish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
