import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  INCREAMENT_COUNTER,
  DECREAMENT_COUNTER,
  RESET,
} from "./actions/actionTypes";
import { decreament, increament, reset } from "./actions/counterAction";

import "./App.css";

function App() {
  const [increamentValue, setIncreamentValue] = useState();
  const [decreamentValue, setDecreamentValue] = useState();
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Count: {count}</p>
      <input
        type="text"
        placeholder="Value"
        value={increamentValue}
        onChange={(e) => setIncreamentValue(e.target.value)}
      />
      <button onClick={() => dispatch(increament(parseInt(increamentValue)))}>
        Increament
      </button>
      <br />
      <input
        type="text"
        placeholder="Value"
        value={decreamentValue}
        onChange={(e) => setDecreamentValue(e.target.value)}
      />
      <button onClick={() => dispatch(decreament(parseInt(decreamentValue)))}>
        Decreament
      </button>
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
