import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Table } from "antd";
import { getAllFaculty, removeFaculty } from "../../api/faculty";
import Breadcrumbs from "../../components/breadcrumb";
const Faculty = () => {
  const [allFaculty, setAllFaculty] = useState([]);
  const router = useHistory();
  useEffect(() => {
    getAllFaculty(setAllFaculty);
  }, []);
  const columns = [
    { title: "#", render: (item, record, index) => index + 1 },
    {
      title: "Name",
      dataIndex: "name_uz",
      render: (text, record) => (
        <div className="avatar">
          <img src={process.env.REACT_APP_API_URL + record.image1} alt="" />
          <span>{text}</span>
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
            onClick={() => router.push("/faculty-edit/" + item)}
          >
            <FaEdit />
          </button>
          <button className="btn btn-danger" onClick={() => removeFaculty(item , setAllFaculty)}>
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
        <Breadcrumbs data={[{ path: `/faculty`, name: "Faculty" }]} />
      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header">Faculty</h2>
          <button
            className="btn btn-primary"
            onClick={() => router.push("faculty-add")}
          >
            Add Faculty
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                columns={columns}
                dataSource={allFaculty}
                rowKey={(record) => record._id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
