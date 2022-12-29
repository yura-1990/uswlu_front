import React, { useState, useEffect } from "react";
import { Table } from "antd";
import {
  addPrograms,
  editPrograms,
  getAllDoubleDegreePrograms,
  removePrograms,
  updatePrograms,
} from "../../api/programs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Breadcrumbs from "../../components/breadcrumb";

const DoubleDegreePrograms = () => {
  const [allPrograms, setAllPrograms] = useState([]);
  const [isModal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({});
  const [active, setActive] = useState(0);

  const lng = ["uz", "ru", "en", "ae", "cn"];
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setData({});
    setActive(0);
    setEdit(false);
  };

  useEffect(() => {
    getAllDoubleDegreePrograms(setAllPrograms);
  }, []);

  const columns = [
    {
      title: "#",
      render: (a, b, index) => <div> {index + 1} </div>,
    },
    {
      title: "Name",
      dataIndex: "name_uz",
    },
    {
      title: "Tel",
      dataIndex: "tel",
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
            className="btn btn-warning me-2"
            onClick={() => editPrograms(item, setEdit, setData, openModal)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removePrograms(item, setAllPrograms)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumbs
        data={[
          { path: `/double-degree-programs`, name: "Double Degree Programs" },
        ]}
      />
      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">Double Degree Programs</h2>
          <button className="btn btn-primary" onClick={() => openModal()}>
            {" "}
            Add Programs
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <Table
            dataSource={allPrograms}
            columns={columns}
            rowKey={(record) => record._id}
          />
        </div>{" "}
      </div>
      <Modal isOpen={isModal} toggle={closeModal} centered>
        <ModalHeader toggle={closeModal}>{edit ? "Update" : "Add"}</ModalHeader>
        <ModalBody>
          <div className="d-flex">
            {lng.map((v, i) => (
              <button
                key={i}
                className={`btn me-2 ${active === i ? "btn-primary" : ""} `}
                onClick={() => setActive(i)}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (edit) {
                updatePrograms(data, setAllPrograms, closeModal);
              } else {
                addPrograms(data, setAllPrograms, closeModal);
              }
            }}
          >
            <div className="form-group">
              <label className="label" htmlFor="name">
                Name {lng[active].toUpperCase()}
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name={`name_${[lng[active]]}`}
                value={data[`name_${[lng[active]]}`] || ""}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel" className="label">
                Tel
              </label>
              <input
                type="tel"
                className="form-control"
                id="tel"
                name="tel"
                value={data.tel || ""}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="url" className="label">
                Url
              </label>
              <input
                type="text"
                className="form-control"
                id="url"
                name="url"
                value={data.url || ""}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telegram" className="label">
                Telegram
              </label>
              <input
                type="text"
                className="form-control"
                id="telegram"
                name="telegram"
                value={data.telegram || ""}
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

export default DoubleDegreePrograms;
