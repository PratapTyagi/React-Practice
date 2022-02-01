import { INCREAMENT_COUNTER, DECREAMENT_COUNTER, RESET } from "./actionTypes";
export const increament = (value) => {
  return {
    type: INCREAMENT_COUNTER,
    payload: value,
  };
};

export const decreament = (value) => {
  return {
    type: DECREAMENT_COUNTER,
    payload: value,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
