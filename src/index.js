import Crud from './module/render.js';
import './style.css';

const list = document.getElementById('list');

const crud = new Crud();

window.onload = () =>{

  () => {
    setTimeout('location.reload(true);', 50000);
    console.log('realoas')
  }
  crud.getBooks();
  crud.arr.forEach((item) => {
  crud.displayList(item);
  document.querySelectorAll('i').forEach((item) =>{
    
    item.addEventListener('click', () => {
      if(item.classList.contains('fa-ellipsis-v')){
        item.classList.add('fa-trash');
        item.classList.remove('fa-ellipsis-v');
        console.log(item);
        crud.edit()
      }else if(item.classList.contains('fa-trash')){
        item.classList.add('fa-ellipsis-v');
        item.classList.remove('fa-trash');
        const parent = item.parentNode;
        console.log(parent);
        crud.deleteFunction(parent);
      }
    })
  });
  });
}


const task = document.querySelector('task-description');
const form = document.getElementById('form');

const input = document.getElementById('input-task')
input.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    crud.addTask();
    input.value = '';
  
    event.preventDefault();

  };
});
