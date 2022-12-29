import notify from "../hooks/notify";
import axios_instance from "./helpers/axios_instance";
const getAllFaq = async (setAllFaq) => {
  try {
    const res = await axios_instance.get("faq/all");
    setAllFaq(res.data.data);
  } catch (error) {}
};
const getFaq = async (id, setFaq) => {
  try {
    const res = await axios_instance.get("faq/" + id);
    setFaq(res.data.data);
  } catch (error) {}
};
const removeFaq = async (id, setAllFaq) => {
  try {
    const res = await axios_instance.delete("faq/delete/" + id);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllFaq(setAllFaq);
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};
const updateFaq = async (data, router) => {
  try {
    const res = await axios_instance.patch("faq/answer/" + data.id, data);
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/faq");
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

export { getAllFaq, getFaq, removeFaq, updateFaq };
