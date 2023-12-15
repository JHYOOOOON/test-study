import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const onClick = (event) => {
    setButtonColor(newButtonColor);
  };

  return (
    <div className="App">
      <button onClick={onClick} style={{ backgroundColor: buttonColor }}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
