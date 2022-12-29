import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Table } from "antd";
import { getAllNews, removeNews } from "../../api/news";
import Breadcrumbs from "../../components/breadcrumb";
const News = () => {
  const route = useHistory();
  const [allNews, setAllNews] = useState([]);
  const columns = [
    {
      title: "#",
      render: (item, record, index) => <div>{index + 1}</div>,
    },
    {
      title: "Title",
      dataIndex: "title_uz",
      render: (item, record) => (
        <div className="avatar">
          <img src={process.env.REACT_APP_API_URL + record.image} alt="" />
          <span>{item}</span>
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (text) => (
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => route.push(`/news-edit/${text}`)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-danger me-2"
            onClick={() => removeNews(text, setAllNews)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    getAllNews(setAllNews);
  }, []);
  return (
    <div>
      <Breadcrumbs data={[{ path: `/news`, name: "News" }]} />
      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">News</h2>
          <button
            className="btn btn-primary"
            onClick={() => route.push("/news-add")}
          >
            Add News
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                dataSource={allNews}
                columns={columns}
                rowKey={(record) => record._id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
