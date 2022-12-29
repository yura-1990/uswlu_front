import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
const addDocs = async (data, router) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.post("docs/add", form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/education-docs");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const getDocs = async (id, setDocs) => {
  try {
    const res = await axios_instance.get("docs/" + id);
    setDocs(res.data.data);
  } catch (error) {}
};

const getAllDocs = async (setAllDocs) => {
  try {
    const res = await axios_instance.get("docs/all");
    setAllDocs(res.data.data);
  } catch (error) {}
};

const removeDocs = async (id, setAllDocs) => {
  try {
    const res = await axios_instance.delete(`docs/delete/${id}`);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllDocs(setAllDocs);
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const updateDocs = async (data, router) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.put("docs/update/" + data._id, form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/education-docs");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

export { addDocs, getDocs, getAllDocs, removeDocs, updateDocs };
