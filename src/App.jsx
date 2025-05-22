import "./App.css";
import GetLocation from "./Components/GetLocation";

function App() {
  return (
    <div className="weather-module">
      <div className="city"></div>
      <div className="description"></div>
      <div className="coordinates"></div>
      <GetLocation />

      {/* <p>Longitude: {userLocation !== null ? userLocation.longitude : ""}</p>
      <p>Latitude: {userLocation !== null ? userLocation.latitude : ""}</p>
      <p>City: {userWeatherGPS !== null ? userWeatherGPS.userCity : ""}</p>
      <p>Temp: {userWeatherGPS !== null ? userWeatherGPS.tempCity : ""}</p> */}
    </div>
  );
}

export default App;
