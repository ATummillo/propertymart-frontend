import axios from "axios";
import notify from "./notificationService";

// Configure interceptor for unexpected errors
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    notify.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

// Configure the base URL
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const requests = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default requests;
