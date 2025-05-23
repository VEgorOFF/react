import "./App.css";
import GetLocation from "./Components/GetLocation";
import InputLocation from "./Components/InputLocation";

function App() {
  return (
    <div className="weather-module">
      <GetLocation />
      <InputLocation />

      {/* <p>Longitude: {userLocation !== null ? userLocation.longitude : ""}</p>
      <p>Latitude: {userLocation !== null ? userLocation.latitude : ""}</p>
      <p>City: {userWeatherGPS !== null ? userWeatherGPS.userCity : ""}</p>
      <p>Temp: {userWeatherGPS !== null ? userWeatherGPS.tempCity : ""}</p> */}
    </div>
  );
}

export default App;
