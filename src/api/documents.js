import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
const addDocuments = async (data, router) => {
  try {
    const res = await axios_instance.post("documents/add", data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/documents");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const getDocuments = async (id, setDocuments) => {
  try {
    const res = await axios_instance.get("documents/" + id);
    setDocuments(res.data.data);
  } catch (error) {}
};

const getAllDocuments = async (setAllDocuments) => {
  try {
    const res = await axios_instance.get("documents/view/all");
    setAllDocuments(res.data.data);
  } catch (error) {}
};

const removeDocuments = async (id, setAllDocuments) => {
  try {
    const res = await axios_instance.delete(`documents/delete/${id}`);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllDocuments(setAllDocuments);
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const updateDocuments = async (data, router) => {
  try {
    const res = await axios_instance.put("documents/update/" + data._id, data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/documents");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

export {
  addDocuments,
  getDocuments,
  getAllDocuments,
  removeDocuments,
  updateDocuments,
};
