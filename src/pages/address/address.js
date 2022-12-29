import React, { useState, useEffect } from "react";
import { Table } from "antd";
import {
  addAddress,
  editAddress,
  getAllAddress,
  removeAddress,
  updateAddress,
} from "../../api/address";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Breadcrumbs from "../../components/breadcrumb";

const Address = () => {
  const [allAddress, setAllAddress] = useState([]);
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
    setEdit(false);
  };

  useEffect(() => {
    getAllAddress(setAllAddress);
  }, []);

  const columns = [
    {
      title: "#",
      render: (a, b, index) => <div> {index + 1} </div>,
    },
    {
      title: "Address",
      dataIndex: "address_uz",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Index",
      dataIndex: "index",
    },
    {
      title: "Tel",
      dataIndex: "tel",
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (item) => (
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => editAddress(item, setEdit, setData, openModal)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeAddress(item, setAllAddress)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumbs data={[{path: "/address", name: "Address "}]} />
      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">Address</h2>
          <button className="btn btn-primary" onClick={() => openModal()}>
            Add Address
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <Table
            dataSource={allAddress}
            columns={columns}
            rowKey={(record) => record._id}
          />
        </div>{" "}
      </div>
      <Modal isOpen={isModal} toggle={closeModal} centered>
        <ModalHeader toggle={closeModal}>{edit ? "Update" : "Add"}</ModalHeader>
        <ModalBody>
          <div className="d-flex justify-content-between my-3">
            {lng.map((v, i) => (
              <button
                className={`btn ${active === i ? "btn-primary" : "btn-light"}`}
                onClick={() => setActive(i)}
              >
                {v.toUpperCase()}{" "}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (edit) {
                updateAddress(data, setAllAddress, closeModal);
              } else {
                addAddress(data, setAllAddress, closeModal);
              }
            }}
          >
            <div className="form-group">
              <label htmlFor="address" className="label">
                Address {lng[active].toUpperCase()}
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name={`address_${lng[active]}`}
                value={data[`address_${lng[active]}`] || ""}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="code" className="label">
                Postal code
              </label>
              <input
                type="text"
                className="form-control"
                id="code"
                name="index"
                value={data.index || ""}
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
                type="text"
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

export default Address;
