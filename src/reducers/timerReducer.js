import types from "../actions/actionTypes";

const timerReducer = (timer = null, action) => {
  switch (action.type) {
    case types.START_TIMER:
      return action.payload;
    case types.END_TIMER:
      return null;
    default:
      return timer;
  }
};

export default timerReducer;
