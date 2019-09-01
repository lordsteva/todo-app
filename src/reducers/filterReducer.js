import { filterTypes } from "../utils";

const filterReducer = (filter = filterTypes.ALL, action) => {
  switch (action.type) {
    case "FILTER_TODOS":
      return action.payload;
    default:
      return filter;
  }
};
export default filterReducer;
