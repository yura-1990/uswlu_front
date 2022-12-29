import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
import { All_partners } from "../redux/actions/GlobalActions";
const addPartners = async (data, closeModal) => {
  try {
    const formData = new FormData();
    const alldata = Object.keys(data);
    alldata.forEach((item) => {
      formData.append(item, data[item]);
    });
    const res = await axios_instance.post("partner/add", formData);
    closeModal();
    notify({
      text: res.data.message,
      status: true,
    });
    getAllPartners();
  } catch (error) {
    console.log(error);
    notify({
      text: error.response.message,
    });
  }
};

const getAllPartners = async () => {
  try {
    const res = await axios_instance.get("partner/all");
    All_partners(res.data.data);
  } catch (error) {}
};
const removePartners = async (id) => {
  try {
    const res = await axios_instance.delete(`partner/delete/${id}`);
    getAllPartners();
    notify({
      text: res.data.message,
      status: true,
    });
  } catch (error) {
    notify({
      text: error.response.message,
    });
  }
};
const updatePartners = async (id, data, closeModal) => {
  try {
    const formData = new FormData();
    const all_data = Object.keys(data);
    all_data.forEach((item) => {
      formData.append(item, data[item]);
    });
    const res = await axios_instance.put(`partner/update/${id}`, formData);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllPartners();
    closeModal();
  } catch (error) {
    notify({
      text: error.response.message,
    });
  }
};
const editPartners = async (id, setEdit, setData, openAddModal) => {
  try {
    const res = await axios_instance.get(`partner/${id}`);
    setData(res.data.data);
    setEdit(true);
    openAddModal();
  } catch (error) {}
};

export {
  addPartners,
  getAllPartners,
  removePartners,
  editPartners,
  updatePartners,
};
