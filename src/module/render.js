import defaultObject from './default.js';
import { updateStatus } from './interactive-list.js';

class Crud {
  constructor() {
    this.arr = [];
  }

  UpdateLocalStorage() {
    localStorage.setItem('TaskList', JSON.stringify(this.arr));
  }

  getBooks() {
    if (localStorage.getItem('TaskList') === null) {
      const defaultParent = document.getElementById('default-list');
      defaultParent.style.display = 'block';
      defaultParent.innerHTML = `<li><p class="task-description">${defaultObject.description}</p></li>`;
    } else {
      this.arr = JSON.parse(localStorage.getItem('TaskList'));
    }
    return this.arr;
  }

  displayList(item) {
    const list = document.getElementById('list');
    const listLi = document.createElement('li');
    listLi.id = `${item.index}`;

    const inputCheck = document.createElement('input');
    inputCheck.type = 'checkbox';
    inputCheck.checked = false;
    inputCheck.id = 'inputCheck';
    inputCheck.className = 'inputCheck';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'input-description';
    input.className = 'input-description';
    input.disabled = true;
    input.value = `${item.description}`;

    const button = document.createElement('button');
    button.className = 'editBtn';
    button.type = 'button';

    const i = document.createElement('i');
    i.className = 'fa';
    i.classList.add('fa-ellipsis-v');

    list.appendChild(listLi);

    listLi.appendChild(inputCheck);
    listLi.appendChild(input);
    listLi.appendChild(button);

    button.appendChild(i);

    button.addEventListener('click', () => {
      if (i.classList.contains('fa-ellipsis-v')) {
        i.classList.add('fa-trash');
        i.classList.remove('fa-ellipsis-v');
        this.edit(input);
      } else if (i.classList.contains('fa-trash')) {
        i.classList.add('fa-ellipsis-v');
        i.classList.remove('fa-trash');
        this.deleteFunction(listLi, input.value);
      }
    });

    inputCheck.addEventListener('change', ()=>{
      const id = inputCheck.parentNode
      console.log(id);
      if(inputCheck.checked) {
        inputCheck.checked = true;
        input.style.textDecoration = 'line-through';
        input.classList.add('completed');
        updateStatus(item, true);
        this.UpdateLocalStorage();
      }else{
        input.classList.remove('completed');
        inputCheck.checked = false;
        input.style.textDecoration = 'none';
        updateStatus(item, false);
        this.UpdateLocalStorage();
      }
    })
  }

  edit(input) {
    input.disabled = false;
    const i = document.querySelector('i');
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        input.disabled = true;

        const parent = input.parentNode.id;
        const indexOf = this.arr[parent];
        if (i.classList.contains('fa-trash')) {
          i.classList.add('fa-ellipsis-v');
          i.classList.remove('fa-trash');
        }
        indexOf.description = input.value;
        this.UpdateLocalStorage();
      }
    });
  }

  deleteFunction(list) {
    list.remove();
    const index = this.arr[list.id];
    this.arr.splice(index, 1);

    this.UpdateLocalStorage();
  }

  addTask() {
    const taskDescription = document.getElementById('input-task').value;
    const error = document.getElementById('error');

    if (taskDescription === '') {
      error.textContent = 'Please Type in your task';
    } else {
      document.getElementById('default-list').style.display = 'none';
      error.textContent = '';

      const taskObject = {
        index: this.arr.length,
        description: taskDescription,
        completed: false,
      };

      this.arr.push(taskObject);
      this.UpdateLocalStorage();
      this.displayList(taskObject);
    }
  }
}

export default Crud;