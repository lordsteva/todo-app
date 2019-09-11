import types from "../actions/actionTypes";
import { filterTypes } from "../utils";

const filterReducer = (filter = filterTypes.ALL, action) => {
  switch (action.type) {
    case types.FILTER_TODOS:
      return action.payload;
    default:
      return filter;
  }
};
export default filterReducer;
