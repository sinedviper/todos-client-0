import { combineReducers } from "redux";
import { todos } from "./todos-reducers";
import { filter } from "./filter-reducers";

export const rootReducer = combineReducers({
  todos,
  filter,
});
