import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Routes from "../Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Route } from "react-router-dom";

import { useSelector } from "react-redux";

import Login from "../../pages/Authentication/login";
import { Redirect } from "react-router-dom";
const Layout = () => {
  const sidebar = useSelector((state) => state.Global.sidebar);

  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <>
        <Route path={"/login"} component={Login} />
        <Route path={"/"} component={Login}>
          <Redirect to={"/login"} />
        </Route>
      </>
    );
  } else {
    return (
      <>
        <ToastContainer />
        <Route
          render={(props) => (
            <div className={`layout`}>
              <Sidebar {...props} />
              <div className={`layout__content  ${sidebar ? "active" : ""}`}>
                <TopNav />
                <div className="layout__content-main">
                  <Routes />
                </div>
              </div>
            </div>
          )}
        />
      </>
    );
  }
};

export default Layout;
