import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherMap from './WeatherMap';
import WeatherInfo from './WeatherInfo';
import './weatherApp.css';
import './weatherApp';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const defaultLocation = { latitude: 7.8731, longitude: 80.7718, city: 'Sri Lanka' }; // Coordinates for Sri Lanka

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/weather/${city}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData when the component mounts or city changes
  }, [city]); // Include city in the dependency array

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/weather/${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="upper-container container row">
    <div className="main banner"></div>
      <div className="search-bar">
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
         </div>
         {weatherData && <WeatherInfo weatherData={weatherData} />}
         <WeatherMap location={weatherData?.location || defaultLocation} />
      <div className="map"></div>
    </div>
    
  );
};

export default WeatherApp;
