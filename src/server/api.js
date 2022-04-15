import axiosClient from "./AxiosClient";

const apiKey = "28c2d5004a1c2234b08325ec2e903bd3";

const weatherApi = {
  cityWeather(city) {
    const url = `/weather?q=${city}&appid=${apiKey}`;
    return axiosClient.get(url, city);
  },
};

export default weatherApi;
