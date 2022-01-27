import { createContext, useContext, useState } from "react";

const TheameContext = createContext();
const TheameUpdateContext = createContext();

export const useTheame = () => {
  return useContext(TheameContext);
};

export const useTheameUpdate = () => {
  return useContext(TheameUpdateContext);
};

const TheameUpdate = ({ children }) => {
  const [darkTheame, setDarkTheame] = useState(false);

  const toggleTheame = () => {
    setDarkTheame((prevState) => !prevState);
  };
  return (
    <TheameContext.Provider value={darkTheame}>
      <TheameUpdateContext.Provider value={toggleTheame}>
        {children}
      </TheameUpdateContext.Provider>
    </TheameContext.Provider>
  );
};

export default TheameUpdate;
