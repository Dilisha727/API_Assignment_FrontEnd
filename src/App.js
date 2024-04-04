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


// import React, { useState } from "react";
// import MapComponent from "./WeatherMap";


// const App = () => {
//   const [weatherData, setWeatherData] = useState([
//     {
//       id: 1,
//       city: "Colombo",
//       lat: 6.9271,
//       lng: 79.8612,
//       temperature: 28,
//       humidity: 75,
//       airPressure: 1012,
//       wind_speed: 12,
//       weatherDescriptions: "Partly cloudy",
//       observationTime: "2024-04-01 12:00:00",
//       weatherIcons: "https://example.com/icon.png",
//       isDay: true,
//     },
//     {
//       id: 2,
//       city: "Kandy",
//       lat: 7.2906,
//       lng: 80.6337,
//       temperature: 25,
//       humidity: 70,
//       airPressure: 1013,
//       wind_speed: 10,
//       weatherDescriptions: "Cloudy",
//       observationTime: "2024-04-01 12:00:00",
//       weatherIcons: "https://example.com/icon.png",
//       isDay: false,
//     },
//     // Add more weather data objects as needed
//   ]);

//   return(<div>
//     <MapComponent weatherData={weatherData} />
//   </div>)
//   }





// export default App;
// App.js
import React, { useState, useEffect } from "react";
import MapComponent from "./WeatherMap";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/weather");
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData(); // Don't forget to call the fetch function
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div className="app">
      <div className="container">
        <MapComponent weatherData={weatherData} />
      </div>
    </div>
  );
};

export default App;
