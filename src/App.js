import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [isChecked, setIsChecked] = useState(false);

  const onClick = (event) => {
    setButtonColor(newButtonColor);
  };

  return (
    <div className="App">
      <button
        onClick={onClick}
        style={{ backgroundColor: isChecked ? "gray" : buttonColor }}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </div>
  );
}

export default App;
