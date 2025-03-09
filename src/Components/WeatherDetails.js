import React from "react";
import { Paper } from "@mui/material";
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
    return date;
  };

  if (Object.keys(cityData.data).length === 0) {
    return <></>;
  }

  return (
    <Paper elevation={3} className="paperContainer">
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
              src={`https://openweathermap.org/img/w/${cityData.data.weather[0].icon}.png`}
              alt={cityData.data.weather[0].description}
            />
            {Math.round(cityData.data.main.temp)}
            <sup className="deg">°C</sup>
          </div>
          <div className="des-wind">
            <p>{cityData.data.weather[0].description.toUpperCase()}</p>
            <p>Wind: {cityData.data.wind.speed} km/h</p>
          </div>
          <p className="text-muted">{`Lon: ${cityData.data.coord.lon}, Lat: ${cityData.data.coord.lat}`}</p>
        </div>
      )}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,245.3C672,277,768,267,864,256C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </Paper>
  );

};
export default WeatherDetails;
