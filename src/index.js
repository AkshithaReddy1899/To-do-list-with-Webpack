import Crud from './module/render.js';
import './style.css';

const crud = new Crud();

window.onload = () => {
  crud.getBooks();
  crud.arr.sort((a, b) => a.index - b.index);
  crud.UpdateLocalStorage();
  crud.arr.forEach((item) => {
    crud.displayList(item);
  });
};

const input = document.getElementById('input-task');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    crud.addTask();
    event.preventDefault();
    input.value = '';
  }
});

document.getElementById('clear').addEventListener('click', () => {
  crud.arr = crud.arr.filter((item) => item.completed === false);
  crud.UpdateLocalStorage();
  document.getElementById('list').textContent = '';
  document.getElementById('list').style.display = 'block';
  crud.arr.forEach((item) => crud.displayList(item));
});
