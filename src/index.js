import taskArr from './module/task.js';
import { displayList } from './module/display.js';
import css from './style.css';

const list = document.getElementById('list');


taskArr.forEach((item) => {
  displayList(item);
});