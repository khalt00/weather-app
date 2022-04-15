import weatherApi from "../server/api";
import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("Nha Trang");
  const [weatherdata, setWeatherData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await weatherApi.cityWeather("Nha Trang");
        console.log(response);
        setWeatherData(response);
        console.log("data tra ve:");
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  function convTime(time) {
    const unix_timestamp = time;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = date.getMinutes().toString();
    // Seconds part from the timestamp
    const seconds = date.getSeconds().toString();

    // Will display time in 10:30:23 format
    const formattedTime = hours + ":" + minutes + ":" + seconds;

    console.log(formattedTime);
    return formattedTime;
  }

  return (
    <>
      <div className="search">
        <input className="search__bar" />
        <button className="btn__search">search</button>
      </div>
      <div className="card">
        <div className="card__head">
          <h1 className="city__name">{weatherdata.name ?? ""}</h1>

          <div className="card__info">
            <div className="date">
              {Date(weatherdata.dt).substring(-10, 25)}
            </div>
            <div className="temp">
              Nhiệt độ: {(weatherdata?.main?.temp - 273.15).toFixed(0)} &#8451;
            </div>
            <div className="sun">
              <div className="sun__rise">
                Mặt trời mọc:
                {convTime(weatherdata?.sys?.sunrise)}
              </div>
              <div className="sun__set">
                Mặt trời lặn:
                {convTime(weatherdata?.sys?.sunset)}
              </div>
            </div>
            <div className="visibility"></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WeatherApp;
