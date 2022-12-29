import React, { useEffect, useState } from "react";
import { editRectors, updateRectors } from "../../api/rectors";
import { useHistory, useParams } from "react-router-dom";
import "./rectors.css";
import Breadcrumbs from "../../components/breadcrumb";
const EditRector = () => {
  const lng = ["uz", "ru", "en", "ae", "cn"];
  const [data, setData] = useState({});
  const [active, setActive] = useState(0);
  const router = useHistory();
  const { id } = useParams();
  useEffect(() => {
    editRectors(id, setData);
  }, [id]);
  return (
    <div>
      <Breadcrumbs
          data={[{path: `/rectors`, name: "Rectors"}, {path: router.location.pathname, name: "Edit Rector"}]}/>
      <div className="card">
        <h2 className="page-header">Edit Rector</h2>
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
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateRectors(data._id, data, router);
                    }}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="url" className="label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={data.name || ""}
                            onChange={(e) =>
                              setData({
                                ...data,
                                [e.target.name]: e.target.value,
                              })
                            }
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="name">
                            Position {lng[active].toUpperCase()}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name={`position_${[lng[active]]}`}
                            value={data[`position_${[lng[active]]}`] || ""}
                            onChange={(e) =>
                              setData({
                                ...data,
                                [e.target.name]: e.target.value,
                              })
                            }
                            placeholder={`Position ${lng[
                              active
                            ].toUpperCase()}`}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email" className="label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={(e) =>
                              setData({ ...data, email: e.target.value })
                            }
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="tel" className="label">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            name="tel"
                            id="tel"
                            value={data.tel}
                            onChange={(e) =>
                              setData({ ...data, tel: e.target.value })
                            }
                            placeholder="Phone  "
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        {" "}
                        <div className="form-group">
                          <label className="label" htmlFor="name">
                            Acceptance time {lng[active].toUpperCase()}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name={`acceptance_time_${[lng[active]]}`}
                            value={
                              data[`acceptance_time_${[lng[active]]}`] || ""
                            }
                            onChange={(e) =>
                              setData({
                                ...data,
                                [e.target.name]: e.target.value,
                              })
                            }
                            placeholder={`Acceptance ${lng[
                              active
                            ].toUpperCase()}`}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        {" "}
                        <div className="form-group">
                          <label htmlFor="fax" className="label">
                            Fax
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fax"
                            id="fax"
                            value={data.fax}
                            onChange={(e) =>
                              setData({ ...data, fax: e.target.value })
                            }
                            placeholder="Fax"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <button className="btn btn-primary">Update Rector</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-3">
                  <div className="user-image">
                    {typeof data.file == "object" ? (
                      <img src={URL.createObjectURL(data?.file)} alt="" />
                    ) : data.image ? (
                      <img
                        src={process.env.REACT_APP_API_URL + data.image}
                        alt=""
                      />
                    ) : (
                      <span>Rasm yuklash</span>
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
                  <label htmlFor="file" className="btn btn-primary mt-4 w-100">
                    Upload image
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRector;
