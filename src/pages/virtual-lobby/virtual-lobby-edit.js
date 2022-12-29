/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { editVirtualLobby, updateVirtualLobby } from "../../api/virtual-lobby";
import Breadcrumbs from "../../components/breadcrumb";

const EditVirtualLobby = () => {
  const router = useHistory();
  const [faq, setFaq] = useState({});
  const { id } = useParams();
  useEffect(() => {
    editVirtualLobby(id, setFaq);
  }, [id]);
  const [answer, setAnswer] = useState("");
  return (
    <div>
      <Breadcrumbs data={[{path: "/virtual-lobby", name: "Virtual Lobby"}, {path: router.location.pathname, name: "Edit Virtual Lobby"}]} />
      <div className="card">
        <h2 className="page-header">View Virtual lobby</h2>
      </div>
      <div className="card">
        <div className="card_body">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td className="label"> Receiving Rector </td>
                <td className="label"> {faq?.receivingRector} </td>
              </tr>
              <tr>
                <td className="label"> Full name </td>
                <td className="label"> {faq?.fullName} </td>
              </tr>

              <tr>
                <td className="label"> Email </td>
                <td className="label"> {faq?.email} </td>
              </tr>
              <tr>
                <td className="label"> Personality </td>
                <td className="label"> {faq?.personality} </td>
              </tr>
              <tr>
                <td className="label"> Phone </td>
                <td className="label"> {faq?.tel} </td>
              </tr>

              <tr>
                <td className="label"> Passport info </td>
                <td className="label"> {faq?.passport_info} </td>
              </tr>
              <tr>
                <td className="label"> Fax </td>
                <td className="label"> {faq?.fax} </td>
              </tr>
              <tr>
                <td className="label"> Residence </td>
                <td className="label"> {faq?.residence} </td>
              </tr>
              <tr>
                <td className="label"> Address </td>
                <td className="label"> {faq?.address} </td>
              </tr>
              <tr>
                <td className="label"> Type </td>
                <td className="label"> {faq?.type} </td>
              </tr>
              <tr>
                <td className="label"> Date </td>
                <td className="label">
                  {new Date(faq?.createdAt).toString().slice(0, 16)}{" "}
                </td>
              </tr>
              <tr>
                <td className="label"> Question </td>
                <td className="label"> {faq?.question} </td>
              </tr>
              <tr>
                <td className="label"> File </td>
                <td className="label">
                  {" "}
                  {faq?.file?.length > 0 &&
                    faq?.file.map((v, i) => (
                      <a
                        href={process.env.REACT_APP_API_URL + v}
                        key={i}
                        target="_blank"
                        download
                      >
                        File {i + 1}
                      </a>
                    ))}
                </td>
              </tr>
              <tr>
                <td className="label"> Answer </td>
                <td className="label"> {faq?.answer} </td>
              </tr>
            </tbody>
          </table>
          <div className="answer my-3">
            <div className="row">
              <div className="col-md-11">
                <label htmlFor="answer" className="label">
                  Answer
                </label>
                <input
                  type="text"
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                />
              </div>
              <div
                className="col-md-1 d-flex align-items-end"
                onClick={() => updateVirtualLobby({ answer, id }, router)}
              >
                <button className="btn btn-primary"> Send </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVirtualLobby;
