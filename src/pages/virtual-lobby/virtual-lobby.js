import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaEye, FaTrash } from "react-icons/fa";
import {
  getAllVirtualLobby,
  removeVirtualLobby,
} from "../../api/virtual-lobby";
import { Table } from "antd";
import { useHistory } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumb";
const VirtualLobby = () => {
  const router = useHistory();
  const allVirtualLobby = useSelector((state) => state.Global.allVirtualLobby);

  useEffect(() => {
    getAllVirtualLobby();
  }, []);

  const columns = [
    {
      title: "FullName",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Tel",
      dataIndex: "tel",
    },
    {
      title: "Passport info",
      dataIndex: "passport_info",
    },
    {
      title: "Fax",
      dataIndex: "fax",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Actions",
      dataIndex: "_id",
      render: (item) => (
        <div className="d-flex">
          <button
            className="btn btn-warning me-2"
            onClick={() => router.push("/virtual-lobby-edit/" + item)}
          >
            <FaEye />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => removeVirtualLobby(item)}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumbs data={[{path: "/virtual-lobby", name: "Virtual Lobby"}]} />
      <div className="card">
        <h2 className="page-header">Virtual lobby</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                dataSource={allVirtualLobby}
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

export default VirtualLobby;
