import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";

const addNews = async (data, history) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.post("news/add", form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    history.push("/news");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const getAllNews = async (setNews) => {
  try {
    const res = await axios_instance.get("news/admin");
    setNews(res.data.data);
  } catch (error) {}
};

const removeNews = async (id, setNews) => {
  try {
    const res = await axios_instance.delete("news/delete/" + id);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllNews(setNews);
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const editNews = async (id, setData) => {
  try {
    const res = await axios_instance.get(`news/${id}`);
    setData(res.data.data);
  } catch (error) {}
};

const updateNews = async (data, history) => {
  try {
    const form_data = new FormData();
    Object.keys(data).forEach((item) => {
      form_data.append(item, data[item]);
    });
    const res = await axios_instance.put("news/update/" + data._id, form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    history.push("/news");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};
export { addNews, getAllNews, removeNews, editNews, updateNews };
