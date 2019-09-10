import database from "../utils";

export const fetchTodos = () => async dispatch => {
  const todos = await database.loadData();
  dispatch({ type: "FETCH_TODOS", payload: todos });
};

export const removeTodo = id => {
  database.removeTodo(id);
  return { type: "REMOVE_TODO", payload: id };
};

export const addTodo = caption => async dispatch => {
  // return { type: "ADD_TODO", payload: database.addTodo(todo) };
  const todo = await database.addTodo(caption);
  dispatch({ type: "ADD_TODO", payload: todo });
};

export const filterTodos = filter => {
  return { type: "FILTER_TODOS", payload: filter };
};

export const editTodo = editedItem => {
  database.editTodo(editedItem);
  return { type: "EDIT_TODO", payload: editedItem };
};

export const startEditing = id => {
  return { type: "START_EDITING", payload: id };
};

export const removeCompletedTodos = () => {
  database.removeCompletedTodos();
  return { type: "REMOVE_COMPLETED_TODOS" };
};
