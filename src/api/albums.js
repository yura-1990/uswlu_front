import axios_instance from "./helpers/axios_instance";
import notify from "../hooks/notify";
const addAlbums = async (data, openModal, setData, setAllPhoto) => {
  try {
    const form_data = new FormData();
    form_data.append("file", data);
    const res = await axios_instance.post("gallery/add", form_data);
    notify({
      text: res.data.message,
      status: true,
    });
    openModal();
    setData("");
    getAllAlbums(setAllPhoto);
  } catch (error) {
    notify({
      text: error.response.data.message,
    });
  }
};

const getAllAlbums = async (setAllPhoto) => {
  try {
    const res = await axios_instance.get("gallery/all");
    setAllPhoto(res.data.data);
  } catch (error) {}
};
const removeImage = async (id, setAllPhoto) => {
  try {
    const res = await axios_instance.delete("gallery/delete/" + id);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllAlbums(setAllPhoto);
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

export { addAlbums, getAllAlbums, removeImage };
