import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";

const getAllInfo = async (setAllInfo) => {
  try {
    const res = await axios_instance.get("info/all");
    setAllInfo(res.data.data);
  } catch (error) {}
};

const addInfo = async (data, setData, closeModal) => {
  try {
    const res = await axios_instance.post("info/add", data);
    closeModal();

    notify({
      text: res.data.message,
      status: true,
    });

    getAllInfo(setData);
  } catch (error) {
    console.log(error);
    notify({
      text: error.response?.data?.message,
    });
  }
};

const removeInfo = async (id, setData) => {
  try {
    const res = await axios_instance.delete(`info/delete/${id}`);
    getAllInfo(setData);
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
const updateInfo = async (data, setData, closeModal) => {
  try {
    const res = await axios_instance.put(`info/update/${data._id}`, data);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllInfo(setData);
    closeModal();
  } catch (error) {
    notify({
      text: error.response?.data?.message,
    });
  }
};
const editInfo = async (id, setEdit, setData, openAddModal) => {
  try {
    const res = await axios_instance.get(`info/${id}`);
    setData(res.data.data);
    setEdit(true);
    openAddModal();
  } catch (error) {}
};

export { getAllInfo, editInfo, removeInfo, updateInfo, addInfo };
