import React from "react";
import { Card } from "@mui/material";
import { SentimentVeryDissatisfied } from "@mui/icons-material";
import "../Styles/Weather.css";

const WeatherDetails = ({ cityData }) => {
  const toDateFunction = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();
    const date = `${weekDays[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
  };
  return (
    <Card className="cardContainer">
      {cityData.loading && (
        <>
          <br />
          <br />
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      )}
      {cityData.error && (
        <>
          <br />
          <br />
          <span className="error-message">
            <SentimentVeryDissatisfied />
            <span className="error">City not found</span>
          </span>
        </>
      )}
      {cityData && cityData.data.main && (
        <div>
          <div className="city-name">
            <h2>
              {cityData.data.name}, <span>{cityData.data.sys.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{toDateFunction()}</span>
          </div>
          <div className="icon-temp">
            <img
              src={`http://openweathermap.org/img/w/${cityData.data.weather[0].icon}@2x.png`}
              alt={cityData.data.weather[0].description}
            />
            {Math.round(cityData.data.main.temp)}
            <sup className="deg">°C</sup>
          </div>
          <div className="des-wind">
            <p>{cityData.data.weather[0].description.toUpperCase()}</p>
            <p>Wind: {cityData.data.wind.speed} km/h</p>
          </div>
          <p>{`Lon: ${cityData.data.coord.lon}, Lat: ${cityData.data.coord.lat}`}</p>
        </div>
      )}
    </Card>
  );
};
export default WeatherDetails;
