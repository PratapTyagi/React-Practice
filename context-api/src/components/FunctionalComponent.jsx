import React, { useContext } from "react";

import { TheameContext } from "../App";

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
  const darkTheame = useContext(TheameContext);
  return <p style={toggleStyle(darkTheame)}>Function</p>;
};

export default FunctionalComponent;
