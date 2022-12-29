import React, { useEffect, useState } from "react";

import "./table.css";

const Table = (props) => {
  const initDataShow =
    props.limit && props.bodyData && props.bodyData.length > 10
      ? props.bodyData.slice(0, parseInt(props.limit))
      : props.bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range = [];

  if (props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / parseInt(props.limit));
    pages =
      props.bodyData.length % parseInt(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = parseInt(props.limit) * page;
    const end = start + parseInt(props.limit);

    setDataShow(props.bodyData.slice(start, end));

    setCurrPage(page);
  };
  useEffect(() => {
    setDataShow(initDataShow);
  }, [initDataShow]);

  return (
    <div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {props.headData.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataShow.map((item, index) => props.renderBody(item, index))}
          </tbody>
        </table>
      </div>
      {pages > 1 ? (
        <div className="table__pagination">
          {range.map((item, index) => (
            <div
              key={index}
              className={`table__pagination-item ${
                currPage === index ? "active" : ""
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Table;
