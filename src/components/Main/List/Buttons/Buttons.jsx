import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import { Li } from "./buttons-style";
import {
  removeTodos,
  toggleTodos,
} from "../../../../store/actions/todos-action";

export const Buttons = (id, check, text) => {
  const dispatch = useDispatch();

  return (
    <Li key={id}>
      <Checkbox
        sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
        className="input"
        onChange={() => dispatch(toggleTodos(id))}
        checked={check}
      />
      <span
        className="text"
        style={{
          textDecoration: check ? "line-through" : "",
        }}
      >
        {text.length > 30 ? text.slice(0, 30) + "..." : text}
      </span>
      <button onClick={() => dispatch(removeTodos(id))}>
        <CancelOutlinedIcon className="icon" />
      </button>
    </Li>
  );
};
