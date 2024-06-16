import axios from "axios";

const discussionService = axios.create({
  baseURL: import.meta.env.VITE_DISCUSSION_SERVICE_URL,
  withCredentials: true,
});

export default discussionService;
