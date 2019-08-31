import database from "../utils";

export const fetchTodos = () => {
  return { type: "FETCH_TODOS", payload: database.loadData().items };
};
