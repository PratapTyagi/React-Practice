import { createContext, useReducer, Fragment } from "react";
import "./App.css";
import ComponetOne from "./components/ComponetOne";

export const CountContext = createContext();

const initialState = {
  count: 0,
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count: state.count, dispatch }}>
      <div className="app">
        <p>{`Count: ${state.count}`}</p>
        <ComponetOne />
      </div>
    </CountContext.Provider>
  );
};

export default App;
