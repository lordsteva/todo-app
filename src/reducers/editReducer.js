import types from "../actions/actionTypes";

const editReducer = (editing = null, action) => {
  switch (action.type) {
    case types.START_EDITING:
      return action.payload;
    default:
      return editing;
  }
};

export default editReducer;
