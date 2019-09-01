import database from "../utils";

export const fetchTodos = () => {
  return { type: "FETCH_TODOS", payload: database.loadData().items };
};

export const removeTodo = id => {
  database.removeTodo(id);
  return { type: "REMOVE_TODO", payload: id };
};

export const addTodo = id => {
  return { type: "ADD_TODO", payload: database.addTodo(id) };
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
