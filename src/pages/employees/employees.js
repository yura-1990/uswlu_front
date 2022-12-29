import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { FaTrash, FaEdit } from "react-icons/fa";
import { getAllEmployee, removeEmployee } from "../../api/employee";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Breadcrumbs from "../../components/breadcrumb";
const Employees = () => {
  const router = useHistory();
  const [allEmployee, setAllEmployee] = useState([]);
  const columns = [
    {
      title: "#",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (item, record) => (
        <div className="avatar">
          <img src={process.env.REACT_APP_API_URL + record.image} alt="" />
          <span> {item} </span>
        </div>
      ),
    },
    {
      title: "Position",
      dataIndex: "position_uz",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (text) => (
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => router.push("/employee-edit/" + text)}
          >
            {" "}
            <FaEdit />{" "}
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeEmployee(text, setAllEmployee)}
          >
            {" "}
            <FaTrash />{" "}
          </button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    getAllEmployee(setAllEmployee);
  }, []);
  return (
    <div>
      <Breadcrumbs
          data={[{path: `/employees`, name: "Employees"}]}/>
      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">Employees</h2>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/employee-add")}
          >
            {" "}
            Add Employee{" "}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card card__body">
            <Table
              dataSource={allEmployee}
              columns={columns}
              rowKey={(record) => record._id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
