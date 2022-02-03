import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actionTypes";

export const addTodo = (value) => {
  return {
    type: ADD_TODO,
    payload: { ...value },
  };
};

export const deleteTodo = (value) => {
  return {
    type: DELETE_TODO,
    payload: value,
  };
};

export const editTodo = (value) => {
  return {
    type: EDIT_TODO,
    payload: value,
  };
};
