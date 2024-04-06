import React, { useState, useEffect } from "react";
import MapComponent from "./WeatherMap";
import SearchBar from "./SearchBar";
import "./styles.css"; // Import the CSS file
import WeatherInfo from "./WeatherInfo"; // Import WeatherInfo component

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredWeatherData, setFilteredWeatherData] = useState([]);
  const [searchedCity, setSearchedCity] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("https://radiant-everglades-04738-d9dc45e20735.herokuapp.com/api/weather");
        const data = await response.json();
        setWeatherData(data);
        setFilteredWeatherData(data); // Initialize filtered data with all weather data
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();

    // Set interval to fetch data every 5 minutes (300000 milliseconds)
    const interval = setInterval(fetchWeatherData, 300000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (city) => {
    if (city) {
      const filteredData = weatherData.filter(
        (item) => item.city.toLowerCase() === city.toLowerCase()
      );
      setFilteredWeatherData(filteredData);
      setSearchedCity(city);
    } else {
      setFilteredWeatherData(weatherData); // Show all data if search is empty
      setSearchedCity("");
    }
  };

  return (
    <div className="app">
      <div className="left-side">
        <div className="top-bar">
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div className="weather-info-container">
          <WeatherInfo weatherData={filteredWeatherData} />
        </div>
      </div>
      <div className="right-side">
        <div className="map-container">
          <MapComponent weatherData={filteredWeatherData} searchedCity={searchedCity} />
        </div>
      </div>
    </div>
  );
};

export default App;
