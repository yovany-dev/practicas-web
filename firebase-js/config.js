import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgwjO0DCINjoR3bNihD8Vl5y8IiSY0uYA",
  authDomain: "todo-a225c.firebaseapp.com",
  projectId: "todo-a225c",
  storageBucket: "todo-a225c.appspot.com",
  messagingSenderId: "382228706505",
  appId: "1:382228706505:web:8d49cb7dfd1238522d0918"
};

export const firebaseApp = initializeApp(firebaseConfig);
