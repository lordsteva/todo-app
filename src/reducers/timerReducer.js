import types from "../actions/actionTypes";

const timerReducer = (timers = { active: null, all: [] }, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.START_TIMER:
      const newTimer = payload;
      const allTimers = [...timers.all, newTimer];
      const active = _convertActiveTimer(newTimer);
      return { active: active, all: allTimers };
    case types.END_TIMER:
      const newTimers = [...timers.all];
      const timer = newTimers.find(timer => timer.id === timers.active.id);
      timer.endTime = payload.endTime;
      return { all: newTimers, active: null };
    case types.FETCH_TIMERS:
      let activeTimer = payload.find(timer => timer.endTime === undefined);
      if (!activeTimer) activeTimer = null;
      activeTimer = _convertActiveTimer(activeTimer);
      return { all: payload, active: activeTimer };
    default:
      return timers;
  }
};

const _convertActiveTimer = timer =>
  timer
    ? {
        todoId: timer.todoId,
        id: timer.id,
        started: timer.startTime.toDate().getTime()
      }
    : null;

export default timerReducer;
