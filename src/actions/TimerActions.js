import database from "../utils";
import types from "./actionTypes";

let _intervalId = null;

export const startTimer = todoId => async (dispatch, getState) => {
  const state = getState();
  if (state.timers.active) endTimer(state.timers.active)(dispatch, getState);
  const timer = await database.startTimer(todoId);
  dispatch({ type: types.START_TIMER, payload: timer });
  _startTicking(dispatch);
};

export const endTimer = () => async (dispatch, getState) => {
  const state = getState();
  const endTime = await database.endTimer(state.timers.active.id);
  dispatch({ type: types.END_TIMER, payload: endTime });
};

export const fetchTimers = () => async dispatch => {
  const timers = await database.fetchTimers();
  dispatch({ type: types.FETCH_TIMERS, payload: timers });
  _startTicking(dispatch);
};

const _startTicking = dispatch => {
  dispatch(_updateTimer());
  _intervalId = setInterval(() => {
    dispatch(_updateTimer());
  }, 1000);
};

const _updateTimer = () => async (dispatch, getState) => {
  const timer = getState().timers.active;
  if (!timer) {
    clearInterval(_intervalId);
    return;
  }
  const newTime = new Date().getTime() - timer.started;
  dispatch({ type: types.UPDATE_TIMER, payload: newTime });
};
