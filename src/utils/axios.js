import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002/api",
});

instance.interceptors.request.use((config) => {
  //this action is for checking our token every time we making request
  config.headers.Authorization = window.localStorage.getItem("token");

  return config;
});

export default instance;
