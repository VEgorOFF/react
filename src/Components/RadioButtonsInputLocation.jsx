import { useState } from "react";

import InputLocation from "./InputLocation";

function RadioButtonsInputLocation() {
  const [selectedOption, setSelectedOption] = useState("now");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="weather-module_input">
        <InputLocation selectedOption={selectedOption} />
        <div className="radio-button_weather-input">
          <p>
            <input name="weatherCity" type="radio" value="now" checked={selectedOption === "now"} onChange={handleOptionChange} /> Текущая погода
          </p>

          <p>
            <input name="weatherCity" type="radio" value="fiveDays" checked={selectedOption === "fiveDays"} onChange={handleOptionChange} /> Погода на 5 дней
          </p>
        </div>
      </div>
    </>
  );
}

export default RadioButtonsInputLocation;
