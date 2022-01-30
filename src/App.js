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
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="enable-button-checked"
        onChange={(e) => setIsDisabled(e.target.checked)}
        aria-checked={isDisabled}
        defaultChecked={isDisabled}
        type="checkbox"
      />
    </div>
  );
}

export default App;
