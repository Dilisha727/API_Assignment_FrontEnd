import React from "react";
import "./styles.css"; // Import the CSS file
const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="weather-info-container">
      {weatherData.map(({ id, city, temperature, humidity, airPressure, description }) => (
        <div key={id} className="weather-info-item">
          <strong>{city}</strong>
          <br />
          Temperature  : {temperature}°C
          <br />
          Humidity     : {humidity}%
          <br />
          Air Pressure : {airPressure} hPa
          <br />
          Now weather  : {description}
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;
