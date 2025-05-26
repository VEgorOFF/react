import { useState } from "react";

function InputState() {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input id="write-city" type="text" placeholder="Введите город" onChange={handleInputChange} value={value}></input>
    </>
  );
}

export default InputState;
