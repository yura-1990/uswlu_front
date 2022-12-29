import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Breadcrumbs = ({ data = [] }) => {
  return (
    <div>
      <nav className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"}>Dashboard</Link>
          </Breadcrumb.Item>
          {data.map((v, i) => (
            <Breadcrumb.Item key={i}>
              <Link to={v.path}>{v.name}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
