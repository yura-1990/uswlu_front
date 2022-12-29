import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
const addActivity = async (data, router) => {
  try {
    const res = await axios_instance.post("activity/add", data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/activity");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const getActivity = async (id, setActivity) => {
  try {
    const res = await axios_instance.get("activity/" + id);
    setActivity(res.data.data);
  } catch (error) {}
};

const getAllActivity = async (setAllActivity) => {
  try {
    const res = await axios_instance.get("activity/view/all");
    setAllActivity(res.data.data);
  } catch (error) {}
};

const removeActivity = async (id, setAllActivity) => {
  try {
    const res = await axios_instance.delete(`activity/delete/${id}`);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllActivity(setAllActivity);
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const updateActivity = async (data, router) => {
  try {
    const res = await axios_instance.put("activity/update/" + data._id, data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/activity");
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

export {
  addActivity,
  getActivity,
  getAllActivity,
  removeActivity,
  updateActivity,
};
