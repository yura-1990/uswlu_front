import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addActivity } from "../../api/activity";
import Editor from "../../components/Editor/Editor";
import Breadcrumbs from "../../components/breadcrumb";

const ActivityAdd = () => {
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
  const pages = [
    {
      title: "Avtoreferatlar",
      page: "abstracts",
    },
    {
      title: "Doktorantura mutaxassisliklari",
      page: "doctoral-specialties",
    },
    {
      title: "Ilmiy tadqiqot faoliyati",
      page: "scientific-research",
    },
    {
      title: "Doktoranturaga oid e'lonlar",
      page: "doctoral-ads",
    },
    {
      title: "Mening innovatsion g'oyam",
      page: "my-innovation-idea",
    },
    {
      title: "Universitet bitiruvchilari haqida",
      page: "about-university-graduates",
    },
    {
      title: "Malakaviy imtihon",
      page: "qualifying",
    },
    {
      title: "Ixtisoslashgan kengash",
      page: "specialized-board",
    },
    {
      title: "Ilmiy jurnal",
      page: "scietific-journal",
    },
    {
      title: "Ilmiy tadbirlar",
      page: "scientific-activities",
    },
    {
      title: "Doktorantlar uyushmasi faoliyati",
      page: "doctotral-association",
    },
    {
      title: "Universitet ilmiy kengashi",
      page: "univer-academic-council",
    },
    {
      title: "Ilmiy tadqiqotga oid hujjatlar",
      page: "documents-related",
    },
  ];
  return (
    <div>
      <Breadcrumbs data={[{path: "/activity", name: "Activity "}, {path: router.location.pathname, name: "Add Activity "}]} />
      <div className="card">
        <h2 className="page-header">Add Activity</h2>
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
                      {pages.map((v, i) => (
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
                      addActivity(content, router);
                    }
                  }}
                >
                  Add Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityAdd;
