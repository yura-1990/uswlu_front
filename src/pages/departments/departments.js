import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAllDepartments, removeDepartments } from "../../api/departments";
import Breadcrumbs from "../../components/breadcrumb";

const Departments = () => {
  const router = useHistory();
  const [allDepartments, setAllDepartments] = useState([]);
  const columns = [
    {
      title: "#",
      render: (item, record, index) => <div>{index + 1}</div>,
    },
    {
      title: "Name",
      dataIndex: "name_uz",
      render: (item, record) => (
        <div className="avatar">
          <img src={process.env.REACT_APP_API_URL + record.image1} alt="" />
          <span>{item}</span>
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (item) => (
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => router.push(`/departments-edit/${item}`)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeDepartments(item, setAllDepartments)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    getAllDepartments(setAllDepartments);
  }, []);
  return (
    <div>
      <Breadcrumbs data={[{ path: `/departments`, name: "Departments" }]} />
      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">Departments</h2>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/departments-add")}
          >
            Add Departments
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                columns={columns}
                dataSource={allDepartments}
                rowKey={(record) => record._id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
