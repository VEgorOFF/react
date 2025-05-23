import { useState } from "react";
import GetApi from "./GetApi";

function GetLocation() {
  const [userLocation, setUserLocation] = useState(null);

  const getLocationUser = () => {
    if (!navigator.geolocation) {
      alert("Ваш браузер не поддерживает геолокацию...");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setUserLocation({ longitude, latitude });
        },
        (error) => {
          alert("Не удалось определить геолокацию: ", error.message);
        }
      );
    }
  };

  return (
    <div>
      <button onClick={getLocationUser}>Получить местоположение</button>
      {userLocation && (
        <div className="coordinates">
          Longitude: {userLocation.longitude}, Latitude: {userLocation.latitude}
          <GetApi longitude={userLocation.longitude} latitude={userLocation.latitude} />
        </div>
      )}
    </div>
  );
}

export default GetLocation;
