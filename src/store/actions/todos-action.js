import {
  ADD_TODOS,
  REMOVE_TODOS,
  TOGGLE_TODOS,
  COMPLETE_DELET_TODOS,
} from "../constants/todos-constants";

export const addTodos = (title) => ({
  type: ADD_TODOS,
  title,
});

export const removeTodos = (id) => ({
  type: REMOVE_TODOS,
  id,
});

export const toggleTodos = (id) => ({
  type: TOGGLE_TODOS,
  id,
});

export const completDeletTodos = () => ({
  type: COMPLETE_DELET_TODOS,
});
