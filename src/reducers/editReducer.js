const editReducer = (editing = null, action) => {
  switch (action.type) {
    case "START_EDITING":
      return action.payload;
    default:
      return editing;
  }
};

export default editReducer;
