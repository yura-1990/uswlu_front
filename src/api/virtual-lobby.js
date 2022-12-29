import notify from "../hooks/notify";
import { All_virtual_lobby } from "../redux/actions/GlobalActions";
import axios_instance from "./helpers/axios_instance";
const getAllVirtualLobby = async () => {
  try {
    const res = await axios_instance.get("virtual-reception/all");
    console.log(res);
    All_virtual_lobby(res.data.data);
  } catch (error) {}
};

const updateVirtualLobby = async (data, router) => {
  try {
    const res = await axios_instance.patch(
      "virtual-reception/answer/" + data.id,
      data
    );
    notify({
      text: res.data.message,
      status: true,
    });
    router.push("/virtual-lobby");
    getAllVirtualLobby();
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};

const removeVirtualLobby = async (id) => {
  try {
    const res = await axios_instance.delete(`virtual-reception/delete/${id}`);
    notify({
      text: res.data.message,
      status: true,
    });
    getAllVirtualLobby();
  } catch (error) {
    notify({
      text: error?.response?.data?.message,
    });
  }
};
const editVirtualLobby = async (id, setData) => {
  try {
    const res = await axios_instance.get(`virtual-reception/view/${id}`);
    setData(res.data.data);
  } catch (error) {}
};

export {
  getAllVirtualLobby,
  updateVirtualLobby,
  removeVirtualLobby,
  editVirtualLobby,
};
