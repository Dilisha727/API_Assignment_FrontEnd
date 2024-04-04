import React from 'react';
import wind from"./image/wind.png";
import humidity from"./image/humidity.png";


const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="weather-info">
      <div className='weather-city'>{weatherData.city}</div>
      <div className='weather-temp'><p>Temperature: {weatherData.temperature}°C</p></div>
      <div className='data-container'>

        <div className='element'>
          <img src={humidity} alt="" className="icon"/>
          <div className='data'>
            <div className='humidity'>{weatherData.humidity}%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>

        <div className='element'>
          <img src={wind} alt="" className="icon"/>
          <div className='data'>
            <div className='humidity'>{weatherData.airPressure} hPa</div>
            <div className='text'>airPressure</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WeatherInfo;
