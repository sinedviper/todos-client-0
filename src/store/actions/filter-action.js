import { SET_FILTER } from "../constants/filter-constats";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
