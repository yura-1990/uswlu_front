/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { login } from "../../api/login_logout";
import { useHistory } from "react-router-dom";

const Login = () => {
  const route = useHistory();
  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    login(data, route);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
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
                  objectFit: "cover",
                  borderTopLeftRadius: " 0.3rem",
                  borderTopRightRadius: "0.3rem",
                }}
                alt="Sample photo"
              />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login</h3>

                <form className="px-md-2" onSubmit={handleSubmit}>
                  <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                    <div className="col-md-12">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="first_name">
                          Login
                        </label>
                        <input
                          type="text"
                          id="login"
                          className="form-control"
                          name="login"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-success btn-lg mb-1">
                    Login
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

export default Login;
