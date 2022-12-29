import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";

const getAllAddress = async (setAllAddress) => {
  try {
    const res = await axios_instance.get("address/all");
    setAllAddress(res.data.data);
  } catch (error) {}
};

const addAddress = async (data, setData, closeModal) => {
  try {
    const res = await axios_instance.post("address/add", data);
    closeModal();

    notify({
      text: res.data.message,
      status: true,
    });

    getAllAddress(setData);
  } catch (error) {
    console.log(error);
    notify({
      text: error.response?.data?.message,
    });
  }
};

const removeAddress = async (id, setData) => {
  try {
    const res = await axios_instance.delete(`address/delete/${id}`);
    getAllAddress(setData);
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
const updateAddress = async (data, setData, closeModal) => {
  try {
    const res = await axios_instance.put(`address/update/${data._id}`, data);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllAddress(setData);
    closeModal();
  } catch (error) {
    notify({
      text: error.response?.data?.message,
    });
  }
};
const editAddress = async (id, setEdit, setData, openAddModal) => {
  try {
    const res = await axios_instance.get(`address/${id}`);
    setData(res.data.data);
    setEdit(true);
    openAddModal();
  } catch (error) {}
};

export { getAllAddress, editAddress, removeAddress, updateAddress, addAddress };
