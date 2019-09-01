import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import editReducer from "./editReducer";
import todoItemsReducer from "./todoItemsReducer";

export default combineReducers({
  todoItems: todoItemsReducer,
  editing: editReducer,
  filter: filterReducer
});
