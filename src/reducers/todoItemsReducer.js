const todoItemsReducer = (todoItems = [], action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...todoItems, action.payload];
    case "REMOVE_TODO":
      return todoItems.filter(item => item.id !== action.payload);
    case "EDIT_TODO":
      const edited = action.payload;
      return todoItems.map(item =>
        item.id !== edited.id ? item : { ...item, ...edited }
      );
    default:
      return todoItems;
  }
};

export default todoItemsReducer;
