import { useState } from "react";
import ChessBoard from "./ChessBoard";
import ToggleNotationButton from "./ToggleNotationButton";
import "./App.css";

function App() {
  const [timerDuration, setTimerDuration] = useState(6); // default value
  const [showNotation, setShowNotation] = useState(true);

  // Function to handle changes in the timer duration input
  const handleDurationChange = (event) => {
    const duration = Math.max(3, Math.min(10, Number(event.target.value)));
    setTimerDuration(duration);
  };

  return (
    <div className="app">
      <input
        className="time-input"
        type="number"
        value={timerDuration}
        onChange={handleDurationChange}
        min={3}
        max={10}
      />
      <ChessBoard showNotation={showNotation} timerDuration={timerDuration} />
      <ToggleNotationButton
        showNotation={showNotation}
        onToggle={() => setShowNotation(!showNotation)}
      />
    </div>
  );
}

export default App;
