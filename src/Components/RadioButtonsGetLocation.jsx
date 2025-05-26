import { useState } from "react";
import GetLocation from "./GetLocation";

function RadioButtonsGetLocation() {
  const [selectedOption, setSelectedOption] = useState("now");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="weather-module_GPS">
        <GetLocation selectedOption={selectedOption} />
        <div className="radio-button_weather-GPS">
          <p>
            <input name="weatherGPS" type="radio" value="now" checked={selectedOption === "now"} onChange={handleOptionChange} /> Текущая погода
          </p>

          <p>
            <input name="weatherGPS" type="radio" value="fiveDays" checked={selectedOption === "fiveDays"} onChange={handleOptionChange} /> Погода на 5 дней
          </p>
        </div>
      </div>
    </>
  );
}

export default RadioButtonsGetLocation;
