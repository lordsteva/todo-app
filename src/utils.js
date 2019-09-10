import { firestore, todosCollection } from "./firestore";

export const loadData = async () => {
  const todosRef = await todosCollection.get();
  return todosRef.docs.map(entry => {
    let data = entry.data();
    return { id: entry.id, ...data };
  });
};

export const removeTodo = async id => {
  return await todosCollection.doc(id).delete();
};

export const addTodo = async caption => {
  const todo = {
    caption,
    completed: false
  };
  const docRef = await todosCollection.add(todo);
  todo.id = docRef.id;
  return todo;
};

export const editTodo = async edited => {
  let data = { ...edited };
  delete data.id;
  return await todosCollection.doc(edited.id).update(data);
};

export const removeCompletedTodos = async () => {
  const todosRef = await todosCollection.get();
  const batch = firestore.batch();

  todosRef.docs.forEach(doc => {
    if (doc.data()["completed"]) batch.delete(doc.ref);
  });
  return await batch.commit();
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
