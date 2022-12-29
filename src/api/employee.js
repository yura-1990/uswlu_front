import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";

const getAllEmployee = async (setAllEmployee) => {
  try {
    const res = await axios_instance.get("employee/all");
    setAllEmployee(res.data.data);
  } catch (error) {}
};

const getEmployee = async (id, setData) => {
  try {
    const res = await axios_instance.get("employee/" + id);
    setData(res.data.data);
  } catch (error) {}
};

const removeEmployee = async (id, setAllEmployee) => {
  try {
    const res = await axios_instance.delete("employee/delete/" + id);
    getAllEmployee(setAllEmployee);
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
const addEmployee = async (data, router) => {
  try {
    const from_data = new FormData();
    Object.keys(data).forEach((item) => {
      from_data.append(item, data[item]);
    });
    const res = await axios_instance.post("employee/add", from_data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/employees");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};
const updateEmployee = async (data, router) => {
  try {
    const from_data = new FormData();
    Object.keys(data).forEach((item) => {
      from_data.append(item, data[item]);
    });
    const res = await axios_instance.put(
      "employee/update/" + data._id,
      from_data
    );
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/employees");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

export {
  getAllEmployee,
  getEmployee,
  removeEmployee,
  addEmployee,
  updateEmployee,
};
