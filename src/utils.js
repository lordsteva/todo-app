const loadData = () => {
  const items = localStorage.getItem("items");
  if (items) {
    const id = localStorage.getItem("id");
    return { id: id * 1, items: JSON.parse(items) };
  }
  return { id: 1, items: [] };
};

const saveData = (items, id) => {
  localStorage.setItem("items", JSON.stringify(items));
  if (id) localStorage.setItem("id", id);
};

const removeTodo = id => {
  const items = JSON.parse(localStorage.getItem("items"));
  const newItems = items.filter(item => item.id !== id);
  localStorage.setItem("items", JSON.stringify(newItems));
};

const addTodo = caption => {
  const items = JSON.parse(localStorage.getItem("items"));
  const id = localStorage.getItem("id");
  let item = { id, caption };
  items.push();
  saveData(items, id + 1);
  return item;
};

export default { loadData, saveData, removeTodo, addTodo };
