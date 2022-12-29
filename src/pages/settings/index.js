import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { FaTrash } from "react-icons/fa";
import { Table } from "antd";
import { getAllUsers, removeUser } from "../../api/settings";
import Breadcrumbs from "../../components/breadcrumb";
const Admin = () => {
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState({ role: "admin" });
  const [allUser, setAllUser] = useState([]);
  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getAllUsers(setAllUser);
  }, []);

  const columns = [
    {
      title: "#",
      render: (item, record, index) => index + 1,
    },
    {
      title: "Login",
      dataIndex: "login",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (item) => (
        <div className="d-flex">
          <button
            className="btn btn-danger"
            onClick={() => removeUser(item, setAllUser)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumbs data={[{ path: `/settings`, name: "Settings" }]} />

      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header"> Admin </h2>
          <button className="btn btn-primary" onClick={openModal}>
            Add Admin
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <Table
            columns={columns}
            dataSource={allUser}
            rowKey={(record) => record._id}
          />
        </div>
      </div>

      <Modal isOpen={isModal} toggle={closeModal} centered>
        <ModalHeader toggle={closeModal}>
          Add <span className="text-capitalize">{data.role}</span>{" "}
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="login" className="label">
                Login
              </label>
              <input
                type="text"
                className="form-control"
                name="login"
                value={data.login || ""}
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="fullName" className="label">
                FullName
              </label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={data.fullName || ""}
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={data.email || ""}
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="role" className="label">
                Role
              </label>
              <select
                name="role"
                id="role"
                className="form-control"
                onChange={handleOnchange}
              >
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
                <option value="faculty-moderator">Faculty Moderator</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                name="password"
                value={data.password || ""}
                onChange={handleOnchange}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary">
                Add <span className="text-capitalize">{data.role}</span>
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Admin;
