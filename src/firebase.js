import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB7K9Xkiem5qvUA2RUA0cIn_wxD_thOzTU",
  authDomain: "todo-app-b185b.firebaseapp.com",
  databaseURL: "https://todo-app-b185b-default-rtdb.firebaseio.com",
  projectId: "todo-app-b185b",
  storageBucket: "todo-app-b185b.appspot.com",
  messagingSenderId: "861407560294",
  appId: "1:861407560294:web:b092c8992176151f2ee3a7",
  measurementId: "G-RYN1VVZR64"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
