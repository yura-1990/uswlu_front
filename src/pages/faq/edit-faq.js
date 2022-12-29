import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { getFaq, updateFaq } from "../../api/faq";
import Breadcrumbs from "../../components/breadcrumb";

const EditFaq = () => {
  const router = useHistory();
  const [faq, setFaq] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getFaq(id, setFaq);
  }, [id]);
  const [answer, setAnswer] = useState("");
  return (
    <div>
      <Breadcrumbs data={[{path: "/faq", name: "Faq"}, {path: router.location.pathname, name: "Edit Faq"}]} />

      <div className="card">
        <h2 className="page-header">View Faq</h2>
      </div>
      <div className="card">
        <div className="card_body">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td className="label"> Full name </td>
                <td className="label"> {faq?.fullName} </td>
              </tr>
              <tr>
                <td className="label"> Email </td>
                <td className="label"> {faq?.email} </td>
              </tr>
              <tr>
                <td className="label"> Phone </td>
                <td className="label"> {faq?.phone} </td>
              </tr>
              <tr>
                <td className="label"> Question </td>
                <td className="label"> {faq?.question} </td>
              </tr>
              <tr>
                <td className="label"> Answer </td>
                <td className="label"> {faq?.answer} </td>
              </tr>
              <tr>
                <td className="label"> Date </td>
                <td className="label">
                  {" "}
                  {new Date(faq?.createdAt).toString().slice(0, 16)}{" "}
                </td>
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
                onClick={() => updateFaq({ answer, id }, router)}
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

export default EditFaq;
