// // import React from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
// // import { Icon } from "leaflet";

// // const WeatherMap = ({ location }) => {
// //   if (!location) {
// //     // Handle case when location is undefined
// //     return <div>Loading...</div>;
// //   }
// //   const { latitude, longitude, city, temperature, humidity,airPressure } = location;
// //   //console.log("****",location)
// //   const position = [latitude, longitude];
  
  

// //   const customIcon = new Icon({
// //     iconUrl: "https://cdn-icons-png.flaticon.com/512/14831/14831599.png",
// //     iconSize: [38, 38]
// //   });

// //   return (
// //     <MapContainer center={position} zoom={7} style={{ height: '100%', width: '100%' }}>
// //       <TileLayer
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //       />
// //       <Marker position={position} icon={customIcon}>
// //         <Popup>
// //           <div>
// //              <h2>{city}</h2>
// //              <p>Temperature: {temperature}°C</p>
// //              <p>Humidity: {humidity}%</p>
// //              <p>Air Pressure: {airPressure} hPa</p>
// //            </div>

// //         </Popup>
// //       </Marker>
// //     </MapContainer>
// //   );
// // };

// // export default WeatherMap;


// // import React from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// // const WeatherMap = ({ location }) => {
// //   if (!location || !location.latitude || !location.longitude) {
// //     return <div>Loading...</div>; // Handle case when location or coordinates are undefined
// //   }

// //   const { latitude, longitude, city, temperature, humidity, airPressure } = location;

// //   return (
// //     <MapContainer center={[latitude, longitude]} zoom={7} style={{ height: '100%', width: '100%' }}>
// //       <TileLayer
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //       />
// //       <Marker position={[latitude, longitude]}>
// //         <Popup>
// //           <div>
// //             <h2>{city}</h2>
// //             <p>Temperature: {temperature}°C</p>
// //             <p>Humidity: {humidity}%</p>
// //             <p>Air Pressure: {airPressure} hPa</p>
// //           </div>
// //         </Popup>
// //       </Marker>
// //     </MapContainer>
// //   );
// // };

// // export default WeatherMap;


// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// const WeatherMap = ({ location }) => {
//   let markers = [];

//   if (location && location.length > 0) {
//     markers = location.map((city) => (
//       <Marker
//         key={city._id} // Assuming each city object has a unique identifier like _id
//         position={[city.latitude, city.longitude]}
//       >
//         <Popup>
//           <div>
//             <h2>{city.city}</h2>
//             <p>Temperature: {city.temperature}°C</p>
//             <p>Humidity: {city.humidity}%</p>
//             <p>Air Pressure: {city.airPressure} hPa</p>
//           </div>
//         </Popup>
//       </Marker>
//     ));
//   }

//   return (
//     <MapContainer center={[7.8731, 80.7718]} zoom={7} style={{ height: '100%', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {markers}
//     </MapContainer>
//   );
// };

// export default WeatherMap;

// WeatherMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = ({ weatherData, searchedCity }) => {
  return (
    <MapContainer
      center={[7.8731, 80.7718]}
      zoom={8}
      style={{ height: "700px", width: "70%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {weatherData.map(({ id, city, latitude, longitude, temperature, humidity, airPressure }) => {
        const dynamicIcon = new L.Icon({
          iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEoLYTPXf1WPVMlbugOAXoO_yvD7N_QIrbQ&s",
          iconSize: [30, 30],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });

        return (
          <Marker key={id} position={[latitude, longitude]} icon={dynamicIcon}>
            <Popup>
              <strong>{city}</strong>
              <br />
              <br />
              Temperature: {temperature}°C
              <br />
              Humidity: {humidity}%
              <br />
              Air Pressure: {airPressure} hPa
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
