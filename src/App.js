// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import WeatherMap from './WeatherMap';
// // // import WeatherInfo from './WeatherInfo';
// // // import './weatherApp.css'; // Assuming you have a CSS file for styling

// // // const App = () => {
// // //   const [city, setCity] = useState('');
// // //   const [weatherData, setWeatherData] = useState(null);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const response = await axios.get(`http://localhost:3000/api/weather`);
// // //         setWeatherData(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching data:', error);
// // //       }
// // //     };

// // //     fetchData(); // Call fetchData when the component mounts
// // //   }, []); // Empty dependency array to fetch data only once

// // //   const handleSearch = async () => {
// // //     try {
// // //       const response = await axios.get(`http://localhost:3000/api/weather/${city}`);
// // //       setWeatherData(response.data);
// // //     } catch (error) {
// // //       console.error('Error fetching data:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container">
// // //       <div className="map-container">
// // //         {weatherData && <WeatherMap location={weatherData} />}
// // //       </div>
// // //       <div className="other-content">
// // //         <div className="search-container">
// // //           <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
// // //           <button onClick={handleSearch}>Search</button>
// // //         </div>
// // //         {weatherData && <WeatherInfo weatherData={weatherData} />}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default App;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import WeatherMap from './WeatherMap';
// // import WeatherInfo from './WeatherInfo';
// // import './weatherApp.css'; // Assuming you have a CSS file for styling

// // const App = () => {
// //   const [city, setCity] = useState('');
// //   const [weatherData, setWeatherData] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:3000/api/weather`);
// //         setWeatherData(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData(); // Call fetchData when the component mounts
// //   }, []); // Empty dependency array to fetch data only once

// //   const handleSearch = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:3000/api/weather/${city}`);
// //       setWeatherData(response.data);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <div className="map-container">
// //         {weatherData && <WeatherMap location={weatherData} />}
// //       </div>
// //       <div className="other-content">
// //         <div className="search-container">
// //           <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
// //           <button onClick={handleSearch}>Search</button>
// //         </div>
// //         {weatherData && <WeatherInfo weatherData={weatherData} />}
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

import React, { useState, useEffect } from "react";
import MapComponent from "./WeatherMap";
import SearchBar from "./SearchBar";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredWeatherData, setFilteredWeatherData] = useState([]);
  const [searchedCity, setSearchedCity] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/weather");
        const data = await response.json();
        setWeatherData(data);
        setFilteredWeatherData(data); // Initialize filtered data with all weather data
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
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
      <div className="search-bar">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="map-container">
        <MapComponent weatherData={filteredWeatherData} searchedCity={searchedCity} />
      </div>
    </div>
  );
};

export default App;

