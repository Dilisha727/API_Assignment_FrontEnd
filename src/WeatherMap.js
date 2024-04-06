import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import cloud from "./image/Cloudy.png";
import Foggy from "./image/Foggy.png";
import Windy from "./image/Windy.png";
import Sunny from "./image/Sunny.png";
import rain from "./image/rain.png";
import "./styles.css"; // Import the CSS file

const MapComponent = ({ weatherData, searchedCity }) => {
  return (
    <MapContainer
      center={[7.8731, 80.7718]}
      zoom={8}
   style={{ pading : 10 ,height: "800px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {weatherData.map(({ id, city, latitude, longitude, temperature, humidity, airPressure, description }) => {
        let iconUrl;

        switch (description) {
          case "Rainy":
            iconUrl = rain;
            break;
          case "Sunny":
            iconUrl = Sunny;
            break;
          case "Foggy":
            iconUrl = Foggy;
            break;
          case "Windy":
            iconUrl = Windy;
            break;
          case "Cloudy":
            iconUrl = cloud;
            break;
          default:
            iconUrl = ""; // Default icon URL if description doesn't match
        }

        const dynamicIcon = new L.Icon({
          iconUrl: iconUrl,
          iconSize: [60, 60],
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
              <br />
              Now weather: {description}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
