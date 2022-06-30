import { Buttons } from "./Buttons/Buttons";
import { Lists } from "./list.style";
import { useSelector } from "react-redux";
import { selectFilterTodos } from "../../../store/selectors/todos-selectors";
import { selectFilter } from "../../../store/selectors/filter-selectors";

export const List = () => {
  const filter = useSelector((state) => selectFilter(state));
  const todos = useSelector((state) => selectFilterTodos(state, filter));
  return (
    <Lists>
      {todos.map((todo) => Buttons(todo.id, todo.completed, todo.title))}
    </Lists>
  );
};
