import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
const add_faculty = async (data, router) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.post("faculty/add", form_data);

    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/faculty");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};
const updateFaculty = async (data, router) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.put(
      "faculty/update/" + data._id,
      form_data
    );

    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/faculty");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const getAllFaculty = async (setAllFaculty) => {
  try {
    const res = await axios_instance.get("faculty/all");
    setAllFaculty(res.data.data);
  } catch (error) {}
};
const getFaculty = async (id, setData) => {
  try {
    const res = await axios_instance.get("faculty/" + id);
    setData(res.data.data);
  } catch (error) {}
};
const removeFaculty = async (id, setAllFaculty) => {
  try {
    const res = await axios_instance.delete("faculty/delete/" + id);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllFaculty(setAllFaculty);
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

export { add_faculty, getAllFaculty, updateFaculty, removeFaculty, getFaculty };
