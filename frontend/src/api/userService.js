import axios from "axios";

const userService = axios.create({
  baseURL: import.meta.env.VITE_USER_SERVICE_URL,
  withCredentials: true,
});

export default userService;
