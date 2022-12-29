import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getDocs, updateDocs } from "../../api/education-docs";
import Breadcrumbs from "../../components/breadcrumb";

const EducationDocsEdit = () => {
  const router = useHistory();
  const [content, setContent] = useState({
    category: "qualification",
    type: "bachelor",
  });
  const { id } = useParams();
  const [active, setActive] = useState(0);
  const lng = ["uz", "en", "ru", "ae", "cn"];
  const handleOnchange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getDocs(id, setContent);
  }, [id]);
  return (
    <div>
      <Breadcrumbs data={[{ path: `/education-docs`, name: "Education Docs" }, {path: router.location.pathname, name: "Edit Education Docs"}]} />

      <div className="card">
        <h2 className="page-header">Edit Education docs</h2>
      </div>

      <div className="card">
        <div className="card_body">
          <div className="row">
            <div className="col-12 d-flex justify-content-between mb-4">
              {lng.map((item, index) => (
                <button
                  key={item}
                  className={`btn text-uppercase ${
                    active === index ? "btn-primary" : "btn-light"
                  }`}
                  onClick={() => setActive(index)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="label" htmlFor="title">
                  Title {lng[active].toUpperCase()}
                </label>
                <input
                  type="text"
                  className="form-control"
                  name={`title_${lng[active]}`}
                  value={content[`title_${lng[active]}`] || ""}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="category" className="label">
                  Category
                </label>
                <select
                  className="form-control"
                  name="category"
                  id="category"
                  onChange={handleOnchange}
                >
                  <option value="qualification">Malaka talablari</option>
                  <option value="plan">O'quv rejalari</option>
                  <option value="curriculum">O'quv dasturlari</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="type" className="label">
                  Type
                </label>
                <select
                  className="form-control"
                  name="type"
                  id="type"
                  onChange={handleOnchange}
                >
                  <option value="bachelor">Bakalavriat</option>
                  <option value="master">Magistratura</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="year" className="label">
                  Year
                </label>
                <input
                  type="text"
                  id="year"
                  value={content.year || ""}
                  name={`year`}
                  className="form-control"
                  onChange={handleOnchange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="file" className="label">
                  File
                </label>
                <input
                  type="file"
                  id="file"
                  name={`file`}
                  className="form-control"
                  onChange={(e) =>
                    setContent({ ...content, file: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-12 my-3">
              <button
                className="btn btn-primary"
                onClick={() => updateDocs(content, router)}
              >
                Update Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDocsEdit;
