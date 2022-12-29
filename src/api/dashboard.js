import axios_instance from "./helpers/axios_instance";

const getAllInfo = async (setAllInfo) => {
  try {
    const res = await axios_instance.get("info/all");
    setAllInfo(res.data.data);
  } catch (error) {}
};

export { getAllInfo };
