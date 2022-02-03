import { combineReducers } from "redux";
import { Todo } from "./Todo";

export const rootReducer = combineReducers({ todo: Todo });
