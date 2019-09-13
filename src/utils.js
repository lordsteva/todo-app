import firebase from "firebase";
import { firestore, todosCollection, timersCollection } from "./firestore";

export const loadData = async () => {
  const todosRef = await todosCollection.orderBy("created").get();
  return todosRef.docs.map(doc => {
    const data = doc.data();
    return { id: doc.id, ...data };
  });
};

export const removeTodo = async id => {
  return await todosCollection.doc(id).delete();
};

export const addTodo = async caption => {
  const todo = {
    created: firebase.firestore.Timestamp.fromDate(new Date()),
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

export const startTimer = async todoId => {
  const docRef = todosCollection.doc(todoId);
  const startTime = firebase.firestore.Timestamp.fromDate(new Date());
  const timer = {
    startTime,
    docRef
  };
  const timerRef = await timersCollection.add(timer);
  return { id: timerRef.id, todoId, startTime };
};

export const endTimer = async timerId => {
  const endTime = firebase.firestore.Timestamp.fromDate(new Date());
  const timerRef = timersCollection.doc(timerId);
  await timerRef.update({ endTime });
  return endTime;
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
  removeCompletedTodos,
  startTimer
};
