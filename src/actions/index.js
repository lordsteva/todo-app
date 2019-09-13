import database from "../utils";
import types from "./actionTypes";

export const fetchTodos = () => async dispatch => {
  const todos = await database.loadData();
  dispatch({ type: types.FETCH_TODOS, payload: todos });
};

export const removeTodo = id => async dispatch => {
  await database.removeTodo(id);
  dispatch({ type: types.REMOVE_TODO, payload: id });
};

export const addTodo = caption => async dispatch => {
  const todo = await database.addTodo(caption);
  dispatch({ type: types.ADD_TODO, payload: todo });
};

export const filterTodos = filter => {
  return { type: types.FILTER_TODOS, payload: filter };
};

export const editTodo = editedItem => {
  database.editTodo(editedItem);
  return { type: types.EDIT_TODO, payload: editedItem };
};

export const startEditing = id => {
  return { type: types.START_EDITING, payload: id };
};

export const removeCompletedTodos = () => async dispatch => {
  await database.removeCompletedTodos();
  dispatch({ type: types.REMOVE_COMPLETED_TODOS });
};

export const startTimer = todoId => async (dispatch, getState) => {
  const state = getState();
  if (state.timers.active) endTimer(state.timers.active)(dispatch, getState);
  if (!state.timers.all[todoId]) {
    //fetchTimers
  }
  const timer = await database.startTimer(todoId);
  console.log(timer);
  dispatch({ type: types.START_TIMER, payload: timer });
};

export const endTimer = () => async (dispatch, getState) => {
  const state = getState();
  const endTime = await database.endTimer(state.timers.active.id);
  dispatch({ type: types.END_TIMER, payload: endTime });
};

export const fetchTimers = todoId => async dispatch => {
  const timers = await database.fetchTimers(todoId);
  dispatch({ type: types.FETCH_TIMERS, payload: timers });
};
