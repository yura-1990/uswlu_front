import React, { useEffect, useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { addAlbums, getAllAlbums, removeImage } from "../../api/albums";
import { FaTrash } from "react-icons/fa";
const Album = () => {
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState("");
  const [photos, setAllPhoto] = useState([]);
  const openModal = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    getAllAlbums(setAllPhoto);
  }, []);

  console.log(data);
  return (
    <div>

      <div className="card">
        <div className="d-flex justify-content-between">
          <h2 className="page-header"> Albums </h2>
          <button className="btn btn-primary" onClick={openModal}>
            Add Photo
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card__body">
          <div className="row">
            {photos.map((v, i) => (
              <div className="col-md-6 col-lg-3 mb-4  p-4 " key={i}>
                <div className="shadow w-100 p-2">
                  <div className="w100" style={{ height: "350px" }}>
                    <img
                      src={process.env.REACT_APP_API_URL + v.path}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt="gallery"
                    />
                  </div>

                  <div className="mt-2">
                    <button
                      className="btn w-100 btn-danger"
                      onClick={() => removeImage(v._id, setAllPhoto)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isModal} toggle={openModal} centered>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="file" className="w-100">
              <div
                className="w-100 border mb-4 d-flex justify-content-center align-items-center"
                style={{
                  height: "350px",
                  cursor: "pointer",
                }}
              >
                {data ? (
                  <img
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                    }}
                    src={URL.createObjectURL(data)}
                    alt=""
                  />
                ) : (
                  <p className="label">Upload photo</p>
                )}
              </div>
            </label>
            <input
              type="file"
              id="file"
              accept="images/*"
              className="visibility-hidden d-none"
              onChange={(e) => setData(e.target.files[0])}
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={() => addAlbums(data, openModal, setData, setAllPhoto)}
            >
              Add Photo
            </button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Album;
