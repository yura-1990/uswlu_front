import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

import "./sidebar.css";

import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const Sidebar = () => {
  const router = useHistory();
  const [active, setActive] = useState(-1);
  const isActive = (i) => {
    if (active === i) {
      setActive(-1);
    } else {
      setActive(i);
    }
  };

  return (
    <div className={`sidebar`}>
      <div>
        <div className="sidebar__logo">UzSWLU</div>
        {sidebar_items.map((item, index) => (
          <div
            className={`sidebar__item ${active === index ? "active" : ""} `}
            key={index}
          >
            {item.route ? (
              <div
                className={`sidebar__item-inner`}
                onClick={() => {
                  isActive(index);
                  router.push(item.route);
                }}
              >
                <span>{item.display_name}</span>
                <span className="icon">
                  <i className={item.icon}></i>{" "}
                </span>
              </div>
            ) : (
              <div
                className={`sidebar__item-inner ${
                  active === index ? "active" : ""
                }`}
                key={index}
                onClick={() => isActive(index)}
              >
                <span>{item.display_name}</span>

                <div className="icon-content">
                  <FaAngleLeft />
                  <span className="icon">
                    <i className={item.icon}></i>
                  </span>
                </div>
              </div>
            )}

            <ul className="item-menu">
              {item.items &&
                item?.items.map((v, i) => (
                  <li key={i}>
                    <Link to={v.route}>
                      <span>{v.display_name}</span>
                      <span className="icon">
                        <i className={item.icon}></i>{" "}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
