import React, { useState } from "react";

import "./dropdown.css";

const Dropdown = (props) => {
  const [active, setActive] = useState(false);

  const clickOutsideRef = () => {
    setActive(!active);
  };



  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={clickOutsideRef}>
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div
        className={`dropdown__content ${active ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ""}
        {props.renderFooter ? (
          <div className="dropdown__footer">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
