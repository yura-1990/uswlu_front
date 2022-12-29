import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
const addProspectiveStudents = async (data, router) => {
  try {
    const res = await axios_instance.post("students/add", data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/prospective-students");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const getProspectiveStudents = async (id, setProspectiveStudents) => {
  try {
    const res = await axios_instance.get("students/" + id);
    setProspectiveStudents(res.data.data);
  } catch (error) {}
};

const getAllProspectiveStudents = async (setAllProspectiveStudents) => {
  try {
    const res = await axios_instance.get("students/view/all");
    setAllProspectiveStudents(res.data.data);
  } catch (error) {}
};

const removeProspectiveStudents = async (id, setAllProspectiveStudents) => {
  try {
    const res = await axios_instance.delete(`students/delete/${id}`);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllProspectiveStudents(setAllProspectiveStudents);
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const updateProspectiveStudents = async (data, router) => {
  try {
    const res = await axios_instance.put("students/update/" + data._id, data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/prospective-students");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

export {
  addProspectiveStudents,
  getProspectiveStudents,
  getAllProspectiveStudents,
  removeProspectiveStudents,
  updateProspectiveStudents,
};
