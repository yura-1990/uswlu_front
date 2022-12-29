import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
import { All_vacancy } from "../redux/actions/GlobalActions";

const addVacancy = async (data, closeModal) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.post("vacancy/add", form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    closeModal();
    getAllVacancy();
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const getAllVacancy = async () => {
  try {
    const res = await axios_instance.get("vacancy/all");
    All_vacancy(res.data.data);
  } catch (error) {}
};

const removeVacancy = async (id) => {
  try {
    const res = await axios_instance.delete(`vacancy/delete/${id}`);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllVacancy();
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const updateVacancy = async (id, data, closeModal) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.put(`vacancy/update/${id}`, form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllVacancy();
    closeModal();
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const editVacancy = async (id, setData, setEdit, openAddModal) => {
  try {
    const res = await axios_instance.get(`vacancy/${id}`);
    setData(res.data.data);
    setEdit(true);
    openAddModal();
    console.log(res);
  } catch (error) {}
};

export { addVacancy, getAllVacancy, removeVacancy, updateVacancy, editVacancy };
