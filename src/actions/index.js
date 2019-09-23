import database from "../utils";
import types from "./actionTypes";
import { startTimer, endTimer, fetchTimers } from "./TimerActions";

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

export const editTodo = editedItem => async (dispatch, getState) => {
  const { timers } = getState();
  if (
    timers.active &&
    timers.active.todoId === editedItem.id &&
    editedItem.completed
  )
    endTimer()(dispatch, getState);
  database.editTodo(editedItem);
  dispatch({ type: types.EDIT_TODO, payload: editedItem });
};

export const startEditing = id => {
  return { type: types.START_EDITING, payload: id };
};

export const removeCompletedTodos = () => async dispatch => {
  const removed = await database.removeCompletedTodos();
  dispatch({ type: types.REMOVE_COMPLETED_TODOS, payload: removed });
};

export { fetchTimers, startTimer, endTimer };
