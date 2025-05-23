import { useState } from "react";
import GetApiCity from "./GetApiCity";

function InputLocation() {
  const [value, setValue] = useState("");
  const [city, setCity] = useState(null);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (value.length === 0) {
      return alert("Введите хоть чтото");
    }

    setCity(value);
  };

  return (
    <div>
      <form action="">
        <input type="text" placeholder="Введите город" onChange={handleInputChange} value={value}></input>
        <button type="submit" onClick={handleClick}>
          Отправить
        </button>
      </form>
      {city && <GetApiCity value={city} />}
    </div>
  );
}

export default InputLocation;
