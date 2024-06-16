import axios from "axios";

const interactionService = axios.create({
  baseURL: import.meta.env.VITE_INTERACTION_SERVICE_URL,
  withCredentials: true,
});

export default interactionService;
