import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TodosBottom } from "./listBottom.style";
import { completDeletTodos } from "../../../store/actions/todos-action";
import { setFilter } from "../../../store/actions/filter-action";
import { selectAllTodos } from "../../../store/selectors/todos-selectors";
import { selectFilter } from "../../../store/selectors/filter-selectors";

export const ListBottom = () => {
  const [clear, setClear] = useState(false);
  const todos = useSelector((state) => selectAllTodos(state));
  const filter = useSelector((state) => selectFilter(state));
  const dispatch = useDispatch();

  const handleClear = () => {
    setClear(false);
    dispatch(setFilter("all"));
    dispatch(completDeletTodos());
  };

  const haveClear = useCallback(() => {
    todos.map((todo) => todo.completed).some((val) => val)
      ? setClear(true)
      : setClear(false);
  }, [todos]);

  useEffect(() => {
    haveClear();
  }, [haveClear]);

  return (
    <TodosBottom style={{ display: todos.length !== 0 ? "" : "none" }}>
      <p>{todos.length} items left</p>
      <div className="bottom__list">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => dispatch(setFilter("active"))}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => dispatch(setFilter("completed"))}
        >
          Completed
        </button>
      </div>
      {clear ? (
        <button onClick={handleClear} className="clear">
          Clear completed
        </button>
      ) : (
        <button className="clear"></button>
      )}
    </TodosBottom>
  );
};
