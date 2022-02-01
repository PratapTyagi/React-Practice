import {
  DECREAMENT_COUNTER,
  INCREAMENT_COUNTER,
  RESET,
} from "../actions/actionTypes";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREAMENT_COUNTER:
      return { ...state, count: state.count + payload };
    case DECREAMENT_COUNTER:
      return { ...state, count: state.count - payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
