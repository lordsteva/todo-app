import types from "../actions/actionTypes";

const todoItemsReducer = (todoItems = [], action) => {
  switch (action.type) {
    case types.FETCH_TODOS:
      return action.payload;
    case types.ADD_TODO:
      return [...todoItems, action.payload];
    case types.REMOVE_TODO:
      return todoItems.filter(item => item.id !== action.payload);
    case types.EDIT_TODO:
      const edited = action.payload;
      return todoItems.map(item =>
        item.id !== edited.id ? item : { ...item, ...edited }
      );
    case types.REMOVE_COMPLETED_TODOS:
      return todoItems.filter(item => !item.completed);
    default:
      return todoItems;
  }
};

export default todoItemsReducer;
