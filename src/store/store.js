import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import { setLocalStorage, getLocalStorage } from "../utils/localStorage";
import { rootReducer } from "./reducers/index";

const loadState = getLocalStorage();

const store = createStore(rootReducer, loadState, devToolsEnhancer());

store.subscribe(() => {
  setLocalStorage({ todos: store.getState().todos });
});

export default store;
