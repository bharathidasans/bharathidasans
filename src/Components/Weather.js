import axios from "axios";
import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import "../Styles/Weather.css";

const Weather = (params) => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const Search = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setInput("");
      setWeather({ ...weather, loading: true });
      const url = "https://api.openweathermap.org/data/2.5/weather";
      const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
      await axios
        .get(url, { params: { q: input, units: "metric", appid: api_key } })
        .then((res) =>
          setWeather({ loading: false, data: res.data, error: false })
        )
        .catch((error) => {
          setWeather({ loading: false, error: true, data: {} });
          setInput("");
        });
    }
  };

  return (
    <div className="weatherContainer">
      <h3>Enter city name below to get weather update</h3>
      <input
        type="text"
        className="city-search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        onKeyDown={Search}
      />
      <WeatherDetails cityData={weather} />
    </div>
  );
};
export default Weather;
