import id from "nid";
import {
  ADD_TODOS,
  REMOVE_TODOS,
  TOGGLE_TODOS,
  COMPLETE_DELET_TODOS,
} from "../constants/todos-constants";

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODOS:
      return [
        ...state,
        {
          id: id(),
          title: action.title,
          completed: false,
        },
      ];
    case REMOVE_TODOS:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODOS:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case COMPLETE_DELET_TODOS:
      return state.filter((todo) => todo.completed !== true);
    default:
      return state;
  }
};
