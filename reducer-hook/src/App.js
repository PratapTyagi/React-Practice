import { useReducer } from "react";
import "./App.css";

const initialState = {
  user: 0,
};

const ACTIONS = {
  INCREAMENT_USER: "increament",
  DECREAMENT_USER: "decreament",
  RESET: "reset",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREAMENT_USER:
      return { ...state, user: state.user + action.payload };
    case ACTIONS.DECREAMENT_USER:
      return { ...state, user: state.user - action.payload };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [userState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <p>{`Count: ${userState.user}`}</p>
      <button
        onClick={() => dispatch({ type: ACTIONS.INCREAMENT_USER, payload: 5 })}
      >
        Increament
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.DECREAMENT_USER, payload: 1 })}
      >
        Decreament
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </div>
  );
};

export default App;
