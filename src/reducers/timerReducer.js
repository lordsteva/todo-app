import types from "../actions/actionTypes";

const timerReducer = (timers = { active: null, all: [] }, action) => {
  switch (action.type) {
    case types.START_TIMER:
      const newTimer = action.payload;
      const allTimers = [...timers.all, newTimer];
      const active = { todoId: newTimer.todoId, id: newTimer.id };
      return { active: active, all: allTimers };
    case types.END_TIMER:
      const newTimers = [...timers.all];
      const timer = newTimers.find(timer => timer.id === timers.active.id);
      timer.endTime = action.payload.endTime;
      console.log("asdsdadasd");
      return { all: newTimers, active: null };
    default:
      return timers;
  }
};

export default timerReducer;
