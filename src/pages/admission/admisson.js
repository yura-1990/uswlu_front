import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Table } from "antd";
import { FaTrash, FaEdit } from "react-icons/fa";
import { getAllAdmission, removeAdmission } from "../../api/admission";
import Breadcrumbs from "../../components/breadcrumb";

const Admission = () => {
  const route = useHistory();
  const [allSection, setAllSection] = useState([]);

  useEffect(() => {
    getAllAdmission(setAllSection);
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
            onClick={() => route.push("/admission-edit/" + item)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeAdmission(item, setAllSection)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Breadcrumbs data={[{path: "/admission", name: "Admission "}]} />
      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">Admission</h2>
          <button
            className="btn btn-primary"
            onClick={() => route.push("/admission-add")}
          >
            Add Admission
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

export default Admission;
