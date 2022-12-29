import React, { useState, useEffect } from "react";
import { Table } from "antd";
import {
  addInfo,
  editInfo,
  getAllInfo,
  removeInfo,
  updateInfo,
} from "../../api/info";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Breadcrumbs from "../../components/breadcrumb";

const Info = () => {
  const [allInfo, setAllInfo] = useState([]);
  const [isModal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({});

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setData({});
    setEdit(false);
  };

  useEffect(() => {
    getAllInfo(setAllInfo);
  }, []);

  const columns = [
    {
      title: "#",
      render: (a, b, index) => <div> {index + 1} </div>,
    },
    {
      title: "Students",
      dataIndex: "students",
    },
    {
      title: "Staff",
      dataIndex: "staff",
    },
    {
      title: "Faculties",
      dataIndex: "faculties",
    },
    {
      title: "Departments",
      dataIndex: "departments",
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (item) => (
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => editInfo(item, setEdit, setData, openModal)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeInfo(item, setAllInfo)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumbs data={[{ path: `/info`, name: "Info" }]} />
      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">Info</h2>
          <button className="btn btn-primary" onClick={() => openModal()}>
            Add Info
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <Table
            dataSource={allInfo}
            columns={columns}
            rowKey={(record) => record._id}
          />
        </div>{" "}
      </div>
      <Modal isOpen={isModal} toggle={closeModal} centered>
        <ModalHeader toggle={closeModal}>{edit ? "Update" : "Add"}</ModalHeader>
        <ModalBody>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (edit) {
                updateInfo(data, setAllInfo, closeModal);
              } else {
                addInfo(data, setAllInfo, closeModal);
              }
            }}
          >
            <div className="form-group">
              <label htmlFor="students" className="label">
                Students
              </label>
              <input
                type="number"
                className="form-control"
                id="students"
                name="students"
                value={data.students || ""}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="staff" className="label">
                Staff
              </label>
              <input
                type="number"
                className="form-control"
                id="staff"
                name="staff"
                value={data.staff || ""}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="faculties" className="label">
                Faculties
              </label>
              <input
                type="number"
                className="form-control"
                id="faculties"
                name="faculties"
                value={data.faculties || ""}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="departments" className="label">
                Departments
              </label>
              <input
                type="number"
                className="form-control"
                id="departments"
                name="departments"
                value={data.departments || ""}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
              />
            </div>

            <div className="mt-4 text-center">
              <button className="btn btn-primary">
                {edit ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Info;
