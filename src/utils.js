import firestore from "./firestore";

export const loadData = async () => {
  const todosCollection = await firestore.get();
  return todosCollection.docs.map(entry => {
    let data = entry.data();
    return { id: entry.id, ...data };
  });
};

const saveData = (items, id) => {
  localStorage.setItem("items", JSON.stringify(items));
  if (id) localStorage.setItem("id", id);
};

export const removeTodo = id => {
  const items = JSON.parse(localStorage.getItem("items"));
  const newItems = items.filter(item => item.id !== id);
  localStorage.setItem("items", JSON.stringify(newItems));
};

export const addTodo = async caption => {
  /* const { id, items } = loadData();
  let item = { id, caption, completed: false };
  items.push(item);
  saveData(items, id * 1 + 1);*/
  const todo = {
    caption,
    completed: false
  };
  const docRef = await firestore.add(todo);
  todo.id = docRef.id;
  return todo;
};

export const editTodo = edited => {
  let items = loadData().items;
  items = items.map(item =>
    item.id === edited.id ? { ...item, ...edited } : item
  );
  saveData(items);
};

export const removeCompletedTodos = () => {
  let items = loadData().items;
  items = items.filter(item => !item.completed);
  saveData(items);
};
export const filterTypes = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed"
};

export default {
  loadData,
  addTodo,
  removeTodo,
  editTodo,
  removeCompletedTodos
};
