import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
const getAllDepartments = async (setAllDepartments) => {
  try {
    const res = await axios_instance.get("department/all");
    setAllDepartments(res.data.data);
  } catch (error) {}
};

const add_departments = async (data, route) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.post("department/add", form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    route.push("/departments");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const removeDepartments = async (id, setAllDepartments) => {
  try {
    const res = await axios_instance.delete(`department/delete/${id}`);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllDepartments(setAllDepartments);
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const update_departments = async (data, route) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.put(
      "department/update/" + data._id,
      form_data
    );
    notify({
      text: res.data.message,
      status: true,
    });
    route.push("/departments");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};
const edit_departments = async (id, setData) => {
  try {
    const res = await axios_instance.get("department/" + id);
    setData(res.data.data);
  } catch (error) {}
};

export {
  getAllDepartments,
  add_departments,
  removeDepartments,
  update_departments,
  edit_departments,
};
