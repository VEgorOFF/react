import InputState from "./InputState";
import ButtonState from "./ButtonState";

function InputLocation({ selectedOption }) {
  return (
    <div>
      <form action="">
        <label>Введите город (например: "London", "Moscow")</label>
        <div>
          <InputState />
          <ButtonState selectedOption={selectedOption} />
        </div>
      </form>
    </div>
  );
}

export default InputLocation;
