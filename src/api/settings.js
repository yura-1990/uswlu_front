import notify from "../hooks/notify";
import axios_instance from "./helpers/axios_instance";

const addUser = async (data, setAllUser) => {
  try {
    const res = await axios_instance.post("admin/add", data);
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

const getAllUsers = async (setAllUser) => {
  try {
    const res = await axios_instance.get("admin/all");
    setAllUser(res.data.data);
  } catch (error) {}
};

const removeUser = async (id, setAllUser) => {
  try {
    const res = await axios_instance.delete("admin/delete/" + id);
    setAllUser(res.data.data);
  } catch (error) {}
};
export { addUser, getAllUsers, removeUser };
