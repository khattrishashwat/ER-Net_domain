import axios from "axios";
// import Swal from "sweetalert2";

// Create Axios instance
const httpClient = axios.create({
  // baseURL: "http://192.168.5.185:9739/ernet/app/v1",
  // baseURL: "http://44.195.125.80:9739/ernet/app/v1",
  baseURL: "https://webmobrildemo.com/ernet/app/v1",
});

// Request Interceptor
httpClient.interceptors.request.use(
  (request) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("name");

      window.location.href = "/";
      //   Swal.fire({
      //     icon: "warning",
      //     title: "Session Expired",
      //     text: "Please log in again.",
      //     confirmButtonText: "OK",
      //     allowOutsideClick: false,
      //   }).then(() => {
      //   });
    }

    return Promise.reject(error);
  }
);

export default httpClient;
