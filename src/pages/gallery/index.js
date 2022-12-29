import React, { useState } from "react";
import Album from "./album";
import Photos from "./photos";
import Videos from "./videos";
import Breadcrumbs from "../../components/breadcrumb";

const Gallery = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Breadcrumbs data={[{ path: `/gallery`, name: "Gallery" }]} />

      <div className="card">
        <div className="d-flex">
          <button
            className={`btn me-3 ${active === 1 ? "btn-primary" : "btn-light"}`}
            onClick={() => setActive(1)}
          >
            Albums
          </button>
          <button
            className={`btn me-3 ${active === 2 ? "btn-primary" : "btn-light"}`}
            onClick={() => setActive(2)}
          >
            Videos
          </button>
          <button
            className={`btn me-3 ${active === 3 ? "btn-primary" : "btn-light"}`}
            onClick={() => setActive(3)}
          >
            Photos
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {active === 1 && <Album />}
          {active === 2 && <Videos />}
          {active === 3 && <Photos />}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
