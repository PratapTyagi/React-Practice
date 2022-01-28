import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const increament = (value) => {
    setCount((prevValue) => prevValue + value);
  };
  const decreament = (value) => {
    setCount((prevValue) => prevValue - value);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="app">
      <p>{`Count: ${count}`}</p>
      <button onClick={() => increament(1)}>Increament</button>
      <button onClick={() => decreament(1)}>Decreament</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default App;
