import "./App.css";
import { useState } from "react";

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
        style={{ backgroundColor: buttonColor }}
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
