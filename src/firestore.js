import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYn9LEynXyq_zOoqFbph_WOjs38u2Tp9E",
  authDomain: "todo-app-e75d6.firebaseapp.com",
  databaseURL: "https://todo-app-e75d6.firebaseio.com",
  projectId: "todo-app-e75d6",
  storageBucket: "todo-app-e75d6.appspot.com",
  messagingSenderId: "61307047524",
  appId: "1:61307047524:web:044202417ade4f0eb3d971"
};

export const firestore = firebase.initializeApp(firebaseConfig).firestore();
export const todosCollection = firestore.collection("todos");
