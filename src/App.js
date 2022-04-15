import React, { useEffect, useState } from "react";
import weatherApi from "./server/api";
import WeatherApp from "./weather";
import "./App.css";

import axiosClient from "./server/AxiosClient";
function App() {
  // const [city, setCity] = useState("Nha Trang");
  // const [data, setData] = useState();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await weatherApi.cityWeather(city);
  //       setData(response);
  //       console.log(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   })();
  // }, []);

  return <WeatherApp />;
}

export default App;
