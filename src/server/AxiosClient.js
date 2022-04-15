import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  "Content-Type": "application/json",
});

// Interceptor
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const { config, status, data } = error.response;
    // console.log(status);
    // console.log(data);
    // console.log(config);
    // if (status === 401) {
    //   alert("Tài khoảng hoặc mật khẩu không chính xác");
    // }
    return Promise.reject(error);
  }
);

export default axiosClient;
