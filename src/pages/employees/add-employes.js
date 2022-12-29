import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addEmployee } from "../../api/employee";
import Editor from "../../components/Editor/Editor";
import Breadcrumbs from "../../components/breadcrumb";
const AddEmployee = () => {
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
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Breadcrumbs
          data={[{path: `/employees`, name: "Employees"}, {path: router.location.pathname, name: "Add Employee"}]}/>
      <div className="card">
        <h2 className="page-header">Add Employee</h2>
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
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={data.name || ""}
                          name={`name`}
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
                        <label htmlFor="link" className="label">
                          Staff link
                        </label>
                        <input
                          type="text"
                          id="link"
                          value={data.link || ""}
                          name={`link`}
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
                          value={data.department || ""}
                          name={`department`}
                          className="form-control"
                          onChange={handleOnchange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="section" className="label">
                          Section
                        </label>
                        <input
                          type="text"
                          id="section"
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
                      {typeof data.file == "object" ? (
                        <img src={URL.createObjectURL(data?.file)} alt="" />
                      ) : (
                        <span>Upload image </span>
                      )}
                    </div>
                    <input
                      type="file"
                      className="d-none visibility-hidden"
                      id="file"
                      name="file"
                      accept="image/*"
                      onChange={(e) =>
                        setData({ ...data, file: e.target.files[0] })
                      }
                    />
                    <label
                      htmlFor="file"
                      className="btn btn-primary mt-4 w-100"
                    >
                      Upload image
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      if (data.description_uz) {
                        addEmployee(data, router);
                      }
                    }}
                  >
                    Add Employee
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

export default AddEmployee;
