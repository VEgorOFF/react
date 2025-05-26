import { useState } from "react";
import GetApi from "./GetApi";
import GetApiGpsFiveDays from "./GetApiGpsFiveDays";

function GetLocation({ selectedOption }) {
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

  const checkRadioButton = (selectedOption) => {
    if (selectedOption === "now") {
      return <GetApi longitude={userLocation.longitude} latitude={userLocation.latitude} />;
    }
    if (selectedOption === "fiveDays") {
      return <GetApiGpsFiveDays longitude={userLocation.longitude} latitude={userLocation.latitude} />;
    }
  };

  return (
    <div>
      <button onClick={getLocationUser}>Получить местоположение</button>
      {userLocation && (
        <>
          <div className="coordinates">
            Длина: {userLocation.longitude}, Ширина: {userLocation.latitude}
          </div>
          {checkRadioButton(selectedOption)}
        </>
      )}
    </div>
  );
}

export default GetLocation;
