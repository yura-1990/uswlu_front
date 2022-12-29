import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import {
  getAllUniversitySites,
  updateUniversitySites,
  editUniversitySites,
  addUniversitySites,
  removeUniversitySites,
} from "../../api/university-sites";
import Breadcrumbs from "../../components/breadcrumb";
const Partners = () => {
  const [addModal, setAddModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({});
  const [active, setActive] = useState(0);

  const lng = ["uz", "ru", "en", "ae", "cn"];

  const openAddModal = () => {
    setAddModal(true);
  };
  const closeModal = () => {
    setAddModal(false);
    setData({});
    setActive(0);
    setEdit(false);
  };
  const allUniversitySites = useSelector(
    (state) => state.Global.allUniversitySites
  );
  console.log(allUniversitySites);

  useEffect(() => {
    getAllUniversitySites();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (text, record) => (
        <div className="avatar">
          <img src={process.env.REACT_APP_API_URL + text} alt="" />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name_uz",
    },
    {
      title: "Url",
      dataIndex: "url",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (text, record) => (
        <div className="d-flex">
          <button
            className="btn btn-warning text-white me-2"
            onClick={() =>
              editUniversitySites(text, setEdit, setData, openAddModal)
            }
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-danger text-white"
            onClick={() => removeUniversitySites(text)}
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
        data={[{ path: `/university-sites`, name: "University sites" }]}
      />
      <div className="card">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="page-header">University Sites</h2>
          <button className="btn btn-primary" onClick={openAddModal}>
            Add University Site
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                dataSource={allUniversitySites}
                columns={columns}
                rowKey={(record) => record._id}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={addModal} toggle={closeModal} centered>
        <ModalHeader toggle={closeModal}>Add University Site</ModalHeader>
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
                updateUniversitySites(data._id, data, closeModal);
              } else {
                addUniversitySites(data, closeModal);
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
                placeholder={`Name ${lng[active].toUpperCase()}`}
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
                placeholder="Url"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="file" className="label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                name="file"
                accept="image/*"
                onChange={(e) => setData({ ...data, file: e.target.files[0] })}
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

export default Partners;
