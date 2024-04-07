import React from "react";
import "./styles.css"; // Import the CSS file

const WeatherInfo = ({ weatherData }) => {
  // Sort the weather data array by temperature in descending order
  const sortedWeatherData = weatherData.sort((a, b) => b.temperature - a.temperature);

  return (
    <div className="weather-info-container">
      {sortedWeatherData.map(({ id, city, temperature, humidity, airPressure, description }) => (
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