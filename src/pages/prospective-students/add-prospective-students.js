import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addProspectiveStudents } from "../../api/prospective-students";
import Editor from "../../components/Editor/Editor";
import { pages_prospective } from "../../data/prospective-students";
import Breadcrumbs from "../../components/breadcrumb";

const StudentsAdd = () => {
  const router = useHistory();
  const [content, setContent] = useState({
    description_uz: "",
    description_en: "",
    description_ru: "",
    description_ae: "",
    description_cn: "",
    page: "university",
  });
  const [active, setActive] = useState(0);
  const lng = ["uz", "ru", "en", "ae", "cn"];

  return (
    <div>
      <Breadcrumbs data={[{path: "/prospective-students", name: "Prospective Srudents "}, {path: router.location.pathname, name: "Add Prospective Students "}]} />

      <div className="card">
        <h2 className="page-header"> Add Prospective Students</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div className="row">
                <div className="col-12 d-flex justify-content-between">
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
                <div className="col-md-9">
                  <div className="form-group my-3">
                    <label htmlFor="title" className="label">
                      Title {lng[active].toUpperCase()}
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={content[`title_${lng[active]}`] || ""}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          [`title_${lng[active]}`]: e.target.value,
                        })
                      }
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group my-3">
                    <label htmlFor="page" className="label">
                      Page
                    </label>
                    <select
                      className="form-control"
                      onChange={(e) =>
                        setContent({ ...content, page: e.target.value })
                      }
                    >
                      {pages_prospective.map((v, i) => (
                        <option value={v.page} key={i}>
                          {v.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <Editor
                setContent={setContent}
                content={content}
                lng={lng[active]}
                url={"api/file/students/add"}
              />
              <div className="d-flex mt-5">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (content) {
                      addProspectiveStudents(content, router);
                    }
                  }}
                >
                  Add Prospective Students
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsAdd;
