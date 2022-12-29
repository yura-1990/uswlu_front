import axios_instance from "./helpers/axios_instance";

const login = async (data, route) => {
  try {
    const res = await axios_instance.post("user/login", data);
    if (res.status) {
      localStorage.setItem("token", res.data.token);
      route.push("/");
      window.location.reload();
    }
  } catch (error) {
    localStorage.clear();
    route.push("/login");
  }
};

export { login };
