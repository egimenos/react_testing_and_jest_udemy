import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className="App">
      <button
        disabled={isDisabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: isDisabled ? "gray" : buttonColor }}
      >
        Change to {newButtonColor}
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
