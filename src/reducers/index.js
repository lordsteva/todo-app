import { combineReducers } from "redux";

function todoItemsReducer(todoItems = [], action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...todoItems, action.payload];
    case "REMOVE_TODO":
      return todoItems.filter(item => item.id !== action.payload);
    default:
      return todoItems;
  }
}

function editReducer(selected = null, action) {
  switch (action.type) {
    case "EDIT_TODO":
      return action.payload;
    default:
      return selected;
  }
}

export default combineReducers({
  todoItems: todoItemsReducer,
  selected: editReducer
});
