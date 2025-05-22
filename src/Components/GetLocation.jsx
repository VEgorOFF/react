import { useState } from "react";

function GetLocation() {
  const [userLocation, setUserLocation] = useState("координаты");

  const getLocationUser = () => {
    console.log("worked");
    if (!navigator.geolocation) {
      alert("Ваш браузер не дружит с геолокацией...");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setUserLocation({ longitude, latitude });
        },
        (error) => {
          alert("Не получается определить вашу геолокацию :(", error);
        }
      );
    }
    document.querySelector(".coordinates").innerHTML = userLocation;
  };

  return <button onClick={getLocationUser}>Получить местоположение</button>;
}

export default GetLocation;
