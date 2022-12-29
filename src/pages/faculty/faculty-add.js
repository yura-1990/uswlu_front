import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {add_faculty} from "../../api/faculty";
import Editor from "../../components/Editor/Editor";
import Breadcrumbs from "../../components/breadcrumb";

const FacultyAdd = () => {
    const router = useHistory();

    const lng = ["uz", "ru", "en", "ae", "cn"];
    const [data, setData] = useState({
        description_uz: "",
        description_ru: "",
        description_en: "",
        description_ae: "",
        description_cn: "",
    });
    const [active, setActive] = useState(0);
    const handleOnchange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };
    return (
        <div>
            <Breadcrumbs
                data={[{path: `/faculty`, name: "Faculty"}, {path: router.location.pathname, name: "Add faculty"}]}/>
            <div className="card">
                <h2 className="page-header">Add Faculty</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="d-flex justify-content-between mb-3">
                                        {lng.map((v, i) => (
                                            <button
                                                key={i}
                                                className={`btn me-2 ${
                                                    active === i ? "btn-primary" : "btn-light"
                                                } `}
                                                onClick={() => setActive(i)}
                                            >
                                                {v.toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name" className="label">
                                                    Name {lng[active].toUpperCase()}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={data[`name_${lng[active]}`] || ""}
                                                    name={`name_${lng[active]}`}
                                                    className="form-control"
                                                    onChange={handleOnchange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="dean" className="label">
                                                    Faculty head
                                                </label>
                                                <input
                                                    type="text"
                                                    id="dean"
                                                    value={data.dean || ""}
                                                    name={`dean`}
                                                    className="form-control"
                                                    onChange={handleOnchange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="degree" className="label">
                                                    Degree {lng[active].toUpperCase()}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="degree"
                                                    value={data[`degree_${lng[active]}`] || ""}
                                                    name={`degree_${lng[active]}`}
                                                    className="form-control"
                                                    onChange={handleOnchange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="position" className="label">
                                                    Position {lng[active].toUpperCase()}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="position"
                                                    value={data[`position_${lng[active]}`] || ""}
                                                    name={`position_${lng[active]}`}
                                                    className="form-control"
                                                    onChange={handleOnchange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email" className="label">
                                                    Email
                                                </label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    value={data.email || ""}
                                                    name={`email`}
                                                    className="form-control"
                                                    onChange={handleOnchange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="tel" className="label">
                                                    Tel
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="tel"
                                                    value={data.tel || ""}
                                                    name={`tel`}
                                                    className="form-control"
                                                    onChange={handleOnchange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="acceptance-time" className="label">
                                                    Acceptance time {lng[active].toUpperCase()}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="acceptance-time"
                                                    value={data[`acceptance_time_${lng[active]}`] || ""}
                                                    name={`acceptance_time_${lng[active]}`}
                                                    className="form-control"
                                                    onChange={handleOnchange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="site" className="label">
                                                    Site
                                                </label>
                                                <input
                                                    type="text"
                                                    id="site"
                                                    value={data.site || ""}
                                                    name={`site`}
                                                    className="form-control"
                                                    onChange={handleOnchange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="department" className="label">
                                                    Department
                                                </label>
                                                <input
                                                    type="text"
                                                    id="department"
                                                    value={data.type || ""}
                                                    name={`type`}
                                                    className="form-control"
                                                    onChange={handleOnchange}
                                                />
                                            </div>
                                        </div>

                                        <label className="label">
                                            Description {lng[active].toUpperCase()}
                                        </label>
                                        <Editor
                                            setContent={setData}
                                            content={data}
                                            lng={lng[active]}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <div className="user-image">
                                            {typeof data.file1 == "object" ? (
                                                <img src={URL.createObjectURL(data?.file1)} alt=""/>
                                            ) : (
                                                <span>Upload image 1</span>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            className="d-none visibility-hidden"
                                            id="file1"
                                            name="file1"
                                            accept="image/*"
                                            onChange={(e) =>
                                                setData({...data, file1: e.target.files[0]})
                                            }
                                        />
                                        <label
                                            htmlFor="file1"
                                            className="btn btn-primary mt-4 w-100"
                                        >
                                            Upload image 1
                                        </label>
                                    </div>
                                    <div className="mt-4">
                                        <div className="user-image">
                                            {typeof data.file2 == "object" ? (
                                                <img src={URL.createObjectURL(data?.file2)} alt=""/>
                                            ) : (
                                                <span>Upload image 2</span>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            className="d-none visibility-hidden"
                                            id="file2"
                                            name="file2"
                                            accept="image/*"
                                            onChange={(e) =>
                                                setData({...data, file2: e.target.files[0]})
                                            }
                                        />
                                        <label
                                            htmlFor="file2"
                                            className="btn btn-primary mt-4 w-100"
                                        >
                                            Upload image 2
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            if (data.description_uz) {
                                                add_faculty(data, router);
                                            }
                                        }}
                                    >
                                        Add Faculty
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyAdd;
