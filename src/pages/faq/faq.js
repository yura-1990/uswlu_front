import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { FaEye, FaTrash } from "react-icons/fa";
import { getAllFaq, removeFaq } from "../../api/faq";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Breadcrumbs from "../../components/breadcrumb";

const Faq = () => {
  const router = useHistory();
  const [allFaq, setAllFaq] = useState([]);
  const columns = [
    {
      title: "#",
      render: (text, record, index) => <div> {index + 1} </div>,
    },
    {
      title: "FullName",
      dataIndex: "fullName",
    },
    {
      title: "Question",
      dataIndex: "question",
    },
    {
      title: "Answer",
      dataIndex: "answer",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (text) => (
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => router.push("edit-faq/" + text)}
          >
            <FaEye />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeFaq(text, setAllFaq)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getAllFaq(setAllFaq);
  }, []);

  return (
    <div>
        <Breadcrumbs data={[{path: "/faq", name: "Faq"}]} />
      <div className="card">
        <h2 className="page-header">Faq</h2>
      </div>
      <div className="card">
        <div className="card__body">
          <Table
            columns={columns}
            dataSource={allFaq}
            rowKey={(record) => record._id}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
