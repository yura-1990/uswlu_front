import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { getAdmission, updateAdmission } from "../../api/admission";

import Editor from "../../components/Editor/Editor";
import { admission } from "../../data/admission";
import Breadcrumbs from "../../components/breadcrumb";

const AdmissionEdit = () => {
  const router = useHistory();
  const { id } = useParams();
  const [content, setContent] = useState({
    description_uz: "",
    description_en: "",
    description_ru: "",
    description_ae: "",
    description_cn: "",
    page: "structure",
  });
  const [active, setActive] = useState(0);
  const lng = ["uz", "ru", "en", "ae", "cn"];
  useEffect(() => {
    getAdmission(id, setContent);
  }, [id]);

  return (
    <div>
      <Breadcrumbs data={[{path: "/admission", name: "Admission "}, {path: router.location.pathname, name: "Edit Admission "}]} />
      <div className="card">
        <h2 className="page-header"> Update Admission</h2>
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
                      {admission.map((v, i) => (
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
                url={"api/file/activity/add"}
              />
              <div className="d-flex mt-5">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (content) {
                      updateAdmission(content, router);
                    }
                  }}
                >
                  Update Admission
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionEdit;
