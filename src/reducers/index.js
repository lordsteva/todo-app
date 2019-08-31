import { combineReducers } from "redux";

function todoItemsReducer(todoItems, action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_ITEM": {
      return [...todoItems, action.payload];
    }
    case "REMOVE_ITEM": {
      return todoItems.filter(item => item.id !== action.payload);
    }
    default:
      return todoItems;
  }
}

export default combineReducers({ todoItems: todoItemsReducer });
