import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className="App">
      <button
        disabled={isDisabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: isDisabled ? "gray" : buttonColor }}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        id="disabled-button-checkbox"
        onChange={(e) => setIsDisabled(e.target.checked)}
        aria-checked={isDisabled}
        defaultChecked={isDisabled}
        type="checkbox"
      />
      <label htmlFor="disabled-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
