import types from "../actions/actionTypes";

const timerReducer = (timers = { active: null, all: [] }, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.START_TIMER:
      return {
        active: _convertActiveTimer(payload),
        all: [...timers.all, payload]
      };
    case types.END_TIMER:
      const newTimers = timers.all.map(timer =>
        timer.id === timers.active.id ? { ...timer, endTime: payload } : timer
      );
      return { all: newTimers, active: null };
    case types.FETCH_TIMERS:
      let activeTimer = payload.find(timer => timer.endTime === undefined);
      if (!activeTimer) activeTimer = null;
      return { all: payload, active: _convertActiveTimer(activeTimer) };
    case types.REMOVE_TODO:
      const newAllTimers = timers.all.filter(timer => timer.todoId !== payload);
      const newActive =
        timers.active && timers.active.todoId === payload
          ? null
          : timers.active;
      return { all: newAllTimers, active: newActive };
    case types.REMOVE_COMPLETED_TODOS:
      const filteredTimers = timers.all.filter(timer => !payload[timer.todoId]);
      return { ...timers, all: filteredTimers };
    case types.UPDATE_TIMER:
      const active = timers.active;
      active.elapsedTime = payload;
      return { ...timers, active };
    default:
      return timers;
  }
};

const _convertActiveTimer = timer =>
  timer
    ? {
        todoId: timer.todoId,
        id: timer.id,
        elapsedTime: 0,
        started: timer.startTime.toDate().getTime()
      }
    : null;

export default timerReducer;
