import "./App.css";
import RadioButtonsGetLocation from "./Components/RadioButtonsGetLocation";
import RadioButtonsInputLocation from "./Components/RadioButtonsInputLocation";

function App() {
  return (
    <div className="weather-module">
      <RadioButtonsGetLocation />
      <RadioButtonsInputLocation />
    </div>
  );
}

export default App;
