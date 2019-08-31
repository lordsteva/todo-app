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
