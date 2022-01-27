import { createContext, useState } from "react";

import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import "./App.css";

export const TheameContext = createContext();

function App() {
  const [darkTheame, setDarkTheame] = useState(false);

  const toggleTheame = () => {
    setDarkTheame((prevState) => !prevState);
    console.log(darkTheame);
  };

  return (
    <>
      <TheameContext.Provider value={darkTheame}>
        <button onClick={toggleTheame}>Change Theame</button>
        <FunctionalComponent />
        <ClassComponent />
      </TheameContext.Provider>
    </>
  );
}

export default App;
