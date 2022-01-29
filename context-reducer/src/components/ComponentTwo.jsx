import { useContext } from "react";
import { CountContext } from "../App";

const ComponentTwo = () => {
  const state = useContext(CountContext);
  console.log(state);
  return (
    <>
      <p>Component Two</p>
      <p>{`count: ${state.count}`}</p>
    </>
  );
};

export default ComponentTwo;
