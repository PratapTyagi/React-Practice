import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions/actionTypes";

import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: 1,
    name: "time_pass",
    time: "evening",
  },
];

export const Todo = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(state, action);
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          ...payload,
        },
      ];
    case EDIT_TODO:
      return state.map((s) => {
        if (s.id === payload.id) return { ...payload };
        return s;
      });
    case DELETE_TODO:
      return state.filter((s) => s.id !== payload.id);
    default:
      return state;
  }
};
