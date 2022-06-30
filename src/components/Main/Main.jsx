import React from "react";
import { useSelector, useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Mainn, CardTodos, Input, Arrow, Bottom } from "./main.style";
import { addTodos } from "../../store/actions/todos-action";
import { List } from "./List/List";
import { ListBottom } from "./ListBottom/ListBottom";

const Main = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    if (e.code === "Enter") {
      if (e.target.value !== "") {
        e.preventDefault();
        dispatch(addTodos(e.target.value));
        e.target.value = "";
      }
    }
  };

  return (
    <Mainn>
      <CardTodos>
        <Arrow style={{ display: todos.length !== 0 ? "" : "none" }}>
          <KeyboardArrowDownIcon style={{ fontSize: 50 }} />
        </Arrow>
        <Input
          onKeyDown={handleAdd}
          type="text"
          placeholder="What needs to be done?"
        />
        <div>
          <List />
          <ListBottom />
        </div>
        <Bottom>
          <div className="first__list"></div>
          <div className="block__two">
            <div className="second__list"></div>
          </div>
        </Bottom>
      </CardTodos>
    </Mainn>
  );
};

export default Main;
