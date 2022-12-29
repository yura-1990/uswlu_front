import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
const addSection = async (data, router) => {
  try {
    const res = await axios_instance.post("section/add", data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/sections");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const getSection = async (id, setSection) => {
  try {
    const res = await axios_instance.get("section/" + id);
    setSection(res.data.data);
  } catch (error) {}
};
const getAllSection = async (setAllSection) => {
  try {
    const res = await axios_instance.get("section/all");
    setAllSection(res.data.data);
  } catch (error) {}
};

const removeSection = async (id, setAllSection) => {
  try {
    const res = await axios_instance.delete(`section/delete/${id}`);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllSection(setAllSection);
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const updateSection = async (data, router) => {
  try {
    const res = await axios_instance.put("section/update/" + data._id, data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/sections");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

export { addSection, getSection, getAllSection, removeSection, updateSection };
