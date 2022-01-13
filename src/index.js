import Crud from './module/render.js';
import './style.css';

const list = document.getElementById('list');

const crud = new Crud();

  crud.getBooks();
  crud.arr.forEach((item) => {
  crud.displayList(item);
  });

const task = document.querySelector('task-description');
const form = document.getElementById('form');

const input = document.getElementById('input-task')
input.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    crud.addTask();
    input.value = '';
  
    event.preventDefault();

    document.querySelectorAll('ul li .li-btn').forEach((item) =>{
      item.addEventListener('click', crud.deleteFunction())
     })
  };
});
