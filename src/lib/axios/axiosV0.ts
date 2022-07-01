import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const axiosClientV1 = axios.create({
  baseURL: process.env.REACT_APP_OLD_API_URL,
  headers: {
    'Content-Type': 'application/json',

    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, x-requested-with',
    'Access-Control-Allow-Origin': 'http://dev.hexabase.com/',
    Accept: '*/*',
  },
});

// Interceptor
// Add a request interceptor
axiosClientV1.interceptors.request.use(
  function (config) {
    if (sessionStorage.getItem('TOKEN')) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ` + JSON.parse(sessionStorage.getItem('TOKEN') as string),
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClientV1.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data) {
      response.data = camelcaseKeys(response.data, { 
        deep: true,
        exclude: [/^[a-zA-Z0-9 ]*$/] // exclude object with id as key
      });
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClientV1;
