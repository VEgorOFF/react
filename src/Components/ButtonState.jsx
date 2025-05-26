import { useState } from "react";
import GetApiCity from "./GetApiCity";
import GetApiCityFiveDays from "./GetApiCityFiveDAys";

function ButtonState({ selectedOption }) {
  const [city, setCity] = useState(null);

  const handleClick = () => {
    const nameCity = document.getElementById("write-city").value;

    if (nameCity.length === 0) {
      return alert("Введите хоть чтото");
    }

    setCity(nameCity);
  };

  const checkRadioButton = (selectedOption) => {
    if (selectedOption === "now") {
      return <GetApiCity value={city} />;
    }
    if (selectedOption === "fiveDays") {
      return <GetApiCityFiveDays value={city} />;
    }
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Отправить
      </button>
      {city && checkRadioButton(selectedOption)}
    </>
  );
}

export default ButtonState;
