import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Table } from "antd";
import { FaTrash, FaEdit } from "react-icons/fa";
import { getAllDocuments, removeDocuments } from "../../api/documents";
import Breadcrumbs from "../../components/breadcrumb";
const Documents = () => {
  const route = useHistory();
  const [allSection, setAllSection] = useState([]);

  useEffect(() => {
    getAllDocuments(setAllSection);
  }, []);
  const columns = [
    { title: "#", render: (text, item, index) => <div>{index + 1}</div> },
    {
      title: "Title",
      dataIndex: "title_uz",
      render: (item, index) => (
        <div style={{ width: "500px", overflow: "hidden" }}>{item}</div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (item, index) => (
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => route.push("/documents-edit/" + item)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeDocuments(item, setAllSection)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Breadcrumbs data={[{ path: `/documents`, name: "Documents" }]} />
      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">Documents</h2>
          <button
            className="btn btn-primary"
            onClick={() => route.push("/documents-add")}
          >
            Add Documents
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                dataSource={allSection}
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

export default Documents;
