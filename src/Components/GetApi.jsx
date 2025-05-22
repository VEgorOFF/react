import { useState } from "react";

async function GetApi(userLocation) {
  const [userWeatherGPS, setUserWeatherGPS] = useState(null);
  const API = "67f053bf464c75b25e99fb74299aba79";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&appid=${API}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();

  const userCity = data.name;
  const tempCity = data.main.temp;

  setUserWeatherGPS({ userCity, tempCity });
}

export default GetApi;
