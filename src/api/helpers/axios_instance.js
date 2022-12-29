const { default: axios } = require("axios");

const axios_instance = axios.create({
  baseURL: "https://uzswlu-diyorbek.herokuapp.com/api/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axios_instance;
