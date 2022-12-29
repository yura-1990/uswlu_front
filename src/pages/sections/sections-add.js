import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addSection } from "../../api/section";
import Editor from "../../components/Editor/Editor";
import Breadcrumbs from "../../components/breadcrumb";

const SectionsAdd = () => {
  const router = useHistory();
  const [content, setContent] = useState({
    description_uz: "",
    description_en: "",
    description_ru: "",
    description_ae: "",
    description_cn: "",
  });
  const [active, setActive] = useState(0);
  const lng = ["uz", "ru", "en", "ae", "cn"];

  return (
    <div>
      <Breadcrumbs
          data={[{path: `/sections`, name: "Sections"}, {path: router.location.pathname, name: "Add Section"}]}/>
      <div className="card">
        <h2 className="page-header">Add Section</h2>
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
                <div className="col-9">
                  <div className="form-group my-3">
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="title"
                      value={content[`name_${lng[active]}`] || ""}
                      onChange={(e) =>
                        setContent({
                          ...content,
                          [`name_${lng[active]}`]: e.target.value,
                        })
                      }
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group my-3">
                    <label htmlFor="name" className="label">
                      Employees
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={content.type || ""}
                      onChange={(e) =>
                        setContent({ ...content, type: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <Editor
                setContent={setContent}
                content={content}
                lng={lng[active]}
              />
              <div className="d-flex mt-5">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (content) {
                      addSection(content, router);
                    }
                  }}
                >
                  Add Section
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionsAdd;
