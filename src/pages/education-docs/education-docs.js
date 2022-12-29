import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useHistory } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getAllDocs, removeDocs } from "../../api/education-docs";
import Breadcrumbs from "../../components/breadcrumb";
const EducationDocs = () => {
  const router = useHistory();
  const [allEducationDocs, setAllEducationDocs] = useState([]);
  const columns = [
    {
      title: "#",
      render: (i, b, index) => index + 1,
    },
    {
      title: "Title",
      dataIndex: "title_uz",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (item) => (
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => router.push("/education-docs-edit/" + item)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeDocs(item, setAllEducationDocs)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    getAllDocs(setAllEducationDocs);
  }, []);
  return (
    <div>
      <Breadcrumbs data={[{ path: `/education-docs`, name: "Education Docs" }]} />

      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">Education Docs</h2>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/education-docs-add")}
          >
            Add Docs{" "}
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <Table
            dataSource={allEducationDocs}
            columns={columns}
            rowKey={(record) => record._id}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationDocs;
