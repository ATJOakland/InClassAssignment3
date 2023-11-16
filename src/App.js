import React, { useState } from "react";
import "./App.css";

function App() {
  const savedCount = Number(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(savedCount);

  const handleIncrement = () => {
    setCount(count + 1);
    localStorage.setItem("count", count);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    localStorage.setItem("count", count);
  };

  return (
    <main className="App">
      <div className="counterHolder">
        <h1>Number Counter</h1>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrease</button>
        <button onClick={handleIncrement}>Increase</button>
      </div>
    </main>
  );
}

export default App;
