import axios from "axios";
import axiosRetry from "axios-retry";
import notify from "../../utils/notify";
import AuthService from "../services/auth.service";
//progress
//import Error components

const Request = axios.create();

axiosRetry(Request, {
  retries: 3,
});

/**
 * Request interceptor
 */
Request.interceptors.request.use((config: any) => {
  const token = AuthService.getAccessToken();
  if (token) {
    if (config.method !== "OPTIONS") {
      // the request header is set here. If we need a additional options,
      //we can set them inside the api.js as well.
      config.headers["Authorization"] = "bearer " + token;
    }
  }
  return config;
});

/**
 * Response interceptor
 */
Request.interceptors.response.use(
  (response: any) => {
    return response.data;
  },

  (err: {
    message: string;
    response: { data?: any; status?: any };
    request: { responseURL: string };
  }) => {
    // connection problem
    if (err && err.message && err.message === "Network Error") {
      notify.error("No Internet connection is detected.");
      throw err;
    }
    if (!err || !err.response) {
      throw err;
    }
    const { status } = err.response;
    const url = err.request.responseURL.split("/");
    const path = url[url.length - 1];

    // 401 - UNAUTHORIZED
    if (status === 401) {
      if (path !== "login" && path !== "logout-user") {
        notify.error("Unauthorized User.");
      }
      throw err.response.data.error;
    }
    // 500 - Internal Error
    if (status >= 500) {
      // notify.error("Internal server error.")
      throw err.response.data.error;
    }
    // OTHER
    throw err.response.data.error;
  }
);

export default Request;
