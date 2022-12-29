import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";

const getAllDoubleDegreePrograms = async (setAllPrograms) => {
  try {
    const res = await axios_instance.get("joint-training-system/all");
    setAllPrograms(res.data.data);
  } catch (error) {}
};

const addPrograms = async (data, setData, closeModal) => {
  try {
    const res = await axios_instance.post("joint-training-system/add", data);
    closeModal();

    notify({
      text: res.data.message,
      status: true,
    });

    getAllDoubleDegreePrograms(setData);
  } catch (error) {
    console.log(error);
    notify({
      text: error.response?.data?.message,
    });
  }
};

const removePrograms = async (id, setData) => {
  try {
    const res = await axios_instance.delete(
      `joint-training-system/delete/${id}`
    );
    getAllDoubleDegreePrograms(setData);
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
const updatePrograms = async (data, setData, closeModal) => {
  try {
    const res = await axios_instance.put(
      `joint-training-system/update/${data._id}`,
      data
    );
    notify({
      text: res.data.message,
      status: true,
    });
    getAllDoubleDegreePrograms(setData);
    closeModal();
  } catch (error) {
    notify({
      text: error.response?.data?.message,
    });
  }
};
const editPrograms = async (id, setEdit, setData, openAddModal) => {
  try {
    const res = await axios_instance.get(`joint-training-system/${id}`);
    setData(res.data.data);
    setEdit(true);
    openAddModal();
  } catch (error) {}
};

export {
  getAllDoubleDegreePrograms,
  editPrograms,
  removePrograms,
  updatePrograms,
  addPrograms,
};
