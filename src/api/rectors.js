import notify from "../hooks/notify";
import axios_instance from "./helpers/axios_instance";
import { All_rectors } from "../redux/actions/GlobalActions";
const addRectors = async (data, route) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.post("rectors/add", form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllRectors();
    route.push("/rectors");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const updateRectors = async (id, data, route) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.put(`rectors/update/${id}`, form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllRectors();
    route.push("/rectors");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const editRectors = async (id, setData, openModal, setEdit) => {
  try {
    const res = await axios_instance.get(`rectors/${id}`);
    setData(res.data.data);
    openModal();
    setEdit(true);
  } catch (error) {}
};

const removeRectors = async (id) => {
  try {
    const res = await axios_instance.delete(`rectors/delete/${id}`);
    getAllRectors();
    notify({
      text: res.data.message,
      status: true,
    });
  } catch (error) {}
};

const getAllRectors = async () => {
  try {
    const res = await axios_instance.get("rectors/all");
    All_rectors(res.data.data);
  } catch (error) {}
};

export { addRectors, updateRectors, editRectors, removeRectors, getAllRectors };
