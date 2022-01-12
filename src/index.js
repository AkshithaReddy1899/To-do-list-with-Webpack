import taskArr from './module/task.js';
import icon from './module/icon.js';
import css from "../src/style.css"

const list = document.getElementById('list');

const displayList = (item) => {
  list.innerHTML += `<li>
  <input type="checkbox">
  <p class="task-description">${item.description}</p>
  <button type="button" class="li-btn">${icon}</button>
  </li>`
}

taskArr.forEach((item) => {
  displayList(item);
})