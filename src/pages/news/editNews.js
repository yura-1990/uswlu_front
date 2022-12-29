import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { editNews, updateNews } from "../../api/news";
import Breadcrumbs from "../../components/breadcrumb";
import Editor from "../../components/Editor/Editor";

const EditNews = () => {
  const router = useHistory();
  const { id } = useParams();

  const [content, setContent] = useState({
    description_uz: "",
    description_ru: "",
    description_en: "",
    description_ae: "",
    description_cn: "",
    type: "news",
  });
  const [active, setActive] = useState(0);
  const lng = ["uz", "en", "ru", "ae", "cn"];
  useEffect(() => {
    editNews(id, setContent);
  }, [id]);
  return (
    <div>
      <Breadcrumbs
        data={[
          { path: `/news`, name: "News" },
          { path: router.location.pathname, name: "News edit" },
        ]}
      />
      <div className="card">
        <h2 className="page-header">Edit news</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
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
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-12">
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

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="type" className="label">
                          Type
                        </label>
                        <select
                          name="type"
                          id="type"
                          className="form-control"
                          onChange={(e) =>
                            setContent({ ...content, type: e.target.value })
                          }
                        >
                          <option value="news">News</option>
                          <option value="event">Event</option>
                          <option value="announcement">Announcement</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label className="label">Slider</label>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onChange={() =>
                              setContent({
                                ...content,
                                slider: !content.slider,
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Editor
                    content={content}
                    setContent={setContent}
                    lng={lng[active]}
                  />
                </div>
                <div className="col-md-3">
                  <div className="mt-4">
                    <div className="user-image">
                      {typeof content.file == "object" ? (
                        <img src={URL.createObjectURL(content?.file)} alt="" />
                      ) : content.image ? (
                        <img
                          src={process.env.REACT_APP_API_URL + content.image}
                          alt=""
                        />
                      ) : (
                        <span>Upload image</span>
                      )}
                    </div>
                    <input
                      type="file"
                      className="d-none visibility-hidden"
                      id="file"
                      name="file"
                      accept="image/*"
                      onChange={(e) =>
                        setContent({ ...content, file: e.target.files[0] })
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
              </div>
              <div className="my-4 text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (content[`description_${lng[active]}`]) {
                      updateNews(content, router);
                    }
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNews;
