import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"
import { login, logout } from "./auth.js";
import { insert, getItems, updateTodo } from "./firestore.js";
import { getUUID } from './utils.js'
import { firebaseApp } from "./config.js";

const buttonLogin = document.getElementById('button-login');
const buttonLogout = document.getElementById('button-logout');
const todoForm = document.getElementById('todo-form');
const userInfo = document.getElementById('user-info');
const todoInput = document.getElementById('todo-input');
const todosContainer = document.getElementById('todos-container');

let currentUser;
let todos = [];

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  if (user) {
    currentUser = user;
    console.log('usuario logueado', currentUser.displayName);
    init();
  } else {
    console.log('Sesion cerrada');
    hiddeUI();
  }
});

buttonLogin.addEventListener('click', async (e) => {
  try {
    currentUser = await login();
  } catch(error) {
    throw new Error(error);
  }
});

buttonLogout.addEventListener('click', e => {
  logout();
  hiddeUI();
});

todoForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = todoInput.value;

  if (text !== '') {
    addTodo(text);
    todoInput.value = '';
    loadTodos();
  }
})

async function addTodo(text) {
  try {
    const todo = {
      id: getUUID(),
      text: text,
      completed: false,
      userid: currentUser.uid,
    }
    const response = await insert(todo);
  } catch(e) {
    throw new Error(e);
  }
}

function init() {
  buttonLogin.classList.add('hidden');
  buttonLogout.classList.remove('hidden');
  todoForm.classList.remove('hidden');

  userInfo.innerHTML = `
  <img src="${currentUser.photoURL}" width="32px" />
  <span>${currentUser.displayName}</span>
  `;
  loadTodos();
}

async function loadTodos() {
  todosContainer.innerHTML = '';
  todos = [];

  try {
    const response = await getItems(currentUser.uid);
    todos = [...response];
    renderTodos();
  } catch(error) {
    throw new Error(error);
  }
}

function renderTodos() {
  let html = '';
  todos.forEach(todo => {
    html += `
      <li>
        <input id="${todo.id}" type="checkbox" ${todo.completed ? 'checked' : ''} />
        <span>${todo.text}</span>
      </li>
    `;
  });
  todosContainer.innerHTML = html;

  document.querySelectorAll('#todos-container input[type=checkbox]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const id = checkbox.id;
      const todo = todos.find((todo) => todo.id == id);
      todo.completed = checkbox.checked;

      try {
        updateTodo(id, todo);
      } catch (error) {
        throw new Error(error);
      }
    })
  })
}

function hiddeUI() {
  buttonLogin.classList.remove('hidden');
  buttonLogout.classList.add('hidden');
  todoForm.classList.add('hidden');
  todosContainer.innerHTML = '';
}
