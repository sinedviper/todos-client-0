export const selectAllTodos = (state) => state.todos;

export const selectFilterTodos = (state, filter) => {
  switch (filter) {
    case "all": {
      return state.todos;
    }
    case "active": {
      return state.todos.filter((todo) => todo.completed === false);
    }
    case "completed": {
      return state.todos.filter((todo) => todo.completed !== false);
    }
    default:
      return state;
  }
};
