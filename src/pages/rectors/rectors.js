import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {FaEdit, FaTrash} from "react-icons/fa";
import {removeRectors, getAllRectors} from "../../api/rectors";
import {Table} from "antd";
import "./rectors.css";
import {useHistory} from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumb";

const Rectors = () => {
    const router = useHistory();

    const allRectors = useSelector((state) => state.Global.allRectors);

    useEffect(() => {
        getAllRectors();
    }, []);
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (item, route) => (
                <div className="avatar">
                    {" "}
                    <img src={process.env.REACT_APP_API_URL + route.image} alt=""/>{" "}
                    <span>{item}</span>
                </div>
            ),
        },
        {
            title: "Position",
            dataIndex: "position_uz",
            render: (item, route) => <div className="text">{item}</div>,
        },
        {
            title: "Email",
            dataIndex: "email",
            render: (item, route) => <div>{item}</div>,
        },
        {
            title: "Action",
            render: (item, route) => (
                <div>
                    {" "}
                    <div className="d-flex">
                        <button
                            className="btn btn-warning me-2"
                            onClick={() => router.push(`/rectors-edit/${route._id}`)}
                        >
                            <FaEdit/>
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => removeRectors(route._id)}
                        >
                            <FaTrash/>
                        </button>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div>
            <Breadcrumbs
                data={[{path: `/rectors`, name: "Rectors"}]}/>
            <div className="card">
                <div className="d-flex justify-content-between">
                    <h2 className="page-header">Rectors</h2>
                    <button
                        className="btn btn-primary"
                        onClick={() => router.push("/rectors-add")}
                    >
                        Add rectors
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                dataSource={allRectors}
                                key={allRectors}
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

export default Rectors;
