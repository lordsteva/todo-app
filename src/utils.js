export const loadData = () => {
  const items = localStorage.getItem("items");
  if (items) {
    const id = localStorage.getItem("id");
    return { id: id * 1, items: JSON.parse(items) };
  }
  saveData([], 1);
  return { id: 1, items: [] };
};

export const saveData = (items, id) => {
  localStorage.setItem("items", JSON.stringify(items));
  if (id) localStorage.setItem("id", id);
};

export const removeTodo = id => {
  const items = JSON.parse(localStorage.getItem("items"));
  const newItems = items.filter(item => item.id !== id);
  localStorage.setItem("items", JSON.stringify(newItems));
};

export const addTodo = caption => {
  const { id, items } = loadData();
  let item = { id, caption, completed: false };
  items.push(item);
  saveData(items, id * 1 + 1);
  return item;
};

export const editTodo = edited => {
  let items = loadData().items;
  items = items.map(item =>
    item.id === edited.id ? { ...item, ...edited } : item
  );
  saveData(items);
};

export const filterTypes = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed"
};

export default { loadData, saveData, addTodo, removeTodo, editTodo };
