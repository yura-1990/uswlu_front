import React from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import user_image from "../../assets/images/admin.jpg";

import user_menu from "../../assets/JsonData/user_menus.json";

const curr_user = {
  display_name: "Admin",
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const Topnav = () => {
  const renderUserMenu = (item, index) => (
    <Link
      to={index === 1 ? "/login" : "/settings"}
      key={index}
      onClick={() => {
        if (index === 1) {
          localStorage.clear();
          window.location.reload();
        }
      }}
    >
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  );

  return (
    <div className="topnav">
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
