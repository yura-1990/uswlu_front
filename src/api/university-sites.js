import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
import { All_university_sites } from "../redux/actions/GlobalActions";
const addUniversitySites = async (data, closeModal) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((item) => {
      formData.append(item, data[item]);
    });
    const res = await axios_instance.post("univer-sites/add", formData);
    closeModal();
    notify({
      text: res.data.message,
      status: true,
    });
    getAllUniversitySites();
  } catch (error) {
    console.log(error);
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const getAllUniversitySites = async () => {
  try {
    const res = await axios_instance.get("univer-sites/all");
    All_university_sites(res.data.data);
  } catch (error) {}
};
const removeUniversitySites = async (id) => {
  try {
    const res = await axios_instance.delete(`univer-sites/delete/${id}`);
    getAllUniversitySites();
    notify({
      text: res.data.message,
      status: true,
    });
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};
const updateUniversitySites = async (id, data, closeModal) => {
  console.log(data);
  try {
    const formData = new FormData();
    const all_data = Object.keys(data);
    all_data.forEach((item) => {
      formData.append(item, data[item]);
    });
    const res = await axios_instance.put(`univer-sites/update/${id}`, formData);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllUniversitySites();
    closeModal();
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};
const editUniversitySites = async (id, setEdit, setData, openAddModal) => {
  try {
    const res = await axios_instance.get(`univer-sites/${id}`);
    setData(res.data.data);
    setEdit(true);
    openAddModal();
  } catch (error) {}
};

export {
  addUniversitySites,
  editUniversitySites,
  getAllUniversitySites,
  updateUniversitySites,
  removeUniversitySites,
};
