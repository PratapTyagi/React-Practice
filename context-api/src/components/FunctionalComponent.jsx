import React from "react";

import { useTheame, useTheameUpdate } from "../contextFolder/TheameUpdate";

const FunctionalComponent = () => {
  const toggleStyle = (dark) => {
    return {
      backgroundColor: dark ? "black" : "grey",
      color: dark ? "whitesmoke" : "black",
      padding: "5%",
      margin: "5%",
      textAlign: "center",
    };
  };
  const darkTheame = useTheame();
  const toggleTheame = useTheameUpdate();
  return (
    <>
      <button onClick={toggleTheame}>Change Theame</button>
      <p style={toggleStyle(darkTheame)}>Function</p>
    </>
  );
};

export default FunctionalComponent;
