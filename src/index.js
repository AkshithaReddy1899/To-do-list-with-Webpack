import Crud from './module/render';
import './style.css';

const crud = new Crud();

window.onload = () => {
  crud.getBooks();
  crud.UpdateLocalStorage();
  crud.arr.sort((a, b) => a.index - b.index);
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