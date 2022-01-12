import taskArr from './module/task.js';
import './style.css';

const list = document.getElementById('list');

const displayList = (item) => {
  list.innerHTML += `<li>
  <div class="task-container">
  <input type="checkbox">&nbsp;
  <p class="task-description">${item.description}</p></div>
  <button type="button" class="li-btn"><span class="line"></span></button>
  </li>`;
};

taskArr.forEach((item) => {
  displayList(item);
});