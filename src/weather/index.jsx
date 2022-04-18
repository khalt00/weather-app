import weatherApi from "../server/api";
import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherdata, setWeatherData] = useState({});
  const [input, setInput] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await weatherApi.cityWeather(city);
        setWeatherData(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [city]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
    setInput("");
  };
  const handleGetValue = (e) => {
    const name = e.target.value;
    setInput(name);
  };

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

    return formattedTime;
  }

  const images_link = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <div className="search__part">
          <input
            className="search__bar"
            placeholder="Hãy nhập tên thành phố"
            value={input}
            onChange={handleGetValue}
          />
          <button type="submit" className="btn__search">
            search
          </button>
        </div>
      </form>
      <div
        className={
          (weatherdata?.main?.temp - 273.15).toFixed(0) < 16
            ? "card_cold"
            : "card"
        }
      >
        {typeof weatherdata.weather != "undefined" ? (
          <div className="card__head">
            <h1 className="city__name">
              {weatherdata.name ?? ""},{weatherdata?.sys?.country}
            </h1>
            <img
              src={images_link(weatherdata?.weather[0]?.icon)}
              alt="discript of the weather"
            />
            <div className="status">{weatherdata?.weather[0]?.main}</div>
            <div className="card__info">
              <div className="date">
                {Date(weatherdata.dt).substring(-10, 25)}
              </div>
              <div className="temp">
                {(weatherdata?.main?.temp - 273.15).toFixed(0)} &#8451;
              </div>
              <div className="sun">
                <div className="sun__rise">
                  Sunrise:
                  {convTime(weatherdata?.sys?.sunrise)}
                </div>
                <div className="sun__set">
                  Sunset:
                  {convTime(weatherdata?.sys?.sunset)}
                </div>
              </div>
              <div className="wind"></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default WeatherApp;
