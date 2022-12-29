import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
const addAdmission = async (data, router) => {
  try {
    const res = await axios_instance.post("admission/add", data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/admission");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const getAdmission = async (id, setAdmission) => {
  try {
    const res = await axios_instance.get("admission/" + id);
    setAdmission(res.data.data);
  } catch (error) {}
};

const getAllAdmission = async (setAllAdmission) => {
  try {
    const res = await axios_instance.get("admission/view/all");
    setAllAdmission(res.data.data);
  } catch (error) {}
};

const removeAdmission = async (id, setAllAdmission) => {
  try {
    const res = await axios_instance.delete(`admission/delete/${id}`);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllAdmission(setAllAdmission);
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const updateAdmission = async (data, router) => {
  try {
    const res = await axios_instance.put("admission/update/" + data._id, data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/admission");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

export {
  addAdmission,
  getAdmission,
  getAllAdmission,
  removeAdmission,
  updateAdmission,
};
