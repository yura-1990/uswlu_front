import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
import { All_sites } from "../redux/actions/GlobalActions";
const addSites = async (data, closeModal) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((item) => {
      formData.append(item, data[item]);
    });
    const res = await axios_instance.post("sites/add", formData);
    closeModal();
    notify({
      text: res.data.message,
      status: true,
    });
    getAllSites();
  } catch (error) {
    console.log(error);
    notify({
      text: error.response?.data?.message,
    });
  }
};

const getAllSites = async () => {
  try {
    const res = await axios_instance.get("sites/all");
    All_sites(res.data.data);
  } catch (error) {}
};
const removeSites = async (id) => {
  try {
    const res = await axios_instance.delete(`sites/delete/${id}`);
    getAllSites();
    notify({
      text: res.data.message,
      status: true,
    });
  } catch (error) {
    notify({
      text: error.response?.data?.message,
    });
  }
};
const updateSite = async (id, data, closeModal) => {
  try {
    const formData = new FormData();
    const all_data = Object.keys(data);
    all_data.forEach((item) => {
      formData.append(item, data[item]);
    });
    const res = await axios_instance.put(`sites/update/${id}`, formData);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllSites();
    closeModal();
  } catch (error) {
    notify({
      text: error.response?.data?.message,
    });
  }
};
const editSite = async (id, setEdit, setData, openAddModal) => {
  try {
    const res = await axios_instance.get(`sites/${id}`);
    setData(res.data.data);
    setEdit(true);
    openAddModal();
  } catch (error) {}
};

export { addSites, getAllSites, removeSites, editSite, updateSite };
